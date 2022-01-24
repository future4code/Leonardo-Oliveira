
import  db  from '../db/db.json';
import { User } from '../types/user';

export const createUser = (user: User) => {
  try {
    const {id, name, phone, email, website} = user;
    db.users.push({ id, name, phone, email, website });  
    const newUser: User = db.users[db.users.length - 1];
    return  newUser;
  } catch(e) {
    const result = (e as Error).message;
    throw new Error(result);
  }
}

export const indexUsers = () => {
  try {
    const allUsers = db.users;
    return  allUsers;
  } catch(e) {
    const result = (e as Error).message;
    throw new Error(result);
  }
}


