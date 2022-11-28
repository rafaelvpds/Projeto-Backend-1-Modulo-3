import { Review } from "../model/reviews.model"
import { ReviewsRepository } from "../repository/reviews.repository"
import { isValidad } from "../../utils/id.validator"
import { InvalidIdError, invalidIdError } from "../../utils/error.handler"
export class ReviewSrevice {
    constructor(private readonly reviewRepository: ReviewsRepository) { }

    async getAll(): Promise<Review[] | string> {
        try {
            const reviews = await this.reviewRepository.getAll();
            return reviews;

        } catch (error) {
            return "unable to request the Database"
        }
    }
    async getById(id: string): Promise<Review | InvalidIdError | string> {
        try {
            if (!isValidad(id)) {
                return invalidIdError(id)
            }
            const review = await this.reviewRepository.getById(id)
            return review
        } catch (error) {
            return "unable to request the Database"
        }
    }
    async create(review: Review): Promise<Review | string> {
        try {
            const newReview = await this.reviewRepository.create(review)
            return newReview
        } catch (error) {
            return "unable to request the Database"
        }
    }

    async update(id: string, review: Review): Promise<Review | InvalidIdError | string> {
        if (!isValidad(id)) {
            return invalidIdError(id)
        }
        try {
            const updateReview = await this.reviewRepository.update(id, review)
            return updateReview
        } catch (error) {
            return "unable to request the Database"
        }
    }
}