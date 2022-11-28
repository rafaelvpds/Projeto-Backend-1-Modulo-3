import { Book } from "../model/book.model";
import { BookRepository } from "../repository/book.repository";
import { isValidad } from "../../utils/id.validator";
import { invalidIdError, InvalidIdError } from "../../utils/error.handler";

export class BookService {
    constructor(private readonly bookRepositary: BookRepository) { };

    async getAll(): Promise<Book[] | string> {
        try {
            const books = await this.bookRepositary.getAll();
            return books;
        } catch (error) {
            return "unable to request the Database";
        }
    }
    async getAuthor(author: string): Promise<Book[] | string> {
        try {
            const books = await this.bookRepositary.getByAuthor(author);
            if (books == null) {
                return "Author not exist";
            }
            return books;
        } catch (error) {
            return "unable to request the Database";
        }
    }
    async getById(id: string): Promise<Book | InvalidIdError | string> {
        try {
            if (!isValidad(id)) {
                return invalidIdError(id);
            }
            const review = await this.bookRepositary.getById(id);
            return review;
        } catch (error) {
            return "unable to request the Database";
        }
    }
    async create(book: Book): Promise<Book | string> {
        try {
            const newBook = await this.bookRepositary.create(book);
            return newBook;
        } catch (error) {
            return "unable to request the Database";
        }
    }
    async update(id: string, book: Book): Promise<Book | InvalidIdError | string> {
        try {
            const updateBook = await this.bookRepositary.update(id, book);
            if (!isValidad(id)) {
                return invalidIdError(id);
            }
            return updateBook
        } catch (error) {
            return "unable to request the Database"
        }
    }

    async updateStatus(id: string, book: Book): Promise<Book | InvalidIdError | string> {
        const { statusBooks } = book
        try {
            const updateStatusBook = await this.bookRepositary.updateStatus(id, {
                ...book,
                statusBooks,
            });
            if (!isValidad(id)) {
                return invalidIdError(id);
            }
            return updateStatusBook
        } catch (error) {
            return "unable to request the Database"
        }
    }

    async updateLanguage(id: string, book: Book): Promise<Book | InvalidIdError | string> {
        try {
            const { language } = book

            const updateLanguageBook = await this.bookRepositary.updateLanguage(id, {
                ...book,
                language
            })
            if (!isValidad(id)) {
                return invalidIdError(id);
            }
            return updateLanguageBook
        } catch (error) {
            return "unable to request the Database"
        }
    }
}
