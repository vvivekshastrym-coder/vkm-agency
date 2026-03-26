const express = require("express");
const { z } = require("zod");
const Newsletter = require("../models/newsletter");

const router = express.Router();

const newsletterSchema = z.object({
  body: z.object({
    email: z.email(),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

router.post("/", async (req, res, next) => {
  try {
    const parsed = newsletterSchema.safeParse({ body: req.body, query: req.query, params: req.params });

    if (!parsed.success) {
      return res.status(400).json({ success: false, message: "Validation failed.", issues: parsed.error.issues });
    }

    const doc = await Newsletter.findOneAndUpdate(
      { email: parsed.data.body.email },
      { email: parsed.data.body.email },
      { upsert: true, new: true },
    );

    res.status(201).json({ success: true, data: doc });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

