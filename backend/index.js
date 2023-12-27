import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

const server = () => {
  app.listen(port, () => {
    console.log(`Server started running on port ${port}`);
  });
};

server();
