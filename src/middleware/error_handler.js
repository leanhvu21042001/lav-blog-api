import createError from "http-errors";

export const notFound = (req, res, nex) => {
  next(createError(404));
};
export const internalServerError = (err, req, res, next) => {
  return res.json({
    status: err.status || 500,
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
};
