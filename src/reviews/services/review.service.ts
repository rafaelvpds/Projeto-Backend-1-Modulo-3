import { Review } from "../model/reviews.model"
import { ReviewsRepository } from "../repository/reviews.repository"
import { CustomErrors, invalidIdError, promiseError } from "../../utils/error.handler"
import { isValidad } from "../../utils/id.validator"
import { dateToBr } from "../../utils/date.transform"
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

    async getById(id: string): Promise<Review | CustomErrors> {
        try {
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

    async update(id: string, review: Review): Promise<Review | CustomErrors> {
        if (!isValidad(id)) {
            return invalidIdError(id)
        }
        try {
            const updateReview = await this.reviewRepository.update(id, review)
            return updateReview
        } catch (error) {
            return promiseError(id)
        }
    }
}