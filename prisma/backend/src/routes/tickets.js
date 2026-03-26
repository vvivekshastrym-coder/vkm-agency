const express = require("express");
const { z } = require("zod");
const SupportTicket = require("../models/support-ticket");
const { requireAuth } = require("../middleware/auth");
const { validate } = require("../middleware/validate");

const router = express.Router();

const ticketSchema = z.object({
  body: z.object({
    subject: z.string().min(4),
    category: z.string().min(2),
    description: z.string().min(10),
    priority: z.enum(["low", "medium", "high"]).optional(),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

router.get("/", requireAuth, async (req, res, next) => {
  try {
    const filter = req.user.role === "admin" ? {} : { user: req.user.id };
    const tickets = await SupportTicket.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, data: tickets });
  } catch (error) {
    next(error);
  }
});

router.post("/", requireAuth, validate(ticketSchema), async (req, res, next) => {
  try {
    const ticket = await SupportTicket.create({ ...req.validated.body, user: req.user.id });
    res.status(201).json({ success: true, data: ticket });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

