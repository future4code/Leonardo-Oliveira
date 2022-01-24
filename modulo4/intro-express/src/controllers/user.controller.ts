import { createUser, indexUsers } from "../services/user.service";

import { NextFunction, Response, Request } from "express"

export const postUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id, name, phone, email, website } = req.body;
  try {
    await createUser(id, name, phone, email, website)
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