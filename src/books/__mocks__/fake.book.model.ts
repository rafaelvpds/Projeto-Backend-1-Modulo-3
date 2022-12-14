import { Model } from "mongoose";
import { Book } from "../model/book.model";
import { Review } from "../../reviews/model/reviews.model";
import { updateBook, fakeBookData } from "./fake.book.data";

export const fakeBookModel = {
  find: (param) => {
      if (param) {
          return Promise.resolve(fakeBookData[0]);
      }
      return Promise.resolve(fakeBookData);
  },
  findById: () => Promise.resolve(fakeBookData[0]),
  create: () => Promise.resolve(fakeBookData[1]),
  findByIdAndUpdate: () => Promise.resolve(updateBook),
} as unknown as Model<Book, Review>;
