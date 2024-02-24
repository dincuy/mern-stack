const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get all workouts" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({ message: "Get a single workout" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Post a new workout" });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: "Delete a new workout" });
});

router.patch("/:id", (req, res) => {
  res.status(200).json({ message: "Update a new workout" });
});

module.exports = router;
