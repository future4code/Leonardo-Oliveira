import express from 'express';
import { getAllProducts, postProduct } from '../controllers/product.controller';
import { getAllUsers, postUser } from '../controllers/user.controller';


const router = express.Router(); 


//User
router.post('/users', postUser);
router.get('/users', getAllUsers);

//Product
router.post('/products', postProduct);
router.get('/products', getAllProducts);


export default router;