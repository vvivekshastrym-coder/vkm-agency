const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    category: { type: String, required: true, trim: true },
    summary: { type: String, required: true },
    tags: [{ type: String, trim: true }],
    imageUrl: { type: String },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
  },
  { timestamps: true },
);

module.exports = mongoose.models.Project || mongoose.model("Project", projectSchema);

