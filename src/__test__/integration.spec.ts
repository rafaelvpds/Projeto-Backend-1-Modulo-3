import { jest } from "@jest/globals";
import { connectMongo, mongoDisconnect } from "../db/mongo.concection";
import express from 'express';
import supertest from "supertest";
import { routesReview } from "../reviews/routes/review.routes";
import { routesBook } from "../books/routes/book.routes"
const app = express();
app.use(express.json());
app.use("/teste", routesReview);
app.use("/testeBook", routesBook)


const testCreate =

{
    title: "Resenha do Livro Harry Potter e a Pedra Filosofal101",

    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",

    note: 1,
}
const testReviewUpdate =
{
    review: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", "Outro teste"],

}
const bookCreate =
{
    title: "Harry Pottyter e a Pedra Filosofal1516",
    language: ["ingles, Portugues"],
    statusBooks: true,
    author: "J.K.Rowling",
}

const testBookUpdate =
{
    language: ["Alemao, Portugues, Espanhol, Russo"],

}
const testBookStatus = {
    statusBooks: false,
}
beforeEach(() => {
    jest.setTimeout(60000);

});
beforeAll(() => {

    connectMongo();
});

afterAll(async () => {
    await mongoDisconnect();
});
describe("Reviews", () => {
    it("should create review", async () => {
        const response = await supertest(app).post("/teste").send(testCreate);
        console.log(response.body)
        expect(response.status).toBe(201);
    });
    it("should get all reviews", async () => {
        const response = await supertest(app).get("/teste");
        expect(response.status).toBe(200);
    });
    it("should get review by id", async () => {
        const getAll = await supertest(app).get("/teste");
        const id = getAll.body[0]._id;
        const response = await supertest(app).get(`/teste/${id}`);
        expect(response.status).toBe(200);
    });
    it("should update user", async () => {
        const getAll = await supertest(app).get("/teste");
        const lastReview = getAll.body[getAll.body.length - 1];
        const id = lastReview._id;
        const response = await supertest(app).put(`/teste/${id}`).send(testReviewUpdate);
        expect(response.status).toBe(200);
    });
});
describe("Books", () => {
    it("should create Book", async () => {
        const response = await supertest(app).post("/testeBook").send(bookCreate);
        expect(response.status).toBe(201);
    });
    it("should get all Books", async () => {
        const response = await supertest(app).get("/testeBook");
        console.log(response.body)
        expect(response.status).toBe(200);
    });
    it("should get book by author", async () => {
        const author = "J.K.Rowling";
        const response = await supertest(app).get(`/testeBook/?author=${author}`);
        console.log(response.body)
        expect(response.status).toBe(200);

    })
    it("should get book by id", async () => {
        const getAll = await supertest(app).get("/testeBook");
        const id = getAll.body[0]._id;
        const response = await supertest(app).get(`/testeBook/${id}`);
        expect(response.status).toBe(200);
    });
    it("should update book", async () => {
        const getAll = await supertest(app).get("/testeBook");
        const lastReview = getAll.body[getAll.body.length - 1];
        const id = lastReview._id;
        const response = await supertest(app).put(`/testeBook/${id}`).send(testBookUpdate);
        expect(response.status).toBe(200);
    });
    it("should update book", async () => {
        const getAll = await supertest(app).get("/testeBook");
        const lastReview = getAll.body[getAll.body.length - 1];
        const id = lastReview._id;
        const response = await supertest(app).put(`/testeBook/${id}/status`).send(testBookStatus);
        expect(response.status).toBe(200);
    });
});