import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import router from "./routes/router";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());


import { Request, Response } from "express"
import { Actor } from "./types/actor";

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<Actor> => {
  const result: any = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

  const actor: Actor =  result[0][0];
  return actor;

	
}

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.end()
  } catch (error:any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal



const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
});