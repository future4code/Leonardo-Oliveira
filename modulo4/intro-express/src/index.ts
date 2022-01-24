import express from "express";
import { Server } from "http";
import bodyParser from 'body-parser';
import { AddressInfo } from "net";
import router from "./routes/routers";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api', router);

const server: Server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;