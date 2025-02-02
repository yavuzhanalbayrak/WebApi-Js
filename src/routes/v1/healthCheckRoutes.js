import { Router } from 'express';
const router = Router();
import { getHealthCheck } from '../../controllers/healthCheckController.js';

/**
 * @swagger
 * /api/v1/healthCheck:
 *   get:
 *     summary: Check the health of the API
 *     description: Returns a simple health check message to indicate the API is working.
 *     operationId: getHealthCheck
 *     responses:
 *       200:
 *         description: A health check message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "API is running"
 */
router.get('/', getHealthCheck);


export default router;
