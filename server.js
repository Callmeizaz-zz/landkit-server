import express from "express";
import connect from "./connection.js";
import cors from "cors";
import dotenv from "dotenv";
// routes
import userRoute from "./router/users.js";
import { returnError } from "./middleware/error.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors("*"));
// app.use(logError);

// route middlewares
app.use("/users", userRoute);

// DB
connect();

// error handler middlwares
app.use(returnError);

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});
