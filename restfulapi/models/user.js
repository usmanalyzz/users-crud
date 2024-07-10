var mongoose = require("mongoose");

var userSchema = mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    jobtitle: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

var User = mongoose.model("User", userSchema);

module.exports = { User };
