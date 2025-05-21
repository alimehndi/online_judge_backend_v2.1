import  express, { Request, Response }  from "express";
import connectDb from "./config/connectDB.js";
import dotenv from 'dotenv';
import { userRouter } from "./Routes/userRoutes.js";
import { questionRouter } from "./Routes/questionRoutes.js";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

dotenv.config()

connectDb();
const app = express();

app.use(express.json());
app.use(cookieParser());

const port = 3001;
app.use('/api/v1/users', userRouter);
app.use('/api/v1/questions',questionRouter);
app.get('/check', (req : Request,res : Response) => {
    res.send(`gtd`);
})
app.get('/', (req : Request,res : Response) => {
    res.status(200).json({message : 'server is UP and running successfully'});
})
app.listen(port , () => {
    console.log(`Server is successfully running on port ${port}`);
});