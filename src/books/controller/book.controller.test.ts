import { fakeAuthor, fakeBookData, fakeId, fakeLanguage, updateBook } from "../__mocks__/fake.book.data";
import { fakeBookService } from "../__mocks__/fake.book.service";
import { mockRequest, mockResponse } from "../__mocks__/fake.book.routes";
import { BookController } from "./book.constroller";
import { StatusCode } from "../../utils/status.cade";
import { authorInvalidError, CustomErrors, invalidIdError, promiseError } from "../../utils/error.handler";

const bookController = new BookController(fakeBookService);
const req = mockRequest()
const res = mockResponse()

describe("BookControler", () => {
    describe("getAll and getAuthor", () => {
        it("should return all books", async () => {
            await bookController.getAll(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeBookData);
        });
        it("should return status code 200", async () => {
            await bookController.getAll(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });
        it("should return a promiseError", async () => {
            jest.spyOn(fakeBookService, "getAll").mockImplementation(() => Promise.resolve(promiseError("error")));
            await bookController.getAll(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
        });
        it("should return a boocks with Author", async () => {
            req.params.author = fakeAuthor
            await bookController.getAll(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeBookData);
        });

        // it("should return status code 200", async () => {
        //     req.params.author = fakeAuthor
        //     await bookController.getAll(req, res);
        //     expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        // });
        // it("should return a Error", async () => {
        //     req.params.author = fakeAuthor;
        //     jest.spyOn(fakeBookService, "getByAuthor").mockRejectedValueOnce(authorInvalidError("error"));
        //     await bookController.getAll(req, res);
        //     expect(res.status).toHaveBeenCalledWith(StatusCode.NOT_FOUND);
        //     console.log(res.status)
        // });
    });
    describe("getById", () => {
        it("should return a book", async () => {
            req.params.id = fakeId;
            await bookController.getById(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeBookData[0]);
        });
        it("should return status code 200", async () => {
            req.params.id = fakeId;
            await bookController.getById(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });
        it("should return a promiseError", async () => {
            req.params.id = fakeId;
            jest
                .spyOn(fakeBookService, "getById")
                .mockImplementation(() => Promise.resolve(promiseError("error")));

            await bookController.getById(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
        });
        it("should return a invalidIdError", async () => {
            jest
                .spyOn(fakeBookService, "getById")
                .mockImplementation(() => Promise.resolve(invalidIdError("id")));
            await bookController.getById(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
        });
    });
    describe("create", () => {
        it("should create a book", async () => {
            req.body = fakeBookData[0];
            await bookController.create(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeBookData[0]);
        });
        it("should return status code 201", async () => {
            req.body = fakeBookData[0];
            await bookController.create(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
        });
        it("should return a promiseError", async () => {
            req.body = fakeBookData[0];
            jest
                .spyOn(fakeBookService, "create")
                .mockImplementation(() => Promise.resolve(promiseError("error")));

            await bookController.create(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
        });
    });

    describe("update", () => {
        it("should update a book", async () => {
            req.params.id = fakeId;
            req.body = fakeBookData[0];
            await bookController.update(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeBookData[0]);
        });
        it("should return status code 200", async () => {
            req.params.id = fakeId;
            req.body = fakeBookData[0];
            await bookController.update(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });


        it("should return a promiseError", async () => {
            req.params.id = fakeId;
            req.body = fakeBookData[0];
            jest
                .spyOn(fakeBookService, "update")
                .mockImplementation(() => Promise.resolve(promiseError("error")));

            await bookController.update(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
        });

        it("should return a invalidIdError", async () => {
            req.params.id = fakeId;
            req.body = fakeBookData[0];
            jest
                .spyOn(fakeBookService, "update")
                .mockImplementation(() => Promise.resolve(invalidIdError("id")));

            await bookController.update(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
        });
    });
    describe("updateStatus", () => {
        it("should update status a book", async () => {
            req.params.id = fakeId;
            req.body = fakeBookData[0];
            await bookController.updateStatus(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeBookData[0]);
        });
        it("should return status code 200", async () => {
            req.params.id = fakeId;
            req.body = fakeBookData[0];
            await bookController.updateStatus(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });

        it("should return a promiseError", async () => {
            req.params.id = fakeId;
            req.body = fakeBookData[0];
            jest
                .spyOn(fakeBookService, "updateStatus")
                .mockImplementation(() => Promise.resolve(promiseError("error")));

            await bookController.updateStatus(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
        });

        it("should return a invalidIdError", async () => {
            req.params.id = fakeId;
            req.body = fakeBookData[0];
            jest
                .spyOn(fakeBookService, "updateStatus")
                .mockImplementation(() => Promise.resolve(invalidIdError("id")));

            await bookController.updateStatus(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST);
        });
    });

})