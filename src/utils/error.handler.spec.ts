import { promiseError, invalidIdError, authorInvalidError } from "./error.handler";

describe("error.handler", () => {
    describe("promiseError", () => {
        it("should be defined", () => {
            const error = promiseError("error");
            expect(error).toBeDefined();
        });
        it("should return an object with a promiseError property", () => {
            const error = promiseError("error");
            expect(error.promiseError).toBeDefined();
        });
        it("should return an object with a promiseError property with a message property", () => {
            const error = promiseError("error");
            expect(error).toEqual({
                promiseError: {
                    message: "unable to request the Database",
                    error: "error",
                },
            });
        });
    });
    describe("invalidIdError", () => {
        it("should be defined", () => {
            const error = invalidIdError("invalidId");
            expect(error).toBeDefined();
        });
        it("should return an object with a invalidIdError property", () => {
            const error = invalidIdError("invalidId");
            expect(error.invalidIdError).toBeDefined();
        });
        it("should return an object with a invalidIdError property with a message property", () => {
            const error = invalidIdError("invalidId");
            expect(error).toEqual({
                invalidIdError: {
                    message: "invalid id on request, please submit a ObjectId",
                    id: "invalidId",
                },
            });
        });
    });
    describe("authorInvalidError", () => {
        it("should be defined", () => {
            const error = authorInvalidError("invalidAuthor");
            expect(error).toBeDefined();
        });
        it("should return an object with a authorInvalidError property", () => {
            const error = authorInvalidError("invalidAuthor");
            expect(error.invalidAuthorError).toBeDefined();
        });

        it("should return an object with a authorInvalidError property with a message property", () => {
            const error = authorInvalidError("invalidAuthor");
            expect(error).toEqual({
                invalidAuthorError: {
                    message: "the author does not exist",
                    author: "invalidAuthor"

                }
            });
        });

    })
});

