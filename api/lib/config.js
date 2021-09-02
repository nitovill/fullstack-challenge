require("dotenv").config();

const config = {
  port: process.env.API_PORT || "3001",
  cors: process.env.CORS || "http://localhost:3000",
};

module.exports = config;
