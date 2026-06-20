const pool = require("../config/db");

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
      Number(countResult.rows[0].count) + 1
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
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};