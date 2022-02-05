import { NextFunction, Request, Response } from "express"
import { createTodo } from "../services/todo.service"
import { Todo } from "../types/todo.dto"


export const postTodo = async (req: Request, res: Response, next: NextFunction) => {

  try {
  const {title, description, limiteDate, createUserId} = req.body as Todo;

  if(title && description && limiteDate && createUserId){
    const newTodo: Todo = {title, description, limiteDate, createUserId};
    await createTodo(newTodo);
    res.status(201).json(newTodo);
    next()
    
  }
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message)
  }
}

