import express from "express";
import { book } from "../factories/book.factory";

export const routesBook = express.Router();

//o bind é encarregado de manter o escopo do this

routesBook.get("/", book.getAll.bind(book));
routesBook.get("/:id", book.getById.bind(book));
routesBook.post("/", book.create.bind(book));
routesBook.put("/:id", book.update.bind(book));
routesBook.put("/:id/status", book.updateStatus.bind(book));
