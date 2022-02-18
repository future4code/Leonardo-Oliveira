import { NextFunction, Request, Response } from "express"
import { createUser, showUsers} from "../services/user.service"
import { User } from "../types/user.dao"
import { v4 as uuidv4 } from 'uuid';


export const postUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
  const {name, email, password} = req.body as User;

  if((name && email && password) && (name && password && email) !== ""){
    const id: string = uuidv4();
    const user: User = {id, name, email, password };
    await createUser(user);
    res.status(201).json(user);
  }else {
    res.status(400).json({message: 'Some data is not present!'});
  }
  next();
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message);
  }
}

export const getAllUsers = async (_: Request, res: Response, next: NextFunction): Promise<void> => {

  try {

    const users: User[] = await showUsers();
    res.status(200).json(users);

  next();
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message)
  }
}

