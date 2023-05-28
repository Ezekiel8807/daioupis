import express from "express";

const port = 3000;



const daioupis = express();


daioupis.get("/", (req, res) =>{

});

daioupis.get("/admin", (req, res) =>{
    res.send("hello there!");
});


daioupis.listen(port);
console.log(`server running at port ${port}`);