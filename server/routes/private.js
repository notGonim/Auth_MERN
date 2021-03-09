import express from "express";
import { getPrivateData } from "../controllers/private-controller.js";
import { protect } from "../middlewares/auth-protected-routes.js";

export const PrivateRouter = express.Router()


PrivateRouter.get('/',protect, getPrivateData)