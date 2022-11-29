import { Review } from "../model/reviews.model"
import { ReviewsRepository } from "../repository/reviews.repository"
import { isIdValid } from "../../utils/id.validator";
import { CustomErrors, InvalidIdError, invalidIdError, promiseError } from "../../utils/error.handler"
export class ReviewSrevice {
    constructor(private readonly reviewRepository: ReviewsRepository) { }

    async getAll(): Promise<Review[] | CustomErrors> {
        try {
            const reviews = await this.reviewRepository.getAll();
            return reviews;

        } catch (error) {
            return promiseError(error)
        }
    }
    async getById(id: string): Promise<Review | InvalidIdError | CustomErrors> {
        try {
            if (!isIdValid(id)) {
                return invalidIdError(id)
            }
            const review = await this.reviewRepository.getById(id)
            return review
        } catch (error) {
            return promiseError(error)
        }
    }
    async create(review: Review): Promise<Review | CustomErrors> {
        try {
            const newReview = await this.reviewRepository.create(review)
            return newReview
        } catch (error) {
            return promiseError(error)
        }
    }
    async update(id: string, review: Review): Promise<Review | InvalidIdError | CustomErrors> {
        if (!isIdValid(id)) {
            return invalidIdError(id)
        }
        try {
            const updateReview = await this.reviewRepository.update(id, review)
            return updateReview
        } catch (error) {
            return promiseError(error)
        }
    }
}