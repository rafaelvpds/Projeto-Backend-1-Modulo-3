import express from "express";
import { book } from "../factories/book.factory";

export const reviewBooks = express.Router();

//o bind é encarregado de manter o escopo do this

reviewBooks.get("/", book.getAll.bind(book));
reviewBooks.get("/:id", book.getById.bind(book));
reviewBooks.post("/", book.create.bind(book));
reviewBooks.put("/:id", book.update.bind(book));

