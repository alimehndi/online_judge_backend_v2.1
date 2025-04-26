import express from "express";
const app = express();
const port = 3001;
app.get('/', (req, res) => {
    res.send(`gtd`);
});
app.listen(port, () => {
    console.log(`Server is successfully running on port ${port}`);
});
