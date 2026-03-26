const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String },
    avatarUrl: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    provider: { type: String, enum: ["email", "google", "github"], default: "email" },
  },
  { timestamps: true },
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);

