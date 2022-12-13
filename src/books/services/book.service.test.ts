import {
  fakeAuthor,
  fakeBookData,
  fakeId,
  updateBook,
} from "../__mocks__/fake.book.data";
import { fakeBookRepositary } from "../__mocks__/fake.book.repository";
import { fakeBookModel } from "../__mocks__/fake.book.model";
import { BookService } from "./book.service";
import { InvalidIdError, invalidIdError } from "../../utils/error.handler";
import { jest, describe, it, expect } from "@jest/globals";

const bookService = new BookService(fakeBookRepositary);

describe("Book Service", () => {
  describe("getAll", () => {
    it("should call Repositary.getAll", async () => {
      const spy = jest.spyOn(fakeBookRepositary, "getAll");
      await bookService.getAll();
      expect(spy).toHaveBeenCalled();
    });
    it("should return a list of books", async () => {
      const books = await bookService.getAll();
      expect(books).toEqual(fakeBookData);
    });
    it("should retun a error", async () => {
      jest.spyOn(fakeBookRepositary, "getAll").mockRejectedValueOnce("Error");
      const error = await bookService.getAll();
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
  });
  describe("getById", () => {
    it("should call Service.getById", async () => {
      const spy = jest.spyOn(fakeBookRepositary, "getById");
      await bookService.getById(fakeId);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a books with reviews", async () => {
      const book = await bookService.getById(fakeId);
      expect(book).toEqual(fakeBookData[0]);
    });
    it("should return an Error", async () => {
      jest.spyOn(fakeBookRepositary, "getById").mockRejectedValueOnce("Error");
      const error = await bookService.getById(fakeId);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
  });
  describe("getAuthor", () => {
    it("should call Service.getAuthor", async () => {
      const spy = jest.spyOn(fakeBookRepositary, "getByAuthor");
      await bookService.getByAuthor(fakeAuthor);
      expect(spy).toHaveBeenCalled();
    });
    it("should return a list of books with their author", async () => {
      const book = await bookService.getByAuthor(fakeAuthor);
      expect(book).toEqual(fakeBookData[0]);
    });
    it("should return a Error", async () => {
      jest
        .spyOn(fakeBookRepositary, "getByAuthor")
        .mockRejectedValueOnce("Error");
      const error = await bookService.getByAuthor(fakeAuthor);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
  });
  describe("create", () => {
    it("should call Service.create", async () => {
      const spy = jest.spyOn(fakeBookRepositary, "create");
      await bookService.create(fakeBookData[0]);
      expect(spy).toHaveBeenCalled();
    });
    it("should create a book", async () => {
      const newBook = await bookService.create(fakeBookData[1]);
      expect(newBook).toEqual(fakeBookData[1]);
    });
  });
  describe("update", () => {
    it("should call Service.update", async () => {
      const spy = jest.spyOn(fakeBookRepositary, "update");
      await bookService.update(fakeId, updateBook);
      expect(spy).toHaveBeenCalled();
    });
    it("should update a book", async () => {
      const book = await bookService.update(fakeId, updateBook);
      expect(book).toEqual(updateBook);
    });
    it("should return an Error", async () => {
      jest.spyOn(fakeBookRepositary, "update").mockRejectedValueOnce("Error");
      const error = await bookService.update(fakeId, updateBook);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });
    it("should return a invalidIdError", async () => {
      const error = await bookService.update("invalidId", updateBook);
      expect(error).toEqual(invalidIdError("invalidId"));
    });
  });
  describe("updateStatus", () => {
    it("should call Service.updateStatus", async () => {
      const spy = jest.spyOn(fakeBookRepositary, "updateStatus");
      await bookService.updateStatus(fakeId, updateBook);
      expect(spy).toHaveBeenCalled();
    });
    it("should update status book", async () => {
      const book = await bookService.updateStatus(fakeId, fakeBookData[0]);
      expect(book).toEqual(updateBook);
    });
    it("should return an Error", async () => {
      jest
        .spyOn(fakeBookRepositary, "updateStatus")
        .mockRejectedValueOnce("Error");
      const error = await bookService.updateStatus(fakeId, updateBook);
      expect(error).toEqual({
        promiseError: {
          message: "unable to request the Database",
          error: "Error",
        },
      });
    });

    it("should return a invalidIdError", async () => {
      const error = await bookService.updateStatus("invalidId", updateBook);
      expect(error).toEqual(invalidIdError("invalidId"));
    });
  });
});
