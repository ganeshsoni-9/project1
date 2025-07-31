const express = require("express");
const router = express.Router();
const Notice = require("../models/Notice");

// GET all notices
router.get("/", async (req, res) => {
  const notices = await Notice.find().sort({ date: -1 });
  res.json(notices);
});

// POST a new notice
router.post("/", async (req, res) => {
  const { title, date } = req.body;
  const newNotice = new Notice({ title, date });
  await newNotice.save();
  res.json(newNotice);
});

// DELETE a notice
router.delete("/:id", async (req, res) => {
  await Notice.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
