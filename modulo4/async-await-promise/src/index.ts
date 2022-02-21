import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import router from "./router/routes";

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(router);


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
});