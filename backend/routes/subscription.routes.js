import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  deleteUserSubscription,
  editUserSubscription,
  getAllSubscription,
  getUserSubscription,
} from "../controllers/subscription.controller.js";
import checkAdmin from "../middlewares/admin.middleware.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", authorize, checkAdmin, getAllSubscription);

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "GET subscription details" });
});

subscriptionRouter.post("/", createSubscription); // add authorize middleware

subscriptionRouter.put("/:id", editUserSubscription);

subscriptionRouter.delete("/:id", deleteUserSubscription);

subscriptionRouter.get("/user/:id", getUserSubscription); // add authorize middleware

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "GET upcoming renewals" });
});

export default subscriptionRouter;
