import express from "express";
import { review } from "../factories/review.factory";

export const routesReview = express.Router();

//o bind é encarregado de manter o escopo do this

routesReview.get("/", review.getAll.bind(review));
routesReview.get("/:id", review.getById.bind(review));
routesReview.post("/", review.create.bind(review));
routesReview.put("/:id", review.update.bind(review));