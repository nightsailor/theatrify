const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    }
  }
);

module.exports = mongoose.model("News", NewsSchema);
