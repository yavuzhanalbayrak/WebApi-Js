import Result from "../utils/result.js";
import logger from "../config/logger.js";

export default (err, req, res, next) => {
    logger.error(err);
    res.status(err.status || 500).json(Result.failureResponse(err.message || 'Bilinmeyen bir hata oluştu'));
};
