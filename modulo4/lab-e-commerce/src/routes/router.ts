import express from 'express';
import { getAllUsers, postUser } from '../controllers/user.controller';


const router = express.Router(); 


//User
router.post('/users', postUser);
router.get('/users', getAllUsers);

//Product

export default router;