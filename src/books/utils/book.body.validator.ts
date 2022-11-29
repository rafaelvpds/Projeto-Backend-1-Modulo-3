import { Request } from "express";

export function invalidBody(req: Request) {
    const book = {
        title: req.body.title,
        language: req.body.language,
        statusBooks: req.body.statusBooks,
        author: req.body.author,
        review: req.body.review
    };

    const jsonBook = JSON.stringify(book);
    const jsonBody = JSON.stringify(req.body);

    if (jsonBook !== jsonBody) {
        return true;
    }

    return false;
}
