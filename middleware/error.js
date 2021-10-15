import httpStatus from "http-status";

export const returnError = async (err, req, res, next) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).send({
    error: err.message,
  });
};
