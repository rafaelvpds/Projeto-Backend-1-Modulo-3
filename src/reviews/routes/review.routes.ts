import express from "express";
import { review } from "../factories/review.factory";

export const reviewRoutes = express.Router();

//o bind é encarregado de manter o escopo do this

reviewRoutes.get("/", review.getAll.bind(review));
reviewRoutes.get("/:id", review.getById.bind(review));
reviewRoutes.post("/", review.create.bind(review));
reviewRoutes.put("/:id", review.update.bind(review));

