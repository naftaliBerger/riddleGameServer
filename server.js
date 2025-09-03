import express from "express";
import cors from "cors";
import riddleRouter from "./router/riddleRouter.js";
import playersRouter from "./router/playersRouter.js";
// import cookieParser from "cookie-parser";
import { config } from "dotenv";
config(); 

const app = express();

app.use(cors());
app.use(express.json());
// app.use(cookieParser());
app.use("/riddles", riddleRouter);
app.use("/players", playersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Riddle server running at ${PORT}`);
});


