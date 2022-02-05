import { connection } from "../connection"
import { User } from "../types/user.dto"


export const createUser = async (user: User) => {
  try {
    return await connection('todo_user').insert(user);
  } catch(e:any) {
    throw new Error(e.message)
  }
}

