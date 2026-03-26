const mongoose = require("mongoose");

const planSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    monthlyPrice: { type: String, required: true },
    yearlyPrice: { type: String, required: true },
    description: { type: String, required: true },
    features: [{ type: String, required: true }],
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
);

module.exports = mongoose.models.Plan || mongoose.model("Plan", planSchema);

