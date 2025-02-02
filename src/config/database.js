import { mongoose } from "mongoose";
import logger from "./logger.js";
import env from "./env.js";

const connectDB = async () => {
  mongoose
    .connect(env.MONGO_URI)
    .then((connection) =>
      logger.info(
        `✅ MongoDB bağlantısı başarılı. ${connection.connection.host} - ${connection.connection.name}`
      )
    )
    .catch((err) => logger.error("❌ MongoDB bağlantı hatası:", err));
};

export default connectDB;
