import bcrypt from "bcrypt";
import User from "../models/user-model.js";
import {
  emailIdAlreadyExists,
  incorrectPassword,
  userNotExists,
} from "../exceptions/auth/index.js";

export const registerUser = async (name, email, password, username) => {
  try {
    const user = await User.findOne({
      email,
    });
    if (user) {
      throw emailIdAlreadyExists;
    }
    const newUser = new User({
      name: name,
      email: email,
      password: password,
    });

    const saltRound = 10;
    newUser.password = await bcrypt.hash(password, saltRound);

    await newUser.save();

    const payload = {
      message: "User successfully created",
      user: {
        id: newUser._id,
      },
    };
    return payload;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw userNotExists;
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw incorrectPassword;
    }

    const payload = {
      message: "Successfully logged in!",
      user: {
        id: user.id,
        name: user?.name,
        email: user?.email,
      },
    };
    return payload;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const user = await User.findById(id);

    if (!user) {
      throw userNotExists;
    }

    const payload = {
      user: {
        name: user.name,
        username: user.username,
        email: user.email,
        id: user.id,
      },
    };
    return payload;
  } catch (error) {
    throw error;
  }
};
