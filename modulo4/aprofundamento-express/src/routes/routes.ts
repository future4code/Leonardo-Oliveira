import express, {Request, Response, NextFunction} from 'express';

const routes = express.Router();

routes.get('/ping', async (_: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    response.send("pong");
    next();
  } catch (error) {
    const result = (error as Error).message;
    console.log(result);
    response.sendStatus(500) && next(result);
  }
})



export default routes;