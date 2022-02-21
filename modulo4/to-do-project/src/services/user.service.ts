import { connection } from "../connection"
import { User } from "../types/user.dto"


export const createUser = async (user: User) => {
  try {
    return await connection('todo_user').insert(user);
  } catch(e:any) {
    throw new Error(e.message)
  }
}


export const getUser = async (userId: string): Promise<User[]> => {
  try {
    return await connection('todo_user').where('id', userId);
  } catch(e:any) {
    throw new Error(e.message)
  }
}

export const editUser = async (userId: string, fieldsUser: User) => {
  try {
    return await connection('todo_user').where('id', userId).update(fieldsUser);
  } catch(e:any) {
    throw new Error(e.message)
  }
}