import { Schema, model, InferSchemaType, Model } from "mongoose";

const ReviewsSchema = new Schema({
    title: {
        type: String,
        maxlenght: 24,
        unique: true,
        required: true,
    },
    review: [{
        type: String,
        maxlenght: 200,
        required: true,
    }],
    createDate: {
        type: Date,
        required: true
    },
    updateDate: [{
        type: Date,
        required: true,
    }],
    note: {
        type: Number,
        required: true,
    }
})

export type Review = InferSchemaType<typeof ReviewsSchema>
export const ReviewsModel: Model<Review> = model('Reviews', ReviewsSchema)