import swaggerJSDoc from "swagger-jsdoc";
import env from "./env.js";
const PORT = env.PORT;
const URL = env.URL;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Web API - JS",
      version: "1.0.0",
      description: "This is a simple API documentation with Swagger",
    },
    servers: [
      {
        url: `${URL}:${PORT}/api/v1`,
        description: "Local server",
      },
    ],
  },
  apis: ["./src/routes/**/*.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;
