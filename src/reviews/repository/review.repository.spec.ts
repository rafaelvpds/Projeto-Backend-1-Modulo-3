import { fakeId, fakeReviewData, updateReview } from "../__mocks__/fake.review.data"
import { fakeReviewModel } from "../__mocks__/fake.review.model"
import { ReviewsRepository } from "../repository/reviews.repository"
import { jest } from "@jest/globals"

const reviewRepository = new ReviewsRepository(fakeReviewModel);

describe("ReviewRepository", () => {
    it("should return a list of reviews", async () => {
        const pets = await reviewRepository.getAll();
        expect(pets).toEqual(fakeReviewData);
    });
    it("should return an empty array", async () => {
        jest.spyOn(fakeReviewModel, "find").mockResolvedValueOnce([]);
        const pets = await reviewRepository.getAll();
        expect(pets).toEqual([]);
    });
    describe("getById", () => {
        it("should return a review", async () => {
            const review = await reviewRepository.getById(fakeId)
            expect(review).toEqual(fakeReviewData[0])
        })
        it("should return an empty object", async () => {
            jest.spyOn(fakeReviewModel, "findById").mockResolvedValueOnce(null)
            const review = await reviewRepository.getById(fakeId)
            expect(review).toEqual({})
        })
    })
    describe("create", () => {
        it("should create a review", async () => {
            const newReview = await reviewRepository.create(fakeReviewData[0])
            expect(newReview).toEqual(fakeReviewData[0])
        })
    })
    describe("update", () => {
        it("should update a review", async () => {
            const review = await reviewRepository.update(fakeId, fakeReviewData[0])
            expect(review).toEqual(updateReview)
        })
        it("should return an empty object", async () => {
            jest.spyOn(fakeReviewModel, "findByIdAndUpdate").mockResolvedValueOnce({})
            const review = await reviewRepository.update(fakeId, fakeReviewData[0])
            expect(review).toEqual({})
        })
    })
})