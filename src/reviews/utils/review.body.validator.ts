import { Request } from "express";

export function invalidBody(req: Request) {
  const review = {
    title: req.body.title,
    review: req.body.review,
    updateAt: req.body.updateAt,
    note: req.body.note,
  };

  const jsonReview = JSON.stringify(review);
  const jsonBody = JSON.stringify(req.body);

  if (jsonReview !== jsonBody) {
    return true;
  }

  return false;
}
