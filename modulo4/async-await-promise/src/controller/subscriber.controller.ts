import axios from "axios"
import { Request, Response } from "express"
import { baseUrl } from "../constants/baseUrl"
import { Subscriber } from "../types/subscriber.type"


export const getSubscribers = async(): Promise<Subscriber[] | undefined> => {
  try {
    // FAZENDO CONSULTA NO BANCO/API EXTERNA
    const subscribers: Subscriber[] | undefined = (await axios.get(`${baseUrl}/subscribers`)).data;
    return subscribers;
  } catch (error) {
    
  }
}

export const getAllSubscribers = async (_: Request, response: Response): Promise<void> => {
  try {
    // DEVOLVE A RESPOSTA PARA O FRONT END/CLIENT
    const subscribers: Promise<Subscriber[] | undefined> =  getSubscribers();
    response.status(200).json(subscribers);
  } catch (error: any) {
    
  }
}

