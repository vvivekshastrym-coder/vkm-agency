const express = require("express");
const { z } = require("zod");
const Project = require("../models/project");
const { requireAuth, requireAdmin } = require("../middleware/auth");
const { validate } = require("../middleware/validate");

const router = express.Router();

const projectSchema = z.object({
  body: z.object({
    title: z.string().min(2),
    slug: z.string().min(2),
    category: z.string().min(2),
    summary: z.string().min(10),
    tags: z.array(z.string()).default([]),
    imageUrl: z.string().optional(),
    featured: z.boolean().optional(),
    published: z.boolean().optional(),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json({ success: true, data: projects });
  } catch (error) {
    next(error);
  }
});

router.post("/", requireAuth, requireAdmin, validate(projectSchema), async (req, res, next) => {
  try {
    const project = await Project.create(req.validated.body);
    res.status(201).json({ success: true, data: project });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

