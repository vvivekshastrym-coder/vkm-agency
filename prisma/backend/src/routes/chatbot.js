const express = require("express");
const { z } = require("zod");

const router = express.Router();

const chatbotSchema = z.object({
  body: z.object({
    prompt: z.string().min(2),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

router.post("/", (req, res) => {
  const prompt = req.body?.prompt || "";

  let answer = "VKM can help with launch sites, AI automations, subscriptions, and support workflows.";

  if (/pricing/i.test(prompt)) {
    answer = "Professional is the default recommendation for agencies that need a stronger website plus AI and analytics support.";
  } else if (/support|ticket/i.test(prompt)) {
    answer = "You can open a support ticket, browse FAQs, or use the helpdesk page to route requests.";
  } else if (/portfolio|project/i.test(prompt)) {
    answer = "The portfolio page shows featured launches, and admins can add new projects through secured backend routes.";
  }

  res.json({ success: true, data: { answer } });
});

module.exports = router;

