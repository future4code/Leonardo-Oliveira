import { connection } from "../connection"
import { User } from "../types/user.dao"

const tableName: string = 'labecommerce_users';

export const createUser = async (user: User): Promise<number[]> => {
  try {
    return await connection(tableName).insert(user);
  } catch(e:any) {
    throw new Error(e.message)
  }
}


export const showUsers = async (): Promise<User[]> => {
  try {
    return await connection.select().from(tableName);
  } catch(e:any) {
    throw new Error(e.message)
  }
}

export const getOneUser = async (id: string): Promise<User | undefined> => {
  try {
    return await connection.raw(`SELECT * FROM ${tableName} WHERE id = ${id} LIMIT 1`)
  } catch(e:any) {
    throw new Error(e.message)
  }
}
