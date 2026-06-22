require("dotenv").config();

const express = require("express");
const cors = require("cors");

const memberRoutes = require("./routes/memberRoutes");
const authRoutes = require("./routes/authRoutes"); // ✅ add this

const app = express();

// CORS - allow your Vercel frontend
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend.vercel.app" // ✅ replace with your actual Vercel URL
  ],
  credentials: true
}));

app.use(express.json());

// ✅ Health check - keeps Render from sleeping
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// Routes
app.use("/api/auth", authRoutes);     // ✅ add this
app.use("/api/members", memberRoutes);

// ✅ 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.path} not found` });
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("SERVER ERROR:", err.message);
  res.status(500).json({ message: "Internal server error", error: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});