const express = require("express");
const { z } = require("zod");
const Plan = require("../models/plan");
const { requireAuth, requireAdmin } = require("../middleware/auth");
const { validate } = require("../middleware/validate");

const router = express.Router();

const planSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    slug: z.string().min(2),
    monthlyPrice: z.string().min(1),
    yearlyPrice: z.string().min(1),
    description: z.string().min(10),
    features: z.array(z.string()).min(1),
    active: z.boolean().optional(),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

router.get("/", async (req, res, next) => {
  try {
    const plans = await Plan.find().sort({ createdAt: 1 });
    res.json({ success: true, data: plans });
  } catch (error) {
    next(error);
  }
});

router.post("/", requireAuth, requireAdmin, validate(planSchema), async (req, res, next) => {
  try {
    const plan = await Plan.create(req.validated.body);
    res.status(201).json({ success: true, data: plan });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

