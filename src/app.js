import express, { json, urlencoded } from "express";
import cors from "cors";
// import helmet from 'helmet';
// import morgan from 'morgan';
// import connectDB from './config/database';
// import { info } from './config/logger';
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import env from "./config/env.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());
// app.use(helmet());
// app.use(morgan('dev'));

// connectDB();

app.use(routes);

app.use(errorHandler);

const PORT = env.PORT;

app.listen(PORT, () => {
  // info(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

export default app;
