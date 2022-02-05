import { connection } from "../connection"
import { Todo } from "../types/todo.dto"


export const createTodo = async (newTodo: Todo) => {
  try {
    return await connection('todo_task').insert(newTodo);
  } catch(e:any) {
    throw new Error(e.message)
  }
}

