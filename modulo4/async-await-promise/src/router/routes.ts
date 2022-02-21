import express from 'express';
import { postNews } from '../controller/news.controller';
import { getAllSubscribers } from '../controller/subscriber.controller';


const router = express.Router(); 

// a. Qual endpoint você deve utilizar para isso?
// O metdo GET subscribers
// b. Promise<any[]>
// c. export default router;export function async getAllSubscribers (request: Request, response: Response): Promise<any>{

//2.a
router.get('/subscribers', getAllSubscribers);

router.post('/news', postNews);


export default router;