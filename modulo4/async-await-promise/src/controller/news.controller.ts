import axios from "axios"
import { Request, Response } from "express"
import { baseUrl } from "../constants/baseUrl"
import { News } from "../types/news.type";



const createNews = async(news: News): Promise<News | undefined> => {
  try {
    const newsData: News =  (await axios.put(`${baseUrl}/subscriber`, news)).data;
    return newsData;
  } catch (error) {
    
  }
}

export const postNews = async (request: Request, response: Response): Promise<void> => {
  try {
    // DEVOLVE A RESPOSTA PARA O FRONT END/CLIENT
    const {title, content} = request.body as News;
    const date: string = (Date.now()).toString();
    const newsRequest: News = {title, content, date};

    const news: Promise<News | undefined> = createNews(newsRequest);
    response.status(200).json(news);
  } catch (error: any) {
    
  }
}
