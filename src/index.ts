import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { connectMongo } from './db/mongo.concection'
connectMongo();

const app = express()
const port = 3000
app.use(express.json())
app.listen(port,
    () =>
        console.log(`http://localhost:${port}`)
)