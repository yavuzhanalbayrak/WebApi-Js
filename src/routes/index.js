import { Router } from "express";
const router = Router();
import Result from "../utils/result.js";

import healthCheck from "./v1/healthCheckRoutes.js";

import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Web API - JS",
      version: "1.0.0",
      description: "This is a simple API documentation with Swagger",
    },
  },
  apis: ["./src/routes/**/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

router.use("/api/v1", router);

router.use("/healthCheck", healthCheck);

router.use((req, res, next) => {
  res.status(404).json(Result.failureResponse("Route not found"));
});
export default router;
