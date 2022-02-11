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

