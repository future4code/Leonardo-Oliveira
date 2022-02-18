import { NextFunction, Request, Response } from "express"
import {  getOneProduct } from "../services/product.service";
import { getOneUser } from "../services/user.service";
import { Purchase } from "../types/purchase.dao";
import { User } from "../types/user.dao";
import { Product } from "../types/product.dao";
import { v4 as uuidv4 } from 'uuid';

import { createPurchase } from "../services/purchase.service";


export const postPurchase = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
  const {user_id, product_id} = req.body as Purchase;
  let { quantity } = req.body as Purchase;

  quantity = Number(quantity);

  const user: User | undefined = await getOneUser(user_id);
  const product: Product | undefined = await getOneProduct(product_id); 

  
  
  if((user && product) && (quantity && quantity !== 0)){
    const id: string = uuidv4();
    const total_price: number = product.price * quantity;

    const purchase: Purchase = {id, user_id, product_id, quantity, total_price };
    await createPurchase(purchase);
    res.status(201).json(purchase);
  }else {
    res.status(400).json({message: 'Some data is not present!'});
  }
  next();
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message);
  }
}

