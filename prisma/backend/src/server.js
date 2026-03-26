const dotenv = require("dotenv");
dotenv.config();

const { connectDatabase } = require("./config/db");
const { createApp } = require("./app");

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await connectDatabase();
    const app = createApp();
    app.listen(PORT, () => {
      console.log(`VKM backend running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start backend", error);
    process.exit(1);
  }
}

start();

