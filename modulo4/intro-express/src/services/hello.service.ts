
import  db  from '../db/db.json';

export const createHello = (content: string) => {
  try {

    const newMessage = db.messages.push({"text":content});
    return  newMessage;
  } catch(e) {
    const result = (e as Error).message;
    throw new Error(result);
  }
}

export const indexHello = () => {
  try {
    const allMessages = db.messages;
    return  allMessages;
  } catch(e) {
    const result = (e as Error).message;
    throw new Error(result);
  }
}


