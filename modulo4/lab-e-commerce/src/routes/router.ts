import express from 'express';
import { getAllProducts, postProduct } from '../controllers/product.controller';
import { postPurchase } from '../controllers/purchase.controller';
import { getAllUsers, postUser } from '../controllers/user.controller';


const router = express.Router(); 


//User
router.post('/users', postUser);
router.get('/users', getAllUsers);

//Product
router.post('/products', postProduct);
router.get('/products', getAllProducts);

//Purchase
router.post('/purchases', postPurchase);


export default router;