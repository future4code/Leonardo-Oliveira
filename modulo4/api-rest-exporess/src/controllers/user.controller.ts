import { NextFunction, Request, Response } from "express";
import data from '../db/data.json';
import { ROLE, User } from "../types/user";


class UserController {
  public async index(_: Request, response: Response, next: NextFunction): Promise<void>{
    try {
      const users: User[] = data.users;
      response.json(users).status(200);
      next();
    } catch (error: any) {
      response.json({message: error}).status(500);
      next();
    }
  }

  public async show(request: Request, response: Response, next: NextFunction): Promise<void>{
    try {
      const { type } = request.params;
      const usersByType: User[] = data.users.filter((user: User) => {
        return user.type === type;
      });

      response.json(usersByType).status(200);
      next();
    } catch (error: any) {
      response.json({message: error}).status(500);
      next();
    }
  }
}

export const userController = new UserController();