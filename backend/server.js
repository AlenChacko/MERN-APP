import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import { connectDatabase } from "./database/db.js";

dotenv.config();
connectDatabase()

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

const server = () => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};

server();
