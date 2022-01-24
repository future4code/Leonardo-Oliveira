
import  db  from '../db/db.json';

export const createUser = (
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
    ) => {
  try {

    const newUser = db.users.push({ id, name, phone, email, website });
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


