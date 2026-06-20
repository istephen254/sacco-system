const pool = require("../config/db");

// CREATE MEMBER
exports.createMember = async (req, res) => {
  try {
    const {
      first_name,
      middle_name,
      last_name,
      gender,
      dob,
      national_id,
      phone,
      email,
      membership_type,
      branch
    } = req.body;

    const year = new Date().getFullYear();

    const countResult = await pool.query(
      "SELECT COUNT(*) FROM members"
    );

    const sequence = String(
      parseInt(countResult.rows[0].count) + 1
    ).padStart(5, "0");

    const memberNumber = `SAC${year}${sequence}`;

    const result = await pool.query(
      `
      INSERT INTO members (
        member_number,
        first_name,
        middle_name,
        last_name,
        gender,
        dob,
        national_id,
        phone,
        email,
        membership_type,
        branch
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
      RETURNING *
      `,
      [
        memberNumber,
        first_name,
        middle_name,
        last_name,
        gender,
        dob,
        national_id,
        phone,
        email,
        membership_type,
        branch
      ]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
};

// GET ALL MEMBERS
exports.getMembers = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT *
      FROM members
      ORDER BY id DESC
    `);

    res.json(result.rows);

  } catch (error) {
    res.status(500).json(error);
  }
};

// GET MEMBER
exports.getMember = async (req, res) => {
  try {
    const result = await pool.query(
      `
      SELECT *
      FROM members
      WHERE id = $1
      `,
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Member not found"
      });
    }

    res.json(result.rows[0]);

  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE MEMBER
exports.updateMember = async (req, res) => {
  try {
    const {
      first_name,
      middle_name,
      last_name,
      phone,
      email,
      status
    } = req.body;

    const result = await pool.query(
      `
      UPDATE members
      SET
        first_name=$1,
        middle_name=$2,
        last_name=$3,
        phone=$4,
        email=$5,
        status=$6,
        updated_at=NOW()
      WHERE id=$7
      RETURNING *
      `,
      [
        first_name,
        middle_name,
        last_name,
        phone,
        email,
        status,
        req.params.id
      ]
    );

    res.json(result.rows[0]);

  } catch (error) {
    res.status(500).json(error);
  }
};

// DELETE MEMBER
exports.deleteMember = async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM members WHERE id=$1",
      [req.params.id]
    );

    res.json({
      message: "Member deleted successfully"
    });

  } catch (error) {
    res.status(500).json(error);
  }
};

// MEMBER STATS
exports.memberStats = async (req, res) => {
  try {
    const total = await pool.query(
      "SELECT COUNT(*) FROM members"
    );

    const active = await pool.query(
      "SELECT COUNT(*) FROM members WHERE status='Active'"
    );

    const inactive = await pool.query(
      "SELECT COUNT(*) FROM members WHERE status='Inactive'"
    );

    res.json({
      totalMembers: Number(total.rows[0].count),
      activeMembers: Number(active.rows[0].count),
      inactiveMembers: Number(inactive.rows[0].count)
    });

  } catch (error) {
    res.status(500).json(error);
  }
};