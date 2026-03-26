const express = require("express");
const { z } = require("zod");

const router = express.Router();

const contactSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email: z.email(),
    company: z.string().optional(),
    message: z.string().min(10),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

router.post("/", (req, res) => {
  const parsed = contactSchema.safeParse({ body: req.body, query: req.query, params: req.params });

  if (!parsed.success) {
    return res.status(400).json({ success: false, message: "Validation failed.", issues: parsed.error.issues });
  }

  res.status(201).json({
    success: true,
    data: parsed.data.body,
    message: "Contact request received. Connect email transport to deliver messages.",
  });
});

module.exports = router;

