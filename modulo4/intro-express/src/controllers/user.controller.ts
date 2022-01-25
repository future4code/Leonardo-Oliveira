import { createUser, indexUsers } from "../services/user.service";

import { NextFunction, Response, Request } from "express"
import { User } from "../types/user";

export const postUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id, name, phone, email, website } = req.body;
  const userDTO: User = {id, name, phone, email, website};
  try {
    await createUser(userDTO);
    res.sendStatus(201)
    next()
  } catch(e) {
    const result = (e as Error).message;
    console.log(result);
    res.sendStatus(500) && next(result);
  }
}

export const getAllUsers = async (_: Request, res: Response, next: NextFunction) => {
  try {
    await indexUsers();
    res.sendStatus(200)
    next()
  } catch(e) {
    const result = (e as Error).message;
    console.log(result);
    res.sendStatus(500) && next(result);
  }
}