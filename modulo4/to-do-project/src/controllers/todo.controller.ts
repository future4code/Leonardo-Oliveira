import { NextFunction, Request, Response } from "express"
import { createTodo } from "../services/todo.service"
import { Todo } from "../types/todo.dto"
import { v4 as uuidv4 } from 'uuid';


export const postTodo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
  const {title, description, limiteDate, createUserId} = req.body as Todo;

  if(title && description && limiteDate && createUserId){
    const id: string = uuidv4();
    const newTodo: Todo = {id, title, description, limiteDate, createUserId};
    await createTodo(newTodo);
    res.status(201).json(newTodo);
  } else {
    res.status(400).json({message:'Some items are not present!'});
  }
  next();
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message)
  }
}

