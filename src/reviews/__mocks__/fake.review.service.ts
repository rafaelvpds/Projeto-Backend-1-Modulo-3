import { fakeReviewData, fakeId, updateReview } from "./fake.review.data";
import { ReviewSrevice } from "../services/review.service";

export const fakeReviewService = {
  getAll: () => Promise.resolve(fakeReviewData),
  getById: () => Promise.resolve(fakeReviewData[0]),
  create: () => Promise.resolve(fakeReviewData[0]),
  update: () => Promise.resolve(updateReview),
} as unknown as ReviewSrevice;
