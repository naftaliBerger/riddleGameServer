import express from "express";
import {getAllRiddles,createRiddle, updateRiddle, deleteRiddle} from "../controllers/riddleController.js";
  
const router = express.Router();

router.get("/", getAllRiddles);
// router.get("/:id", getRiddleById);
router.post("/", createRiddle);
router.put("/:id", updateRiddle);
router.delete("/:id", deleteRiddle);

export default router;
