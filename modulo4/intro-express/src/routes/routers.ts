import express from "express";

import { getAllHellos, postHello } from '../controllers/hello.controller';
import { getAllUsers, postUser } from "../controllers/user.controller";


const router = express.Router();

router.get('/hello', getAllHellos);
router.post('/hello', postHello);

router.get('/user', getAllUsers);
router.post('/user', postUser);

export default router;