import { healthCheck } from '../services/healthCheckService.js';

export async function getHealthCheck(req, res, next) {
    try {
        const response = await healthCheck(req.query);
        res.status(200).json({ success: true, data: response });
    } catch (error) {
        next(error);
    }
}