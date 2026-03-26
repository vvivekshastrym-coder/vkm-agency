const mongoose = require("mongoose");

async function connectDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  return mongoose.connect(process.env.MONGODB_URI, {
    autoIndex: true,
  });
}

module.exports = { connectDatabase };

