const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Student = require("../models/Student");

// Load .env variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));

// Create sample students
const students = [
  "Hemesh Mishra",
  "Ganesh Soni",
  "Chandraprakash",
  "Kuldeep Sunda",
  "Mohit Saini",
  ...Array.from({ length: 115 }, (_, i) => `Student ${i + 6}`),
];

async function seed() {
  try {
    await Student.deleteMany(); // Clear old data
    const inserted = await Student.insertMany(students.map(name => ({ name })));
    console.log(`✅ Seeded ${inserted.length} students.`);
    mongoose.disconnect();
  } catch (error) {
    console.error("Seeding failed:", error);
    mongoose.disconnect();
  }
}

seed();
