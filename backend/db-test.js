const pool = require("./db");

async function testConnection() {
  try {
    console.log("⏳ Testing database connection...");

    const result = await pool.query("SELECT NOW()");

    console.log("✅ Database connected successfully!");
    console.log("🕒 Server time:", result.rows[0]);
  } catch (error) {
    console.error("❌ Database connection failed:");
    console.error(error.message);
  } finally {
    await pool.end();
  }
}

testConnection();