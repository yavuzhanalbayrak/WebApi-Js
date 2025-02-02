import { mongoose } from "mongoose";
import logger from "./logger.js";
import env from "./env.js";

const connectDB = async () => {
  mongoose
    .connect(env.MONGO_URI)
    .then(() => logger.info("✅ MongoDB bağlantısı başarılı."))
    .catch((err) => logger.error("❌ MongoDB bağlantı hatası:", err));
};

export default connectDB;
