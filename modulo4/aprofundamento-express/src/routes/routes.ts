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


routes.get('/todos', async (request: Request, response: Response, next: NextFunction) => {
  try {
    const {completed} = request.query;
    
    // Precisa adicionar validação caso passe id que nao existe
    if(completed === 'true' || completed === 'false'){
      
      let statusTask: boolean;

      completed === "true" ? statusTask = true : statusTask = false; 

      const todosStatus: Todo[] = storage.todos.filter((todo: Todo) => {
        return (todo.completed === statusTask);
      });

      if(todosStatus.length === 0){
        response.sendStatus(404) && next("UserID not found!");
        
      }
  
      response.send(todosStatus).status(200);
      next();
    } else {
      return response.sendStatus(400) && next("ID or status not passed!");
    }


  } catch (error) {
    const result = (error as Error).message;
    console.log(result);
    response.sendStatus(500) && next(result);
  }
});


routes.get('/todos/:id', async (request: Request, response: Response, next: NextFunction) => {
  try {
    const { id } = request.params;
    
    // Precisa adicionar validação caso passe id que nao existe
    if(id){
      
      let userId: number = Number(id); 

      const todosUser: Todo[] = storage.todos.filter((todo: Todo) => {
        return (todo.userId === userId);
      });

      if(todosUser.length === 0){
        response.sendStatus(404) && next("UserID not found!");
        
      }
  
      response.send(todosUser).status(200);
      next();
    } else {
      return response.sendStatus(500) && next("ID or status not passed!");
    }


  } catch (error) {
    const result = (error as Error).message;
    console.log(result);
    response.sendStatus(500) && next(result);
  }
});


routes.post('/todos', async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const {userID, idTask, title} = request.body;

    if(userID && idTask && title){
      let completed: boolean = false;
      const userId: number = Number(userID);
      const id: number = Number(idTask);

      const newTodo: Todo = {userId, id, title, completed};

      storage.todos.push(newTodo);

      response.send(newTodo).status(201);
      next();
    } else {
      response.sendStatus(400) && next("userID or idTask or title not passed!");
    }

  } catch (error) {
    const result = (error as Error).message;
    console.log(result);
    response.sendStatus(500) && next(result);
  }
});


routes.patch('/todos/:idTask', async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const { idTask } = request.params;

    if(idTask){
      const id: number = Number(idTask); 

      const todoIndex: number = storage.todos.findIndex((todo: Todo) => {
        return todo.id === id;
      });

      if(todoIndex === -1){
        response.sendStatus(404) && next("Task Not found!");
      }

      storage.todos[todoIndex].completed = !(storage.todos[todoIndex].completed); 
      
      response.send(storage.todos).status(200);
      next();
    } else {
      response.sendStatus(400) && next("idTask not passed!");
    }

  } catch (error) {
    const result = (error as Error).message;
    console.log(result);
    response.sendStatus(500) && next(result);
  }
})





export default routes;