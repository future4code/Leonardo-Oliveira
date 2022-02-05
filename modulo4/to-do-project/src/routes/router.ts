import express from 'express';
import { postTodo } from '../controllers/todo.controller';


const router = express.Router(); 

router.post('/todo', postTodo);


export default router;