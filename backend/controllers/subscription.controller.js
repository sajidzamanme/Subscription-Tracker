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
