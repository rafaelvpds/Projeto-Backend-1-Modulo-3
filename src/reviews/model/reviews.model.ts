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
    updatedAt: [{
        type: Date,
        required: true,
    }],
    note: {
        type: Number,
        min: 1,
        max: 5,
        required: true,

    }
},
    {
        timestamps: { createdAt: true, updatedAt: false }
    })

export type Review = InferSchemaType<typeof ReviewsSchema>
export const ReviewsModel: Model<Review> = model('Review', ReviewsSchema)