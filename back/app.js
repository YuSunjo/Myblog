const express = require('express');
const postRouter = require('./routes/post');


const app = express();
const port = 3065;

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send('hello');
})

app.use(('/post'), postRouter);


app.listen(port, () => {
    console.log(`port on ${port}`)
});