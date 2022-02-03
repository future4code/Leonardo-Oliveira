import {  Router } from "express";
import { actorController } from "../controllers/actor.controller";
// import { userController } from "../controllers/client.controller";

const router: Router = Router();

router.get('/users/:id', actorController.index);

export default router;