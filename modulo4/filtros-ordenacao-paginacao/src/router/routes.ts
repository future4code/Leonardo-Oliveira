import express from 'express';
import { getAllUsers, getAllUsers2, getAllUsers3 } from '../controllers/user.controller';


const router = express.Router(); 

router.get('/users', getAllUsers);

router.get('/users/search', getAllUsers2);

router.get('/users/:type', getAllUsers3);


export default router;