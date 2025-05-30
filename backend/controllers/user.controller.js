import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    // const { password, ...user } = req.user.toObject();

    // if (!user) {
    //   const error = new Error("User not found");
    //   error.statusCode = 404;
    //   throw error;
    // }

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("User doesn't exist");
      error.statusCode = 404;
      throw error;
    }

    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("User doesn't exist");
      error.statusCode = 404;
      throw error;
    }

    console.log(req.body);
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      req.body = { ...req.body, password: hashedPassword };
    }

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      const error = new Error("Updated user not made");
      error.statusCode = 400;
      throw error;
    }

    res.status(200).json({
      success: true,
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  // Implement deleting only with authorization

  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("User doesn't exist");
      error.statusCode = 404;
      throw error;
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "User deleted",
    });
  } catch (error) {
    next(error);
  }
};
