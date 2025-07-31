const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  attendance: {
    type: Map,
    of: Boolean,
    default: {},
  },
  feePaid: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Student", studentSchema);
