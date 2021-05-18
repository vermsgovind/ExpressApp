import express from "express";
const router = express.Router();

import {getBooks, saveBook, getBookById,deleteByBookId,updateBook, updateNameById} from "../controller/book.js"

// book specific API's will be handled by router
router.get("/",getBooks);
router.get("/:id",getBookById);
router.post("/", saveBook);
router.delete("/:id",deleteByBookId);
router.patch("/:id", updateNameById);
router.put("/:id",updateBook);

export default router;