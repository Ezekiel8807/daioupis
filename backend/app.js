import cors from 'cors';
import express from "express";
import bodyParser from "body-parser";

const port = 3000;

//initialize express
const daioupis = express();

//cors
daioupis.use(cors())

// parse application/x-www-form-urlencoded
daioupis.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
daioupis.use(bodyParser.json())

daioupis.get("/api/admin", (req, res) =>{
    res.send("hello there!");
});

daioupis.post("/api/admin", (req, res) =>{
    const data = req.body;

    console.log(data);
});


daioupis.listen(port);
console.log(`server running at port ${port}`);