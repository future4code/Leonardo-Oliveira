import { NextFunction, Request, Response } from "express"
import { createUser, editUser, getUser} from "../services/user.service"
import { User } from "../types/user.dto"
import { v4 as uuidv4 } from 'uuid';


export const postUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
  const {name, nickname, email} = req.body as User;

  if((name && nickname && email) && (name && nickname && email) !== ""){
    const id: string = uuidv4();
    const user: User = {id, name, email, nickname };
    await createUser(user);
    res.status(201).json(user);
  }else {
    res.status(400).json({message: 'Some data is not present!'});
  }
  next();
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message)
  }
}

export const putUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
  const { id } = req.params as User;

  if( id && id !== ""){
    const user: User[] = await getUser(id);
    const {name, nickname} = req.body as User;
    if((user && name && nickname) && (name && nickname) !== ""){
      
      const userEdit: User = {name, nickname};
      await editUser(id, userEdit);
      res.status(200).json({message: 'User edited successfully'});
    }
    else {
      res.status(400).json({message: 'User can not be found or data is not present!'})
    }

  }else {
    res.status(400).json({message: 'Some data is not present!'});
  }
  next();
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message)
  }
}

export const getOneUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
  const { id } = req.params as User;

  if(id && id !== ""){
    const user: User[] = await getUser(id);
    
    res.status(201).json(user);
  }else {
    res.status(400).json({message: 'Some data is not present!'});
  }
  next();
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message)
  }
}