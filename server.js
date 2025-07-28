import express from "express";

import riddleRouter from "./router/riddleRouter.js";
import playersRouter from "./router/playersRouter.js";
// import cookieParser from "cookie-parser";
import { config } from "dotenv";
config(); 

const app = express();


app.use(express.json());
// app.use(cookieParser());
app.use("/riddles", riddleRouter);
app.use("/players", playersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Riddle server running at ${PORT}`);
});


