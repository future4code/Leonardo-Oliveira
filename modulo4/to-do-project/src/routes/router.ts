import express from 'express';
import { getTodos, postTodo } from '../controllers/todo.controller';
import { getOneUser, postUser, putUser } from '../controllers/user.controller';


const router = express.Router(); 

// Todo
router.post('/todos', postTodo);
router.get('/todos', getTodos);


// User
router.post('/users', postUser);
router.get('/users', getOneUser);
router.put('users/edit/:id', putUser);
export default router;