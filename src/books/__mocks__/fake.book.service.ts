import { BookService } from "../services/book.service";
import { fakeBookData, fakeId, updateBook } from "../__mocks__/fake.book.data";

export const fakeBookService = {
    getAll: () => Promise.resolve(fakeBookData),
    getById: () => Promise.resolve(fakeBookData[0]),
    getByAuthor: () => Promise.resolve(fakeBookData),
    create: () => Promise.resolve(fakeBookData[1]),
    update: () => Promise.resolve(updateBook),
    updateStatus: () => Promise.resolve(updateBook),
} as unknown as BookService;