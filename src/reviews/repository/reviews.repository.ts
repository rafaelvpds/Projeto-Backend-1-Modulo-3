import { Reviews, ReviewsModel } from '../model/reviews.model'
import { Model } from 'mongoose'

export class ReviewsRepository {
    constructor(private readonly ReviewModel: Model<Reviews>) { }

    async getAll(): Promise<Reviews[]> {
        const reviews = await this.ReviewModel.find()
        return reviews
    }
}