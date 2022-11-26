import { mockReponse, mockRequest } from "../__mocks__/fake.review.routes";
import { fakeReviewService } from "../__mocks__/fake.review.service";
import { fakeId, fakeReviewData, updateReview } from "../__mocks__/fake.review.data";
import { ReviewController } from "./review.controller";
import { StatusCode } from "../../utils/status.cade";

const reviewController = new ReviewController(fakeReviewService);
const req = mockRequest();
const res = mockReponse();

describe("ReviewController", () => {
    describe("getAll", () => {
        it("should return all reviews", async () => {
            await reviewController.getAll(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeReviewData)
        })

        it("should return status code 200", async () => {
            await reviewController.getAll(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK)
        })

        it("should return a Error", async () => {
            jest.spyOn(fakeReviewService, "getAll").mockImplementation(() => Promise.resolve("unable to request the Database"))
            await reviewController.getAll(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR)
        })
    })
    describe("getById", () => {
        it("should return a review", async () => {
            await reviewController.getById(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeReviewData[0])
        })

        it("should return status code 200", async () => {
            req.params.id = fakeId
            await reviewController.getById(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK)
        })

        it("should return a id Invalidate", async () => {
            req.params.id = fakeId
            jest.spyOn(fakeReviewService, "getById").mockImplementation(() => Promise.resolve(("invalid id on request, please submit a ObjectId")))
            await reviewController.getById(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST)
        })

        it("should return a Error", async () => {
            req.params.id = fakeId
            jest.spyOn(fakeReviewService, "getById").mockImplementation(() => Promise.resolve("unable to request the Database"))
            await reviewController.getById(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR)
        })
    })
    describe("create", () => {
        it("should a create a review", async () => {
            req.body = fakeReviewData[0]
            await reviewController.create(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeReviewData[0])
        })
        it("should return a status code 201", async () => {
            req.body = fakeReviewData[0]
            await reviewController.create(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED)
        })
        it("sould return a Error", async () => {
            req.body = fakeReviewData[0]
            jest.spyOn(fakeReviewService, "create").mockImplementation(() => Promise.resolve("unable to request the Database"))
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR)
        })
    })
    describe("update", () => {
        it("should a update a review", async () => {
            req.params.id = fakeId;
            req.body = fakeReviewData[0];
            await reviewController.update(req, res)
            expect(res.json).toHaveBeenCalledWith(fakeReviewData[0])

        })
        it("should return status code 200", async () => {
            req.params.id = fakeId;
            req.body = fakeReviewData[0];
            await reviewController.update(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK)
        })
        it("should return a id Invalidate", async () => {
            req.params.id = fakeId;
            req.body = fakeReviewData[0];
            jest.spyOn(fakeReviewService, "update").mockImplementation(() => Promise.resolve(("invalid id on request, please submit a ObjectId")))
            await reviewController.getById(req, res)
            expect(res.status).toHaveBeenCalledWith(StatusCode.BAD_REQUEST)
        })
        it("should return a Error", () => {
            req.params.id = fakeId;
            req.body = fakeReviewData[0];
            jest.spyOn(fakeReviewService, "update").mockImplementation(() => Promise.resolve("invalid id on request, please submit a ObjectId"))
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR)
        })
    })
})