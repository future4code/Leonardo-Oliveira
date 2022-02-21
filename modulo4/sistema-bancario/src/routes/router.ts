import {  Router } from "express";
import { userController } from "../controllers/client.controller";

const router: Router = Router();


router.get('/users', userController.indexUsers);
router.get('/users/balance', userController.showBalance);
router.post('/users', userController.createUser);
router.put('/users/balance', userController.addBalnce);
router.post('/users/bill/:cpf', userController.payBill);
router.post('/users/transfer', userController.transferMoney);

export default router;