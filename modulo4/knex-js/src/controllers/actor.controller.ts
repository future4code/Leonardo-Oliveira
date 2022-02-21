import { NextFunction, Request, Response } from "express";
import { connection } from '../data/database';
// import { Client, Payment, Transfer } from "../types/client";


class ActorController {
  private async getActorById(id: string): Promise<any> {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)

    console.log(result);
  
    return result[0][0]
  }

  public async index(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const respo = await this.getActorById(id);
      console.log(respo);
  
      res.json(respo);
    } catch (error:any) {
      console.log(error.message)
      res.status(500).send("Unexpected error")
    }
  }
}

export const actorController = new ActorController();