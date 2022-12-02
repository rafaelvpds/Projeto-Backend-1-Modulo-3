import { BookModel } from "../model/book.model";
import { BookRepository } from "../repository/book.repository";
import { BookService } from "../services/book.service";
import { BookController } from "../controller/book.constroller";



export function bookFactory() {
    const bookRepositary = new BookRepository(BookModel);
    const bookService = new BookService(bookRepositary);
    const bookController = new BookController(bookService);
    return bookController;

}

export const book = bookFactory()