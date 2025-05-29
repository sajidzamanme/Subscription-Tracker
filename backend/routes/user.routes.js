import { Router } from "express";

import authorize from '../middlewares/auth.middleware.js';
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import checkAdmin from "../middlewares/admin.middleware.js";

const userRouter = Router();

userRouter.get("/", authorize, checkAdmin, getUsers);

userRouter.get("/:id", authorize, getUser);  // add authorize middleware

userRouter.put("/:id", authorize, updateUser);  // add authorize middleware

userRouter.delete("/:id", deleteUser);  // add authorize middleware

export default userRouter;
