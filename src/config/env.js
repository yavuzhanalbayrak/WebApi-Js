import dotenv from "dotenv";
import path from "path";
import logger from "../config/logger.js";

dotenv.config();

const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const requiredEnvVars = ["MONGO_URI", "PORT", "URL"];
requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    logger.warn(`⚠️ Uyarı: ${key} değişkeni tanımlı değil.`);
  }
});

const config = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || "",
  NODE_ENV: process.env.NODE_ENV || "development",
  URL: process.env.URL || "http://localhost",
};

export default config;
