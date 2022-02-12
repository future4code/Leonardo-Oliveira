import { connection } from "../connection"
import { Purchase } from "../types/purchase.dao"

const tableName: string = 'labecommerce_purchases';

export const createPurchase = async (purchase: Purchase): Promise<number[]> => {
  try {
    return await connection(tableName).insert(purchase);
  } catch(e:any) {
    throw new Error(e.message)
  }
}
