import axios from "axios"
import { Request, Response } from "express"
import { baseUrl } from "../constants/baseUrl"
import { Subscriber } from "../types/subscriber.type";
import { getSubscribers } from "./subscriber.controller";


const sendNotifications = async (
  users: Subscriber[] | undefined,
  message: string
): Promise<string | undefined> => {

  try {
    if(users){
      for (const user of users) {
        await axios.post(`${baseUrl}/notifications`, {
          subscriberId: user.id,
          message
        });
      }
    } else{
      throw new Error("Subscribers is missing!")
    }
    return "All notifications sent";
	} catch {
		console.log("Error");
	}
};


export const postNotification = async (request: Request, response: Response): Promise<void> => {
  try {
    // DEVOLVE A RESPOSTA PARA O FRONT END/CLIENT
    const subscribers: Subscriber[] | undefined = await getSubscribers();
    const { message } = request.body;

    const result = await sendNotifications(subscribers, message);
    response.status(200).json(result);
  } catch (error: any) {
    response.status(500).json({error: error.message});
  }
}