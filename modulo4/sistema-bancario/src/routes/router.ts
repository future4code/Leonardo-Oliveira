import {  Router } from "express";
import { userController } from "../controllers/client.controller";

const router: Router = Router();


router.get('/users', userController.indexUsers);
router.get('/users/balance', userController.showBalance);
router.post('/users', userController.createUser);
router.put('/users/balance', userController.addBalnce);
router.put('/users/bill/:cpf', userController.payBill);
router.put('/users/transfer', userController.transferMoney);

export default router;