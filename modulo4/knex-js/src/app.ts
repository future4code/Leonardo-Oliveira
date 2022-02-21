import express from 'express';
import  router  from './routes/router';
import cors from 'cors';

export class App {
  public server: express.Application;

  private middleware(){
    this.server.use(express.json());
    this.server.use(cors())
  }

  public router(){
    this.server.use(router);
  }

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
  }


}