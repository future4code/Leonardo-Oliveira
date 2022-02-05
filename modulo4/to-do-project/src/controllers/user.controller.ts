import { NextFunction, Request, Response } from "express"
import { createUser} from "../services/user.service"
import { User } from "../types/user.dto"
import { v4 as uuidv4 } from 'uuid';


export const postUser = async (req: Request, res: Response, next: NextFunction) => {

  try {
  const {name, nickname, email} = req.body as User;

  if(name && nickname && email){
    const id: string = uuidv4();
    const user: User = {id, name, email, nickname };
    await createUser(user);
    res.status(201).json(user);
  }else {
    res.status(400).json({message: 'Some itens are not present!'});
  }
  next();
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message)
  }
}