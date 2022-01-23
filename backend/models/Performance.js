const mongoose = require("mongoose");

const PerformanceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    totalCrew: {
      type: String,
      required: true,
    },
    eventAddress: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "",
    }
  }
);

module.exports = mongoose.model("Performance", PerformanceSchema);
