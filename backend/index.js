import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

import connectDatabase from "./db/mongodb.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();
connectDatabase()

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());
app.use('/api/auth',authRoute)

const server = () => {
  app.listen(port, () => {
    console.log(`Server started running on port ${port}`);
  });
};

server();
