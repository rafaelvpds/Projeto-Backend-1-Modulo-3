import { Book, BookModel } from "../model/book.model";
import { Model } from "mongoose";

export class BookRepository {
    constructor(private readonly BookModel: Model<Book>) { }

    async getAll(): Promise<Book[]> {
        const books = await this.BookModel.find().populate("review");
        return books;
    }
    async getByAuthor(author: string): Promise<Book[]> {
        const book = await this.BookModel.find({ author: author });
        return book;
    }
    async getById(id: string): Promise<Book> {
        const book = await this.BookModel.findById(id).populate("review");

        if (book == null) {
            return {} as Book
        }
        return book;
    }
    async create(book: Book): Promise<Book> {
        const newBook = await this.BookModel.create(book);
        return newBook;
    }

    async update(id: string, book: Book): Promise<Book> {
        const updateBook = await this.BookModel.findByIdAndUpdate(id, book);
        if (updateBook == null) {
            return {} as Book;
        }
        return updateBook;
    }
    async updateStatus(id: string, book: Book): Promise<Book> {
        const bookStatus = book.statusBooks;
        const updateBookStatus = await this.BookModel.findByIdAndUpdate(id,
            {
                ...book,
                bookStatus
            });
        if (updateBookStatus == null) {
            return {} as Book;
        }
        return updateBookStatus;

    }
    async updateLanguage(id: string, book: Book): Promise<Book> {
        const { language: newLanguage } = book

        const updateBookLanguage = await this.BookModel.findByIdAndUpdate(id, {
            ...book,
            newLanguage
        });
        if (updateBookLanguage == null) {
            return {} as Book;
        }
        return updateBookLanguage;
    }
}