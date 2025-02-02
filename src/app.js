import express, { json, urlencoded } from "express";
import cors from "cors";
import helmet from 'helmet';
import connectDB from './config/database.js';
import logger, { logRequests } from "./config/logger.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import env from "./config/env.js";

const app = express();

app.use(logRequests);

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

connectDB();

app.use(routes);

app.use(errorHandler);

const PORT = env.PORT;

app.listen(PORT, () => {
  logger.info(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
