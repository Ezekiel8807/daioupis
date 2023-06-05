import express from 'express'

//initiate express router func
const router = express.Router();


router.get("/", (req, res) => {
    res.render("index")
})



export default router;