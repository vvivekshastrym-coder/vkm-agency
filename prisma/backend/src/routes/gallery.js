const express = require("express");
const { z } = require("zod");
const GalleryItem = require("../models/gallery-item");
const { requireAuth, requireAdmin } = require("../middleware/auth");
const { upload } = require("../middleware/upload");
const { validate } = require("../middleware/validate");

const router = express.Router();

const gallerySchema = z.object({
  body: z.object({
    title: z.string().min(2),
    category: z.string().min(2),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

router.get("/", async (req, res, next) => {
  try {
    const items = await GalleryItem.find().sort({ createdAt: -1 });
    res.json({ success: true, data: items });
  } catch (error) {
    next(error);
  }
});

router.post("/", requireAuth, requireAdmin, upload.single("image"), validate(gallerySchema), async (req, res, next) => {
  try {
    const item = await GalleryItem.create({
      ...req.validated.body,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : "",
      uploadedBy: req.user.id,
    });

    res.status(201).json({ success: true, data: item });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

