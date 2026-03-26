const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    plan: { type: mongoose.Schema.Types.ObjectId, ref: "Plan", required: true },
    billingCycle: { type: String, enum: ["monthly", "yearly"], default: "monthly" },
    status: { type: String, enum: ["trial", "active", "paused", "cancelled"], default: "active" },
    invoiceUrl: { type: String },
  },
  { timestamps: true },
);

module.exports = mongoose.models.Subscription || mongoose.model("Subscription", subscriptionSchema);

