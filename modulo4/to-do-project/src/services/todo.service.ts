import { connection } from "../connection"
import { Todo } from "../types/todo.dto"


export const createTodo = async (newTodo: Todo): Promise<number[]> => {
  try {
    return await connection('todo_task').insert(newTodo);
  } catch(e: any) {
    throw new Error(e.message)
  }
}


export const indexAllTodos = async (): Promise<Todo[]> => {
  try {
    const todos: Todo[] = (await connection.select().from('task_todo'));
    return todos;
  } catch(e: any) {
    throw new Error(e.message)
  }
}
