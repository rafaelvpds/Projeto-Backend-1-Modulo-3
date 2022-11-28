import { Book, BookModel } from "../model/book.model";
import { Model } from "mongoose";

export class BookRepository {
    constructor(private readonly bookModel: Model<Book>) { }

    async getAll(): Promise<Book[]> {
        const books = await this.bookModel.find().populate("review");
        return books;
    }
    async getByAuthor(author: string): Promise<Book[]> {
        const books = await this.bookModel.find({ author: author });
        if (books == null) {
            return []
        }
        return books;
    }
    async getById(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id).populate("review");
        if (book == null) {
            return {} as Book
        }
        return book;
    }
    async create(book: Book): Promise<Book> {
        const newBook = await this.bookModel.create(book);
        return newBook;
    }

    async update(id: string, book: Book): Promise<Book> {
        const updateBook = await this.bookModel.findByIdAndUpdate(id, book);
        if (updateBook == null) {
            return {} as Book;
        }
        return updateBook;
    }
    async updateStatus(id: string, book: Book): Promise<Book> {
        const { statusBooks } = book;
        const updateStatusBook = await this.bookModel.findByIdAndUpdate(id,
            {
                ...book,
                statusBooks
            });
        if (updateStatusBook == null) {
            return {} as Book;
        }
        return updateStatusBook;

    }
    async updateLanguage(id: string, book: Book): Promise<Book> {
        const { language } = book

        const updateLanguageBook = await this.bookModel.findByIdAndUpdate(id, {
            ...book,
            language
        });
        if (updateLanguageBook == null) {
            return {} as Book;
        }
        return updateLanguageBook;
    }
}