import { NextFunction, Request, Response } from "express";
import data from '../db/data.json';
import { Client, Payment, Transfer } from "../types/client";


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
      console.log(cpf, name);

      
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

  public async payBill(request: Request, response: Response, next: NextFunction): Promise<void>{
    try {
        const { cpf } = request.params;

          const client: Client | undefined =  data.clients.find((client :Client) => {
            return client.cpf === cpf
          })
  
          if(client){
            const {value, description, payment_date_user} = request.body;
            let payment_date: string = payment_date_user;
            const date: Date = new Date();
            const today: string = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
            
            const indexClient: number | undefined = data.clients.findIndex((clientValue: Client) => {
              return clientValue === client;
            })
            
            const clientBalance: number = client.balance;
            
            
  
            if(clientBalance >= Number(value)){
              if(!payment_date){
  
                payment_date = today;
              } 
  
              if(Date.parse(payment_date) >= Date.parse(today)){
                const payment: Payment = {cpf, value, description, payment_date};

                data.transactions.payment.push(payment);
                const resultPaymentInfo: Payment = data.transactions.payment[data.transactions.payment.length - 1];

                const newBalance: number = client.balance - Number(value);
  
  
                client.balance = newBalance;
      
                data.clients[indexClient] = client;
                response.status(200).json({client, resultPaymentInfo});
                next();
              }
              else {
                response.status(400).json({message: 'You need to have a valid date!'});
                next();
              }
            } else {
              response.status(400).json({message: 'You do not have enough money to do that!'});
              next();
            }

          } else {
            response.status(404).json({messsage: "Client NOT present in our data!"});
            next();
          }
        
    } catch (error: any) {
      response.status(500).json({message: error});
      next();
    }
  }

  public async transferMoney(request: Request, response: Response, next: NextFunction): Promise<void>{
    try {
        const {  cpf_owner, name_owner, name_recipient, cpf_recipient, amout } = request.params;

          const client: Client | undefined =  data.clients.find((client :Client) => {
            return client.cpf === cpf_owner
          })
  
          if(client){
            const value: number = Number(amout);
            
            const indexClient: number | undefined = data.clients.findIndex((clientValue: Client) => {
              return clientValue === client;
            })
            
            const clientBalance: number = client.balance;
            
  
            if(clientBalance >= value){
  
                const transfer: Transfer = {cpf_owner, name_owner, cpf_recipient, name_recipient, value};

                data.transactions.transfer.push(transfer);
                const resultTransferInfo: Transfer = data.transactions.transfer[data.transactions.transfer.length - 1];

                const newBalance: number = client.balance - Number(value);
  
  
                client.balance = newBalance;
      
                data.clients[indexClient] = client;
                response.status(200).json({client, resultTransferInfo});
                next();
              
            } else {
              response.status(400).json({message: 'You do not have enough money to do that!'});
              next();
            }

          } else {
            response.status(404).json({messsage: "Client NOT present in our data!"});
            next();
          }
        
    } catch (error: any) {
      response.status(500).json({message: error});
      next();
    }
  }



}

export const userController = new UserController();