import express from 'express'

//import router functionality
import { authAdmin } from '../includes/adminFunc.js';

//initiate express router func
const router = express.Router();

//authenticate admin
router.post("/admin", authAdmin)


export default router;