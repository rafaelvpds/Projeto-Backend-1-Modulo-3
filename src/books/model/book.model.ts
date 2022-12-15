import { Schema, model, Model, InferSchemaType } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      maxlength: 24,
      unique: true,
      required: true,
    },

    language: {
      type: [String],
      maxlength: 18,
      required: true,
    },
    statusBooks: {
      type: Boolean,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    review: {
      type: Schema.Types.ObjectId,
      ref: "Review",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
export type Book = InferSchemaType<typeof bookSchema>;
export const BookModel: Model<Book> = model("Book", bookSchema);
