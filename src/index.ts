import  express, { Request, Response }  from "express";
import connectDb from "./config/connectDB.js";
import dotenv from 'dotenv';
import { userRouter } from "./Routes/userRoutes.js";
import { questionRouter } from "./Routes/questionRoutes.js";

dotenv.config()

connectDb();
const app = express();

const port = 3001;
app.use('/api/v1/users', userRouter);
app.use('/api/v1/question',questionRouter);

app.get('/', (req : Request,res : Response) => {
    res.status(200).json({message : 'server is UP and running successfully'});
})
app.listen(port , () => {
    console.log(`Server is successfully running on port ${port}`);
});