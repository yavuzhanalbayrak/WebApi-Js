import { healthCheck } from "../services/healthCheckService.js";
import Result from "../utils/result.js";

export const getHealthCheck = async (req, res, next) => {
  try {
    // const response = await healthCheck(req.query);
    // res.status(200).json(Result.successResponse(response));

    res.status(200).json(Result.successResponse(`${req.t("test.testSuccess")}`));

  } catch (error) {
    next(error);
  }
};
