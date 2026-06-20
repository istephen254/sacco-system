const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db"); // ✅ FIXED PATH

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { fullname, email, password, role } = req.body;

    const userExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (userExists.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await pool.query(
      `INSERT INTO users (fullname, email, password, role)
       VALUES ($1, $2, $3, $4)
       RETURNING id, fullname, email, role`,
      [fullname, email, hashedPassword, role]
    );

    res.json(newUser.rows[0]);

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].password
    );

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user.rows[0].id,
        role: user.rows[0].role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user.rows[0].id,
        fullname: user.rows[0].fullname,
        role: user.rows[0].role,
      },
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;