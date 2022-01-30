import {  Router } from "express";
import { userController } from "../controllers/user.controller";

const router: Router = Router();


router.get('/user', userController.index);
router.get('/user/:type', userController.show);
router.get('/user/:name', userController.show);

export default router;