import {  Router } from "express";
import { userController } from "../controllers/user.controller";

const router: Router = Router();


router.get('/users', userController.index);
router.get('/users/search', userController.show);
router.post('/users', userController.create);

export default router;