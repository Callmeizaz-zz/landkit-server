import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
} from "../controller/user-controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("We are on users");
});

router.post("/register", async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const user = await registerUser(name, email, password);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  const emailToLower = email.toString().toLowerCase();
  console.log(emailToLower);
  try {
    const user = await loginUser(emailToLower, password);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
