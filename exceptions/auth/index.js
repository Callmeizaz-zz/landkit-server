import httpStatus from "http-status";

import BaseError from "../../helpers/APIError.js";

export const emailIdAlreadyExists = new BaseError(
  undefined,
  httpStatus.FORBIDDEN,
  "Email already exists!"
);

export const userNotExists = new BaseError(
  undefined,
  httpStatus.NOT_FOUND,
  "User not found! Please check the email"
);

export const incorrectPassword = new BaseError(
  undefined,
  httpStatus.FORBIDDEN,
  "Incorrect password"
);
