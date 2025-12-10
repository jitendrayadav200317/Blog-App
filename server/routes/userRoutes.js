import express from "express";

import { login, register } from "../controllers/userControllers.js";

const userRoutes = express.Router();
userRoutes.post('/register',register)
userRoutes.get('/login',login)

export default userRoutes;