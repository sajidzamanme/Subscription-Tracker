import { Router } from "express";

import authorize from '../middlewares/auth.middleware.js';
import { getUsers, getUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import checkAdmin from "../middlewares/admin.middleware.js";

const userRouter = Router();

userRouter.get("/", authorize, checkAdmin, getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.put("/:id", authorize, updateUser);

userRouter.delete("/:id", authorize, deleteUser);

export default userRouter;
