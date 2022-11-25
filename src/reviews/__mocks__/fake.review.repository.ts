import { fakeReviewData, fakeId, updateReview } from "./fake.review.data"
import { ReviewsRepository } from "../repository/reviews.repository"

export const fakeReviewRepository = {
    getAll: () => Promise.resolve(fakeReviewData),
    getById: () => Promise.resolve(fakeReviewData[0]),
    create: () => Promise.resolve(fakeReviewData[0]),
    update: () => Promise.resolve(updateReview),
} as unknown as ReviewsRepository