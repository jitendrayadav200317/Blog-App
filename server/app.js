import express from 'express'
import dotenv from 'dotenv'
import dbConnect from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import cors from "cors"


dotenv.config();
const app = express();
app.use(express.json())
dbConnect();
app.use(cors({
    origin :"http://localhost:5173",
    credential: true,
}))

app.use('/auth',userRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT}`);
    
})