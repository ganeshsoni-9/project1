const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// GET all students
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});

// Update fee status
router.put("/fee/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  student.feePaid = !student.feePaid;
  await student.save();
  res.json(student);
});

// Update attendance for a date
router.put("/attendance/:id", async (req, res) => {
  const { date, present } = req.body;
  const student = await Student.findById(req.params.id);
  student.attendance[date] = present;
  await student.save();
  res.json(student);
});

module.exports = router;

// ✅ Update fee payment status
router.put("/fee/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: "Student not found" });

    student.feePaid = !student.feePaid;
    await student.save();
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});
