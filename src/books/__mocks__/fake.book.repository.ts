import { fakeBookData, fakeId, updateBook } from "./fake.book.data";
import { BookRepository } from "../repository/book.repository";

export const fakeBookRepositary = {
  getAll: () => Promise.resolve(fakeBookData),
  getById: () => Promise.resolve(fakeBookData[0]),
  getByAuthor: () => Promise.resolve(fakeBookData[0]),
  create: () => Promise.resolve(fakeBookData[1]),
  update: () => Promise.resolve(updateBook),
  updateStatus: () => Promise.resolve(updateBook),
} as unknown as BookRepository;
