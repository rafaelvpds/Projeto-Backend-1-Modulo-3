import { bookFactory } from "../factories/book.factory";

describe("UserFactory", () => {
    it("should create the user Domain", () => {
        expect(bookFactory()).toBeDefined();
    });
});
