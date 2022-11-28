

import {fakeBookData,fakeId,updateBook} from "./fake.book.data"
import { BookRepository } from "../repository/book.repository"

export const fakeBookRepositary ={
    getAll:() =>Promise.resolve(fakeBookData)
} as unknown as BookRepository