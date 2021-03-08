import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotEnv from 'dotenv';

dotEnv.config()


const app = express()


// setting up the body parser so it can properly sending our request
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())


const PORT = process.env.PORT || 5000
