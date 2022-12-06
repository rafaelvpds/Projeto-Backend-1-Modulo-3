import { jest } from "@jest/globals";
import { connectMongo, mongoDisconnect } from "../../db/mongo.concection";
import express from 'express';
import supertest from "supertest";
import { reviewRoutes } from "../routes/review.routes";


const app = express();
app.use(express.json());
app.use("/teste", reviewRoutes);




const testCreate =

{
    title: "Resenha do Livro Harry Potter e a Pedra Filosofal963",

    review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",

    note: 1,
}
const testReviewUpdate =
{

    review: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley", "Outro teste"],


}

beforeAll(() => {
    jest.setTimeout(60000);
    connectMongo();
});

afterAll(() => {
    mongoDisconnect();
});

describe("Reviews", () => {
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
    it("should create review", async () => {
        const response = await supertest(app).post("/teste").send(testCreate);
        console.log(response.body)
        expect(response.status).toBe(201);
    });
    it("should update user", async () => {
        const getAll = await supertest(app).get("/teste");
        const lastReview = getAll.body[getAll.body.length - 1];
        const id = lastReview._id;
        const response = await supertest(app).put(`/teste/${id}`).send(testReviewUpdate);
        expect(response.status).toBe(200);
    });
});