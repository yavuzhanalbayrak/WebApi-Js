import { Router } from "express";
const router = Router();
import Result from "../utils/result.js";

import healthCheck from "./v1/healthCheckRoutes.js";

import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../config/swaggerConfig.js";

router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

router.use("/api/v1", router);

router.use("/healthCheck", healthCheck);

router.use((req, res, next) => {
  res.status(404).json(Result.failureResponse("Route not found"));
});
export default router;
