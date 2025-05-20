import  express, { Request, Response }  from "express";
import connectDb from "./config/connectDB.js";
import dotenv from 'dotenv';

dotenv.config()

connectDb();
const app = express();

const port = 3001;

app.listen(port , () => {
    console.log(`Server is successfully running on port ${port}`);
});