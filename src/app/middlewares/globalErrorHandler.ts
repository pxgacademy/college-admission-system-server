/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { env_config } from "../../config";

export default function globalErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isDev = env_config.node_env === "development";

  let statusCode = err?.statusCode || 500;
  const message = err?.message || "Internal Server Error";

  const errorResponse = {
    success: false,
    message,
    error: {
      name: err?.name || "Error",
      errors: err?.errors || message,
    },
    stack: isDev ? err?.stack : undefined,
  };

  // Handle specific error types
  switch (err?.name) {
    case "ValidationError":
      statusCode = 400;
      errorResponse.message = "Validation Failed";
      break;

    case "MongooseError":
      statusCode = 400;
      errorResponse.message = "Database Error";
      break;

    // Add more specific cases if needed (e.g., CastError, ZodError)
  }

  res.status(statusCode).json(errorResponse);
}
