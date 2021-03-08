import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotEnv from 'dotenv';

import {router} from './routes/auth-routes.js'


dotEnv.config()


const app = express()
// setting up the body parser so it can properly sending our request
app.use(cors())


app.use('/api/auth',router)

const PORT = process.env.PORT || 5000



app.listen(PORT)