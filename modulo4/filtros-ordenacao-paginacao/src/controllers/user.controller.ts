import { Request, Response } from "express"
import { connection } from "../connection"
import { User } from "../types/user.dao"



async function selectAllUsers():Promise<any> {
  const result = await connection.raw(`
    SELECT id, name, email, type
    FROM aula48_exercicio;
  `)

  return result[0]
}


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
  try {
    const users = await selectAllUsers()

    if(!users.length){
      res.statusCode = 404
      throw new Error("No recipes found")
    }

    res.status(200).send(users)
    
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

async function selectAllUsers2(name: string):Promise<User[]> {
  try {
    const result = await connection.raw(`SELECT * FROM aula48_exercicio WHERE name = ${name};`)

    return result[0];
  } catch (error: any) {
    console.log(error.message);
    return [];
  }

}




export const getAllUsers2 = async(req: Request,res: Response): Promise<void> =>{
  try {
    const { name } = req.query;
    if(name && name.length !== 0){
      const users: User[] = await selectAllUsers2(name as string);

      if(!users.length){
        res.statusCode = 404
        throw new Error("No recipes found")
      }
  
      res.status(200).send(users)
    } else{
      res.statusCode = 400
      throw new Error("Name not provided or possibly empty!")
    }

    
  }catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}


async function selectAllUsers3(name: string, type: string):Promise<User[]> {
  try {
    const result = await connection.raw(`SELECT * FROM aula48_exercicio WHERE name = ${name} AND type = ${type};`)

    return result[0];
  } catch (error: any) {
    console.log(error.message);
    return [];
  }

}

export const getAllUsers3 = async(req: Request,res: Response): Promise<void> =>{
  try {
    const { type } = req.params;
    const { name } = req.query 
    if((type && type !== "") && (name && name.length !== 0)){
      const users: User[] = await selectAllUsers3(name as string, type);

      if(!users.length){
        res.statusCode = 404
        throw new Error("No recipes found")
      }
  
      res.status(200).send(users)
    } else{
      res.statusCode = 400
      throw new Error("Name not provided or possibly empty!")
    }

    
  }catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}

async function selectAllUsers4(value: string):Promise<User[]> {
  try {
    const result = await connection.raw(`SELECT * FROM aula48_exercicio WHERE ${value} = ${value};`)

    return result[0];
  } catch (error: any) {
    console.log(error.message);
    return [];
  }

}


export const getAllUsers4 = async(req: Request,res: Response): Promise<void> =>{
  try {

    const { type } = req.params;
    const { name } = req.query 

    if((type && type !== "") || (name && name.length !== 0)){
      const value: string = type || name as string;
      const users = await selectAllUsers4(value);

      if(!users.length){
        res.statusCode = 404
        throw new Error("No recipes found")
      }
  
      res.status(200).send(users)
    } else {
      res.statusCode = 400
      throw new Error("Data is not provided!")

    }
    
  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}