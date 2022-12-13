import express from "express";
import { routesReview } from "./reviews/routes/review.routes";
import { routesBook } from "./books/routes/book.routes";
import { connectMongo } from "./db/mongo.concection";

connectMongo();

const app = express();
const port = 3000;
app.use(express.json());
app.use("/reviews", routesReview);
app.use("/books", routesBook);
app.listen(port, () => console.log(`http://localhost:${port}`));
