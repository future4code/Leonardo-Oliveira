import { NextFunction, Request, Response } from "express"
import { createTodo, indexAllTodos } from "../services/todo.service"
import { Todo } from "../types/todo.dto"
import { v4 as uuidv4 } from 'uuid';


export const postTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
  const {title, description, createUserId} = req.body as Todo;
  let { limiteDate } = req.body as Todo;

  if((title && description && limiteDate && createUserId) && (title && description && limiteDate && createUserId) !== ""){
    const id: string = uuidv4();


    limiteDate = limiteDate.split('/').reverse().join('-'); 

    const newTodo: Todo = {id, title, description, limiteDate, createUserId};

    await createTodo(newTodo);
    res.status(201).json(newTodo);
  } else {
    res.status(400).json({message:'Some data is not present!'});
  }
  next();
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message)
  }
}

export const getTodos = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
try{
  const todos: Todo[] = await indexAllTodos();
  res.status(200).json(todos);
  next();
  } catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message)
  }
}

