import { Review } from "../model/reviews.model"

export const fakeId = "632130d41623c49bf7b1c7e9";
const mockDate = new Date()
export const fakeReviewData: Review[] =
    [
        {
            title: "Harry Potter Camera Secreta",
            review: ["dasdasdasdasdas", "adsadasdadadad", "sadasdasdasda"],

            updateDate: [mockDate],
            note: 5
        },
        {
            title: "Harry Potter e a Pedra Filosofal",
            review: ["dasdasdasdasdas", "adsadasdadadad", "sadasdasdasda"],

            updateDate: [mockDate],
            note: 4
        }

    ]

export const updateReview: Review = {
    title: "As Cronicas de Narnia",
    review: ["dasdasdasdasdas", "adsadasdadadad", "sadasdasdasda"],

    updateDate: [mockDate],
    note: 1
}
