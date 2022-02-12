import { connection } from "../connection"
import { Product } from "../types/product.dao"

const tableName: string = 'labecommerce_products';

export const createProduct = async (product: Product): Promise<number[]> => {
  try {
    return await connection(tableName).insert(product);
  } catch(e:any) {
    throw new Error(e.message)
  }
}

export const showProducts = async (): Promise<Product[]> => {
  try {
    return await connection.select().from(tableName);
  } catch(e:any) {
    throw new Error(e.message)
  }
}

export const getOneProduct = async (id: string): Promise<Product | undefined> => {
  try {
    return await connection.raw(`SELECT * FROM ${tableName} WHERE id = ${id} LIMIT 1`)
  } catch(e:any) {
    throw new Error(e.message)
  }
}