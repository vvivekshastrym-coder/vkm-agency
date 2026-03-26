const express = require("express");
const Subscription = require("../models/subscription");
const User = require("../models/user");
const { requireAuth, requireAdmin } = require("../middleware/auth");

const router = express.Router();

router.get("/me", requireAuth, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("name email role provider createdAt");
    const subscriptions = await Subscription.find({ user: req.user.id }).populate("plan");
    res.json({ success: true, data: { user, subscriptions } });
  } catch (error) {
    next(error);
  }
});

router.get("/", requireAuth, requireAdmin, async (req, res, next) => {
  try {
    const users = await User.find().select("name email role provider createdAt").sort({ createdAt: -1 });
    res.json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
});

module.exports = router;

