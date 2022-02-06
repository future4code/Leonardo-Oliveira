import express from 'express';
import { getTodos, postTodo } from '../controllers/todo.controller';
import { postUser } from '../controllers/user.controller';


const router = express.Router(); 

// Todo
router.post('/todos', postTodo);
router.get('/todos', getTodos);

// User
router.post('/users', postUser);

export default router;