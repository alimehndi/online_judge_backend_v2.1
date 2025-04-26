import  express, { Request, Response }  from "express";

const app = express();

const port = 3001;
app.get('/', (req : Request,res : Response) => {
    res.send(`gtd`);
})

app.listen(port , () => {
    console.log(`Server is successfully running on port ${port}`);
});
