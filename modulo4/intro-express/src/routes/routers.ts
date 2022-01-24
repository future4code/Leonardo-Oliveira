import express from "express";

import { getAllHello, postHello } from '../controllers/hello.controller';


const router = express.Router();

router.get('/hello', getAllHello);
router.post('/hello', postHello);

export default router;