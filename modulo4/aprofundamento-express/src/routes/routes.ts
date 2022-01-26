import express, {Request, Response, NextFunction} from 'express';
import { Todo } from '../types/todo';
import storage from '../storage.json';


const routes = express.Router();

routes.get('/ping', async (_: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    response.send("pong");
    next();
  } catch (error) {
    const result = (error as Error).message;
    console.log(result);
    response.sendStatus(500) && next(result);
  }
})


routes.get('/todos', async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const {userId, completed} = request.params;

    if(userId && completed){
      let statusTask: boolean;

      completed === "true" ? statusTask = true : statusTask = false; 
      
      const todosUserStatus: Todo[] = storage.todos.filter((todo: Todo) => {
        return (todo.userId === Number(userId) && todo.completed === statusTask);
      });
  
      response.send(todosUserStatus).status(200);
      next();
    } else {
      response.sendStatus(500) && next("ID or status not passed!");
    }


  } catch (error) {
    const result = (error as Error).message;
    console.log(result);
    response.sendStatus(500) && next(result);
  }
});

routes.post('/todos', async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const {userId, id, title} = request.body;

    if(userId && id && title){
      let completed: boolean = false;

      const newTodo: Todo = {userId, id, title, completed};

      storage.todos.push(newTodo);

      response.send(newTodo).status(201);
      next();
    } else {
      response.sendStatus(500) && next("userID or id or title not passed!");
    }

  } catch (error) {
    const result = (error as Error).message;
    console.log(result);
    response.sendStatus(500) && next(result);
  }
})




export default routes;