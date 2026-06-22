// src/server.js

// ─────────────────────────────────────────────────────────────
// Load the correct .env file based on NODE_ENV
// local dev  → .env.development
// production → Render injects env vars directly (no file needed)
// ─────────────────────────────────────────────────────────────
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("../routes/authRoutes");
const memberRoutes = require("../routes/memberRoutes");

const app = express();

// ─────────────────────────────────────────────────────────────
// SECURITY
// ─────────────────────────────────────────────────────────────
app.use(helmet());

// ─────────────────────────────────────────────────────────────
// CORS — allow local dev and your Vercel frontend
// ─────────────────────────────────────────────────────────────
const allowedOrigins = [
  "http://localhost:5173",   // Vite dev server
  "http://localhost:3000",   // fallback CRA port
  process.env.FRONTEND_URL,  // set this on Render → e.g. https://sacco-sytem.vercel.app
].filter(Boolean);           // removes undefined if FRONTEND_URL not set

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS: origin ${origin} not allowed`));
    },
    credentials: true,
  })
);

// ─────────────────────────────────────────────────────────────
// MIDDLEWARE
// ─────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// ─────────────────────────────────────────────────────────────
// ROUTES
// ─────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/members", memberRoutes);

// Health check — Render pings this to confirm the service is up
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "SACCO API is running",
    env: process.env.NODE_ENV,
  });
});

// ─────────────────────────────────────────────────────────────
// 404 HANDLER
// ─────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.path} not found` });
});

// ─────────────────────────────────────────────────────────────
// GLOBAL ERROR HANDLER
// ─────────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);

  // CORS errors
  if (err.message?.startsWith("CORS")) {
    return res.status(403).json({ error: err.message });
  }

  res.status(err.status || 500).json({
    error:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
});

// ─────────────────────────────────────────────────────────────
// START
// ─────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} [${process.env.NODE_ENV}]`);
});