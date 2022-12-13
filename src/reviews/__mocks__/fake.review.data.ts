import { Review } from "../model/reviews.model";

export const fakeId = "632130d41623c49bf7b1c7e9";
const mockDate = new Date();
export const fakeReviewData: Review[] = [
  {
    title: "Harry PottSecreta",
    review: ["dasdasdasdasdas", "adsadasdadadad", "sadasdasdasda"],
    updatedAt: [mockDate],
    note: 5,
  },
  {
    title: "Harry PottFilosofal",
    review: ["dasdasdasdasdas", "adsadasdadadad", "sadasdasdasda"],
    updatedAt: [mockDate],
    note: 4,
  },
];

export const updateReview: Review = {
  title: "As Cronicas de Narnia",
  review: ["dasdasdasdasdas", "adsadasdadadad", "sadasdasdasda"],
  updatedAt: [mockDate],
  note: 1,
};
