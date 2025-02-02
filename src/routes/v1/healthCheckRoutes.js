import { Router } from 'express';
const router = Router();
import { getHealthCheck } from '../../controllers/healthCheckController.js';

router.post('/', getHealthCheck);

export default router;
