import express from "express";
import connectDb from "./config/connectDB.js";
import dotenv from 'dotenv';
dotenv.config();
connectDb();
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send(`gtd`);
});
app.listen(port, () => {
    console.log(`Server is successfully running on port ${port}`);
});
