import { Model } from "mongoose";
import { Review} from "../model/reviews.model";
import {fakeReviewData, updateReview } from "./fake.review.data";


export const fakeReviewModel = {
    find: () => Promise.resolve(fakeReviewData),
    findById: () => Promise.resolve(fakeReviewData[0]),
    create: () => Promise.resolve(fakeReviewData[0] as Review),
    findByIdAndUpdate: () => Promise.resolve(updateReview)

} as unknown as Model<Review>