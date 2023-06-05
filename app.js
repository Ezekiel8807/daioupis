import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

//get control routes
import indexRoute from './routes/userRoute.js'

import adminGetRoutes from './routes/adminGetRoutes.js'
import adminPostRoutes from './routes/adminPostRoutes.js'



//configure environment variale
dotenv.config();

//intiate express
const daioupis = express();

//template engine
daioupis.set('view engine', 'ejs');

//static file folder
daioupis.use(express.static("public"));

// Body-parser middleware
daioupis.use(bodyParser.urlencoded({ extended: true }))
daioupis.use(bodyParser.json())


//index routes
daioupis.get("/", indexRoute);

//admin get routes
daioupis.get("/admin", adminGetRoutes);

//admin post routes
daioupis.post("/admin", adminPostRoutes);

//other routes not specify
daioupis.get("*", (req, res) => {
    res.send("error - page not found")
})


//app listen to port 3000
daioupis.listen(process.env.PORT);
console.log(`Server runing on port ${process.env.PORT}`)