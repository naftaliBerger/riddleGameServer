import express from "express";
import riddleRouter from "./router/riddleRouter.js";

const app = express();
app.use(express.json());

app.use("/riddles", riddleRouter);
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log("Riddle server running at 3005");
});
