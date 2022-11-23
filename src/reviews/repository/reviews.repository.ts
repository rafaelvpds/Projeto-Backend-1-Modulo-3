import { Review, ReviewsModel } from '../model/reviews.model'
import { Model } from 'mongoose'

export class ReviewsRepository {
    constructor(private readonly ReviewModel: Model<Review>) { }

    async getAll(): Promise<Review[]> {
        const reviews = await this.ReviewModel.find()
        return reviews
    }
    async getById(id: string): Promise<Review> {
        const review = await this.ReviewModel.findById(id)
        if (review == null) {
            return {} as Review
        }
        return review
    }
    async create(review: Review): Promise<Review> {
        const newReview = await this.ReviewModel.create(review)
        return newReview
    }

    async update(id: string, review: Review): Promise<Review> {
        const updateReview = await this.ReviewModel.findByIdAndUpdate(id, review, {
            new: true
        });

        if (updateReview == null) {
            return {} as Review
        }
        return updateReview
    }
}