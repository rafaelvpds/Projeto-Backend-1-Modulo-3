import { fakeReviewData, fakeId, updateReview } from "../__mocks__/fake.review.data";
import { fakeReviewModel } from "../__mocks__/fake.review.model";
import { fakeReviewRepository } from "../__mocks__/fake.review.repository"
import { ReviewSrevice } from "../services/review.service";
import { invalidIdError } from "../../utils/error.handler"
import { jest } from "@jest/globals";

const reviewService = new ReviewSrevice(fakeReviewRepository)

describe("ReviewService", () => {
    describe("getAll", () => {
        it("should call Repository.getAll", async () => {
            const spy = jest.spyOn(fakeReviewRepository, "getAll")
            await reviewService.getAll()
            expect(spy).toHaveBeenCalled();
        })
        it("should return a list of reviews", async () => {
            const reviews = await reviewService.getAll()
            expect(reviews).toEqual(fakeReviewData)
        })
    })

    describe("getById", () => {
        it("should call Repository.getById", async () => {
            const spy = jest.spyOn(fakeReviewRepository, "getById")
            await reviewService.getById(fakeId)
            expect(spy).toHaveBeenCalled();
        })
        it("should return a review", async () => {
            const review = await reviewService.getById(fakeId)
            expect(review).toEqual(fakeReviewData[0])
        })
    })
    describe("create", () => {
        it("should call Repository.create", async () => {
            const spy = jest.spyOn(fakeReviewRepository, "create")
            await reviewService.create(fakeReviewData[0])
            expect(spy).toHaveBeenCalled();
        })
        it("should return a new review", async () => {
            const newReview = await reviewService.create(fakeReviewData[0])
            expect(newReview).toEqual(fakeReviewData[0])
        })
    })
    describe("update", () => {
        it("should call Repository.create", async () => {
            const spy = jest.spyOn(fakeReviewRepository, "update")
            await reviewService.update(fakeId, updateReview)
            expect(spy).toHaveBeenCalled();
        })
        it("should return a review", async () => {
            const review = await reviewService.update(fakeId, updateReview)
            expect(review).toEqual(updateReview)
        })
    })
})

