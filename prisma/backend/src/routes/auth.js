const express = require("express");
const bcrypt = require("bcryptjs");
const { z } = require("zod");
const User = require("../models/user");
const { signToken } = require("../utils/sign-token");
const { validate } = require("../middleware/validate");

const router = express.Router();

const registerSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email: z.email(),
    password: z.string().min(8),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

const loginSchema = z.object({
  body: z.object({
    email: z.email(),
    password: z.string().min(8),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

router.post("/register", validate(registerSchema), async (req, res, next) => {
  try {
    const { name, email, password } = req.validated.body;
    const existing = await User.findOne({ email });

    if (existing) {
      return res.status(409).json({ success: false, message: "Account already exists." });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, passwordHash });

    res.status(201).json({
      success: true,
      token: signToken(user),
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    next(error);
  }
});

router.post("/login", validate(loginSchema), async (req, res, next) => {
  try {
    const { email, password } = req.validated.body;
    const user = await User.findOne({ email });

    if (!user || !user.passwordHash) {
      return res.status(401).json({ success: false, message: "Invalid credentials." });
    }

    const isValid = await bcrypt.compare(password, user.passwordHash);

    if (!isValid) {
      return res.status(401).json({ success: false, message: "Invalid credentials." });
    }

    res.json({
      success: true,
      token: signToken(user),
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/oauth/providers", (req, res) => {
  res.json({
    success: true,
    providers: ["google", "github", "email"],
    message: "Configure provider secrets before enabling OAuth callbacks.",
  });
});

module.exports = router;

