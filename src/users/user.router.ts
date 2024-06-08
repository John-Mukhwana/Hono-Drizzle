

import { Hono } from "hono";
import {type Context} from "hono";
import {listUsers,getUser,createUser,updateUser} from "./user.controller";

export const userRouter = new Hono();

  //get all users
userRouter.get("/users",listUsers);

//get a single user by id api/users/1

userRouter.get("/users/:id",getUser);

//create a new user

userRouter.post("/users",createUser);

//update a user

userRouter.put("/users/:id", updateUser);