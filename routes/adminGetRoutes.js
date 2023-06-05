import express from 'express'

//import router functionality
// import { authAdmin } from '../includes/adminFunc.js';

//initiate express router func
const router = express.Router();

router.get("/admin", (req, res) => {
    res.render("admin/index")
})


export default router;