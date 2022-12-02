import { Book } from "../model/book.model";
import { BookRepository } from "../repository/book.repository";
import { isIdValid } from "../../utils/id.validator";
import { CustomErrors, invalidIdError, InvalidIdError, promiseError, authorInvalidError, AuthorInvalidError } from "../../utils/error.handler";

export class BookService {
    constructor(private readonly bookRepositary: BookRepository) { };

    async getAll(): Promise<Book[] | CustomErrors> {
        try {
            const books = await this.bookRepositary.getAll();
            return books;
        } catch (error) {
            console.log(error)
            return promiseError(error);
        }
    }
    async getById(id: string): Promise<Book | InvalidIdError | CustomErrors> {
        try {
            if (!isIdValid(id)) {
                return invalidIdError(id);
            }
            const review = await this.bookRepositary.getById(id);
            return review;
        } catch (error) {
            return promiseError(error);
        }
    }
    async getByAuthor(author: string): Promise<Book[] | AuthorInvalidError | CustomErrors | CustomErrors> {
        try {
            const books = await this.bookRepositary.getByAuthor(author);
            if (books === null) {
                return authorInvalidError(author);
            }
            return books;
        } catch (error) {
            return promiseError(error);
        }
    }
    async create(book: Book): Promise<Book | CustomErrors> {
        try {
            const newBook = await this.bookRepositary.create(book);
            return newBook;
        } catch (error) {
            return promiseError(error)
        }
    }
    async update(id: string, book: Book): Promise<Book | InvalidIdError | CustomErrors> {
        try {
            const updateBook = await this.bookRepositary.update(id, book);
            if (!isIdValid(id)) {
                return invalidIdError(id);
            }
            return updateBook
        } catch (error) {
            return promiseError(error)
        }
    }
    async updateStatus(id: string, book: Book): Promise<Book | InvalidIdError | CustomErrors> {
        const { statusBooks } = book
        try {
            const updateStatusBook = await this.bookRepositary.updateStatus(id, {
                ...book,
                statusBooks,
            });
            if (!isIdValid(id)) {
                return invalidIdError(id);
            }
            return updateStatusBook
        } catch (error) {
            return promiseError(error)
        }
    }
}
