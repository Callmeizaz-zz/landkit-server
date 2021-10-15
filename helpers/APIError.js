import httpStatus from "http-status";

export default class BaseError extends Error {
  constructor(name, status = httpStatus.INTERNAL_SERVER_ERROR, message, code) {
    super(message);

    Object.setPrototypeOf(this, BaseError.prototype);

    this.name = name;
    this.status = status;
    this.message = message;
    this.code = code;

    Error.captureStackTrace(this);
  }
}
