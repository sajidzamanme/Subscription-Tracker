import mongoose from "mongoose";
import Subscription from "../models/subscription.model.js";

export const createSubscription = async (req, res, next) => {
  try {
    // If following Authorization
    // const subscription = await Subscription.create({
    //   ...req.body,
    //   user: req.user._id,
    // });

    const subscription = await Subscription.create(req.body);

    res.status(201).json({
      success: true,
      data: subscription,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllSubscription = async (req, res, next) => {
  try {
    const subscriptions = await Subscription.find();

    res.status(200).json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserSubscription = async (req, res, next) => {
  try {
    // If following Authorization
    // if (req.user.id !== req.params.id) {
    //   const error = new Error("You are not the owner of this account");
    //   error.statusCode = 401;
    //   throw error;
    // }

    const userSubscriptions = await Subscription.find({ user: req.params.id });

    res.status(200).json({
      success: true,
      data: userSubscriptions,
    });
  } catch (error) {
    next(error);
  }
};

export const editUserSubscription = async (req, res, next) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("SubscriptionID not valid");
      error.status = 404;
      throw error;
    }

    const updatedSub = await Subscription.findByIdAndUpdate(id, req.body, {new: true});

    res.status(200).json({
      success: true,
      message: "Subscription updated Successfully",
      data: updatedSub,
    })
  } catch (error) {
    next(error);
  }
}

export const deleteUserSubscription = async (req, res, next) => {
  const id = req.params.id;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error("SubscriptionID not valid");
      error.status = 404;
      throw error;
    }

    await Subscription.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Subscription deleted successfully"
    })
  } catch (error) {
    next(error);
  }
};
