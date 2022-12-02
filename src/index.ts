import express from 'express'
import { reviewRoutes } from "./reviews/routes/review.routes";
import { reviewBooks } from "./books/routes/book.routes";
import { connectMongo } from './db/mongo.concection';

connectMongo();

const app = express();
const port = 3000;
app.use(express.json());
app.use("/reviews", reviewRoutes);
app.use("/books", reviewBooks);
app.listen(port, () => console.log(`http://localhost:${port}`));