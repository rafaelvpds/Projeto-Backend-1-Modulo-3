import dotenv from "dotenv";
dotenv.config();
import { connect, connection } from "mongoose";
const mongo = process.env.MONGODB as string;

export function connectMongo() {
  connection
  .on('error', (error) => {
      console.log('connection error: ' + error)
  })
  .on('close', () => {
      console.log('close connection')
  })
  .on('open', () => {
      console.log('connection')
  });

  connect(mongo);
}

export async function mongoDisconnect() {
  console.log("Closing MongoDB connection");
  await connection.close();
}
