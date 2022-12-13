import { Model } from "mongoose";
import { Book } from "../model/book.model";
import { Review } from "../../reviews/model/reviews.model";
import { updateBook, fakeBookData } from "./fake.book.data";

export const fakeBookModel = {
  find: () => Promise.resolve(fakeBookData[0]),
  findById: () => Promise.resolve(fakeBookData[0]),
  create: () => Promise.resolve(fakeBookData[1]),
  findByIdAndUpdate: () => Promise.resolve(updateBook),
} as unknown as Model<Book, Review>;
