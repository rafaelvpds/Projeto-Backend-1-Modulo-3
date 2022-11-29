import { fakeBookData, fakeId, updateBook, fakeAuthor } from "../__mocks__/fake.book.data";
import { fakeBookModel } from "../__mocks__/fake.book.model";
import { BookRepository } from "./book.repository";

const bookRepositary = new BookRepository(fakeBookModel)
describe("BookRepositary", () => {
    // describe("getAll", () => {
    //     it("should return a list of reviews", async () => {
    //         const books = await bookRepositary.getAll()
    //     })
    // })
    // describe("getById", () => {

    // })
    describe("getByAuthor", () => {
        it("should return a boocks with Author", async () => {
            const author = await bookRepositary.getByAuthor(fakeAuthor);
            expect(author).toEqual(fakeBookData[0]);
        })
        it("should return an empty object", async () => {
            jest.spyOn(fakeBookModel, "find").mockResolvedValueOnce([]);
            const author = await bookRepositary.getByAuthor(fakeAuthor);
            expect(author).toEqual([]);
        })
    })
    describe("create", () => {
        it("should create a book", async () => {
            const newBook = await bookRepositary.create(fakeBookData[1]);
            expect(newBook).toEqual(fakeBookData[1]);
        })
    })
    describe("update", () => {
        it("should update a book", async () => {
            const book = await bookRepositary.update(fakeId, fakeBookData[0]);
            expect(book).toEqual(updateBook);
        })

        it("should return an empty object", async () => {
            jest.spyOn(fakeBookModel, "findByIdAndUpdate").mockResolvedValueOnce({});
            const book = await bookRepositary.update(fakeId, fakeBookData[0]);
            expect(book).toEqual({});
        })

    })
})