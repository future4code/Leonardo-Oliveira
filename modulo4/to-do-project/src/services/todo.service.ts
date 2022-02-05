import { connection } from "../connection"
import { Todo } from "../types/todo.dto"


export const createTodo = async (newTodo: Todo) => {
  try {
    return await connection('todos').insert(newTodo);
  } catch(e:any) {
    throw new Error(e.message)
  }
}

