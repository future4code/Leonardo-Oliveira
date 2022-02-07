import { connection } from "../connection"
import { Todo } from "../types/todo.dto"

const tableName: string = 'todo_task';

export const createTodo = async (newTodo: Todo): Promise<number[]> => {
  try {
    return await connection(tableName).insert(newTodo);
  } catch(e: any) {
    throw new Error(e.message)
  }
}


export const indexAllTodos = async (): Promise<Todo[]> => {
  try {
    const todos: Todo[] = (await connection.select().from(tableName));
    return todos;
  } catch(e: any) {
    throw new Error(e.message)
  }
}
