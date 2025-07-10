import express from "express";
import riddleRouter from "./riddles/riddleRouter.js";

const app = express();
app.use(express.json());

app.use("/riddles", riddleRouter);

app.listen(3005, () => {
  console.log("Riddle server running at 3005");
});
