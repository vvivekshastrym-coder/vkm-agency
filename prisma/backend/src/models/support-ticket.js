const mongoose = require("mongoose");

const supportTicketSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    status: { type: String, enum: ["open", "in-progress", "resolved"], default: "open" },
    priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.models.SupportTicket || mongoose.model("SupportTicket", supportTicketSchema);

