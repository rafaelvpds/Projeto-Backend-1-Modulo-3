import { BookModel } from "../books/model/book.model";
import { ReviewsModel } from "../reviews/model/reviews.model";
import dotenv from "dotenv";
dotenv.config();
import { connect, connection, disconnect } from "mongoose";
const mongo = process.env.MONGODB as string;

async function seed() {
  const bookArray = (reviewId: string) => [
    {
      title: "Harry Potter e a Pedra Filosofal",
      language: ["ingles, Portugues, Espanhol"],
      statusBooks: true,
      author: "J.K.Rowling",
      review: reviewId,
    },
    {
      title: "O Senhor dos Anéis Duas Torres",
      language: ["Alemao, Portugues, Espanhol"],
      statusBooks: true,
      author: "J.R.R.Tolkien",
    },
    {
      title: "O Senhor dos Anéis do Poder Pa",
      language: ["Alemao, Portugues, Espanhol"],
      statusBooks: true,
      author: "J.R.R.Tolkien",
    },
  ];

  // const reviewArray =
  //     [
  //         {
  //             title: "Resenha do Livro Harry Potter e a Pedra Filosofal",

  //             review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",

  //             updateAt: new Date(),

  //             note: 5,

  //         }
  //     ]

  try {
    await BookModel.insertMany(bookArray("6389476109047c9c7d808944"));
    //  await ReviewsModel.insertMany(reviewArray)
    console.log("DB successfully seeded");
  } catch (error) {
    console.log(`failed to seed Book`);
    console.log(error);
  } finally {
    disconnect();
  }
}

connection
  .on("error", (error) => {
    console.log("connection error: " + error);
  })
  .on("close", () => {
    console.log("close connection");
  })
  .on("open", () => {
    console.log("connection");
    seed();
  });
connect(mongo);
