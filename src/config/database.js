import { connect } from "mongoose";
import logger from "./logger.js";

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("✅ MongoDB bağlantısı başarılı.");
  } catch (error) {
    logger.error("❌ MongoDB bağlantı hatası:", error);
    process.exit(1);
  }
};

export default connectDB;
