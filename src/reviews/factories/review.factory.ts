import { ReviewSrevice } from "../services/review.service";
import { ReviewsRepository } from "../repository/reviews.repository";
import { ReviewsModel } from "../model/reviews.model";
import { ReviewController } from "../controller/review.controller";

export function reviewFactory() {
  const reviewRepository = new ReviewsRepository(ReviewsModel);
  const reviewService = new ReviewSrevice(reviewRepository);
  const reviewController = new ReviewController(reviewService);

  return reviewController;
}

export const review = reviewFactory();
