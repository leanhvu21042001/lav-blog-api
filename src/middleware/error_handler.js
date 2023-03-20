import createError from "http-errors";

export const handleError = (error) => {
  throw error;
};

export const notFound = (_req, _res, next) => {
  next(createError(404));
};

export const internalServerError = (err, req, res, _next) => {
  return res.json({
    status: err.status || 500,
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
};
