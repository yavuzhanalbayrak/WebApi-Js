import express, { json, urlencoded } from 'express';
// import cors from 'cors';
// import helmet from 'helmet';
// import morgan from 'morgan';
// import connectDB from './config/database';
// import { info } from './config/logger';
import routes from './routes/index.js';
// import errorHandler from './middlewares/errorHandler';
import env from './config/env.js'; // env.js dosyasını import et

const app = express();

app.use(json()); 
app.use(urlencoded({ extended: true })); 
// app.use(cors());
// app.use(helmet()); 
// app.use(morgan('dev'));

// connectDB();

app.use('/api', routes);

app.use((req, res, next) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

// app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    // info(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`🚀 Server running on http://localhost:${env.PORT}`);
});

export default app;
