import express from 'express'
import { addhw } from '../controllers/addcontroller.js'; 

const router=express.Router();

router.post('/add',addhw);

export default router;