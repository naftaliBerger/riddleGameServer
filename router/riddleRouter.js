import express from "express";
import {  getAllRiddles,  createRiddle,  updateRiddle,  deleteRiddle,} from "../controllers/riddleController.js";

import { authMiddleware } from "../utils/authMiddleware.js"; // 🟢 בודק טוקן

const router = express.Router();

router.get("/", getAllRiddles);
router.post("/", authMiddleware, createRiddle); // 🟢 דרוש משתמש
router.put("/:id", authMiddleware, updateRiddle); // 🟢 דרוש אדמין
router.delete("/:id", authMiddleware, deleteRiddle); // 🟢 דרוש אדמין

export default router;












// import express from "express";
// import {getAllRiddles,createRiddle, updateRiddle, deleteRiddle} from "../controllers/riddleController.js";

// const router = express.Router();

// router.get("/", getAllRiddles);
// router.post("/", createRiddle);
// router.put("/:id", updateRiddle);
// router.delete("/:id", deleteRiddle);


// export default router;
