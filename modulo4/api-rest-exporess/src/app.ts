import express from 'express';
import  router  from './routes/router';

export class App {
  public server: express.Application;

  private middleware(){
    this.server.use(express.json());
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