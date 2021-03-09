import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotEnv from 'dotenv';

import { router } from './routes/auth-routes.js'
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middlewares/error.js";


dotEnv.config()


//connected to the database
connectDB()

const app = express()
// setting up the body parser so it can properly sending our request
app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/api/auth', router)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT)


process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error : ${err} `)
    server.close(() => process.exit(1))
})



