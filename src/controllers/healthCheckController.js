import { healthCheck } from '../services/healthCheckService.js';
import Result from '../utils/result.js';

export async function getHealthCheck(req, res, next) {
    try {
        const response = await healthCheck(req.query);
        res.status(200).json(Result.successResponse(response));
    } catch (error) {
        next(error);
    }
}