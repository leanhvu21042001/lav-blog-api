import httpStatus from "http-status";

class ExtendableError extends Error {
  constructor({ message, errors, status, isPublic, stack }) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errors = errors;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true;
    this.stack = stack;
  }
}

class APIError extends ExtendableError {
  constructor({
    message,
    errors,
    stack,
    status = httpStatus.INTERNAL_SERVER_ERROR,
    isPublic = false,
  }) {
    super({
      message,
      errors,
      status,
      isPublic,
      stack,
    });
  }

  static NotFound(error) {
    return new APIError({
      ...error,
      message: "Not found",
      status: httpStatus.NOT_FOUND,
    });
  }

  static BadRequest(error) {
    return new APIError({
      ...error,
      message: "Bad request",
      status: httpStatus.BAD_REQUEST,
    });
  }

  static ValidationError(error) {
    return new APIError({
      ...error,
      message: "Validation Error",
      status: httpStatus.BAD_REQUEST,
    });
  }
}

export default APIError;
