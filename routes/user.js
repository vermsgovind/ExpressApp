import express from "express";
const router = express.Router();

import {getUsers,saveUser,getUserById,deleteUserById,updateNameById,updateById} from "../controller/user.js";


// different user specific routers
router.get("/", getUsers);
router.get("/:id", getUserById); //id will be availabe as req.params.id as typeof string
router.post("/", saveUser);
router.delete("/:id", deleteUserById);
router.patch("/:id",updateNameById);
router.put("/:id",updateById);
export default router;

