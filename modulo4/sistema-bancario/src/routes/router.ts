import {  Router } from "express";
import { userController } from "../controllers/client.controller";

const router: Router = Router();


router.get('/users', userController.indexUsers);
router.get('/users/balance', userController.showBalance);
router.post('/users', userController.createUser);

export default router;