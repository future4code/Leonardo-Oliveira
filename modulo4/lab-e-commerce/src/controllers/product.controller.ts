import { NextFunction, Request, Response } from "express"
import { createProduct, showProducts } from "../services/product.service"
import { Product} from "../types/product.dao"
import { v4 as uuidv4 } from 'uuid';


export const postProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  try {
  const {name, image_url} = req.body as Product;
  let { price } = req.body as Product;

  price = Number(price);


  if((name && image_url && price) && (name && image_url && price) !== ""){
    const id: string = uuidv4();
    const product: Product = {id, name, price, image_url };
    await createProduct(product);
    res.status(201).json(product);
  }else {
    res.status(400).json({message: 'Some data is not present!'});
  }
  next();
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message);
  }
}


export const getAllProducts = async (_: Request, res: Response, next: NextFunction): Promise<void> => {

  try {

    const products: Product[] = await showProducts();
    res.status(200).json(products);

  next();
}catch(e: any) {
    console.log(e.message)
    res.status(500) && next(e.message)
  }
}