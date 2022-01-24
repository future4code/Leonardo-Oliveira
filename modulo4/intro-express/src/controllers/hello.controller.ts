import { createHello, indexHello } from "../services/hello.service";

import { NextFunction, Response, Request } from "express"

export const postHello = async (req: Request, res: Response, next: NextFunction) => {
  const { content } = req.body;
  try {
    await createHello(content)
    res.sendStatus(201)
    next()
  } catch(e) {
    const result = (e as Error).message;
    console.log(result);
    res.sendStatus(500) && next(result);
  }
}

export const getAllHello = async (_: Request, res: Response, next: NextFunction) => {
  try {
    await indexHello();
    res.sendStatus(200)
    next()
  } catch(e) {
    const result = (e as Error).message;
    console.log(result);
    res.sendStatus(500) && next(result);
  }
}