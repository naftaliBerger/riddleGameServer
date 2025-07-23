import express from "express";
import {  getAllRiddles,  createRiddle,  updateRiddle,  deleteRiddle,} from "../controllers/riddleController.js";

import { authMiddleware,requireUser,adminOnly } from "../utils/authMiddleware.js";

const router = express.Router();

router.get("/", getAllRiddles);
router.post("/", authMiddleware, requireUser, createRiddle);
router.put("/:id", authMiddleware,adminOnly, updateRiddle);
router.delete("/:id", authMiddleware,adminOnly, deleteRiddle);

export default router;












// import express from "express";
// import {getAllRiddles,createRiddle, updateRiddle, deleteRiddle} from "../controllers/riddleController.js";

// const router = express.Router();

// router.get("/", getAllRiddles);
// router.post("/", createRiddle);
// router.put("/:id", updateRiddle);
// router.delete("/:id", deleteRiddle);


// export default router;
