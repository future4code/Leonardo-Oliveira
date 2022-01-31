import { NextFunction, Request, Response } from "express";
import data from '../db/data.json';
import { Client } from "../types/client";


class UserController {
  public async indexUsers(_: Request, response: Response, next: NextFunction): Promise<void>{
    try {
      const users: Client[] = data.clients;
      response.json(users).status(200);
      next();
    } catch (error: any) {
      response.json({message: error}).status(500);
      next();
    }
  }

  public async showBalance(request: Request, response: Response, next: NextFunction): Promise<void>{
    try {
      const { cpf, name } = request.query;
      
      if(cpf && name){
        const userBalnce: number | undefined = data.clients.find((clinet: Client) => {
          return clinet.name && clinet.cpf === cpf;
        })?.balance;

        if(userBalnce){
          response.json(userBalnce).status(200);
          
        } else {
          response.json({message: "Client NOT present in our data!"}).status(404);
        }
        
      } 
      next();
    } catch (error: any) {
      response.json({message: error}).status(500);
      next();
    }
  }

  public async createUser(request: Request, response: Response, next: NextFunction): Promise<void>{
    try {
        const { name, cpf, birth_date} = request.body;

        const age: number =  (new Date().getFullYear()) - (Number(birth_date.split('-')[0]));

        const isCpfDuplicate: Client | undefined = data.clients.find((client: Client) => {
          return client.cpf === cpf;
        });

        if(age >= 18 && (!isCpfDuplicate)){
          const balance: number = 0;
          const user: Client = {name, cpf, birth_date, balance};
          data.clients.push(user);
          response.json(user).status(201);
        } else {
          response.json({messsage: "You're under the major age!"}).status(422);
        }
      next();
    } catch (error: any) {
      response.json({message: error}).status(500);
      next();
    }
  }

  public async addBalnce(request: Request, response: Response, next: NextFunction): Promise<void>{
    try {
        const {name, cpf} = request.query;

        const client: Client | undefined =  data.clients.find((client :Client) => {
          return client.name === name && client.cpf === cpf
        })

        if(client){
          const { userBalance } = request.body;
          const balance: number = Number(userBalance);

          const indexClient: number | undefined = data.clients.findIndex((clientValue: Client) => {
            return clientValue === client;
          })

          client.balance = balance;

          data.clients[indexClient] = client;
          response.json(client).status(200);
        } else {
          response.json({messsage: "Client NOT present in our data!"}).status(404);
        }
      next();
    } catch (error: any) {
      response.json({message: error}).status(500);
      next();
    }
  }

}

export const userController = new UserController();