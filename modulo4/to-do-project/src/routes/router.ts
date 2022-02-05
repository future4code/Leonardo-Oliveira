import express from 'express';
import { postTodo } from '../controllers/todo.controller';
import { postUser } from '../controllers/user.controller';


const router = express.Router(); 

router.post('/todo', postTodo);
router.post('/user', postUser);

export default router;