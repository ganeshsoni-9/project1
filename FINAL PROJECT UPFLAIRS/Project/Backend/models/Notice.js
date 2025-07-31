const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema({
  title: String,
  date: String,
});

module.exports = mongoose.model("Notice", noticeSchema);
