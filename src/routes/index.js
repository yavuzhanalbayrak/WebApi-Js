import { Router } from 'express';
const router = Router();

import healthCheck from './v1/healthCheckRoutes.js';

router.use('/healthCheck', healthCheck);

export default router;
