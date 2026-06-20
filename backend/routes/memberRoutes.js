const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  authorizeRoles
} = require("../middleware/roleMiddleware");

const {
  getMembers
} = require("../controllers/memberController");

router.get(
  "/",
  auth,
  authorizeRoles(
    "admin",
    "manager",
    "teller",
    "loan_officer"
  ),
  getMembers
);

module.exports = router;