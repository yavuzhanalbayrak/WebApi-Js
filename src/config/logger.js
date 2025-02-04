import {
  createLogger,
  format as _format,
  transports as _transports,
} from "winston";

const logger = createLogger({
  level: "debug",
  format: _format.combine(
    _format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    _format.errors({ stack: true })
  ),
  transports: [
    new _transports.Console({
      format: _format.combine(
        _format.colorize(),
        _format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        _format.printf(
          ({ timestamp, level, message }) =>
            `${timestamp} [${level}]: ${message}`
        )
      ),
    }),
    new _transports.File({
      filename: "logs/error.log",
      level: "error",
      format: _format.printf(
        ({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`
      ),
    }),
  ],
});

export const logRequests = (req, res, next) => {
  const method = req.method;
  const url = req.originalUrl;

  logger.info(`${method} ${url}`);

  next();
};

export default logger;
