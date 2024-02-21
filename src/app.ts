import express, { NextFunction, Request, Response } from "express";
import createHttpError, { HttpError } from "http-errors";
import logger from "./config/logger";

const app = express();

app.get("/", async function (req, res, next) {
  res.send("Auth-Service");
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    errors: [
      {
        type: err.name,
        msg: err.message,
        path: "",
        location: "",
      },
    ],
  });
});

export default app;
