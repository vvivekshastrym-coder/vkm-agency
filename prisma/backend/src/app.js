const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const { apiLimiter, authLimiter } = require("./middleware/rate-limiters");
const { errorHandler } = require("./middleware/error-handler");
const authRoutes = require("./routes/auth");
const projectRoutes = require("./routes/projects");
const planRoutes = require("./routes/plans");
const galleryRoutes = require("./routes/gallery");
const ticketRoutes = require("./routes/tickets");
const userRoutes = require("./routes/users");
const chatbotRoutes = require("./routes/chatbot");
const contactRoutes = require("./routes/contact");
const newsletterRoutes = require("./routes/newsletter");

function createApp() {
  const app = express();

  app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
  app.use(
    cors({
      origin: process.env.CLIENT_URL || "http://localhost:3000",
      credentials: true,
    }),
  );
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(morgan("dev"));
  app.use("/uploads", express.static(path.resolve(process.cwd(), "backend", "uploads")));

  app.get("/api/health", (req, res) => {
    res.json({ success: true, message: "VKM backend is healthy." });
  });

  app.use("/api", apiLimiter);
  app.use("/api/auth", authLimiter, authRoutes);
  app.use("/api/projects", projectRoutes);
  app.use("/api/plans", planRoutes);
  app.use("/api/gallery", galleryRoutes);
  app.use("/api/tickets", ticketRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/chatbot", chatbotRoutes);
  app.use("/api/contact", contactRoutes);
  app.use("/api/newsletter", newsletterRoutes);

  app.use(errorHandler);

  return app;
}

module.exports = { createApp };

