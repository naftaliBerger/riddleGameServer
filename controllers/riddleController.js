import {  getAllriddels, addriddels, updateRiddelById,deleteRiddleById,} from "../DAL/riddlesDAL.js";

export async function getAllRiddles(req, res) {
  try {
    const riddels = await getAllriddels();
    res.json(riddels);
  } catch {
    res.status(500).json({ error: "Failed to get riddles" });
  }
}
//--------------------------------------------
export async function createRiddle(req, res) {
  if (!req.user) return res.status(403).json({ error: "Login required" }); 
  try {
    const result = await addriddels(req.body);
    res.json(result);
  } catch {
    res.status(500).json({ error: "Failed to add riddle" });
  }
}

export async function updateRiddle(req, res) {
  if (req.user?.role !== "admin") return res.status(403).json({ error: "Admin only" }); 
  try {
    const result = await updateRiddelById(req.params.id, req.body);
    res.json(result);
  } catch {
    res.status(500).json({ error: "Failed to update riddle" });
  }
}

export async function deleteRiddle(req, res) {
  if (req.user?.role !== "admin") return res.status(403).json({ error: "Admin only" });
  try {
    const result = await deleteRiddleById(req.params.id);
    res.json(result);
  } catch {
    res.status(500).json({ error: "Failed to delete riddle" });
  }
}








// import { getAllriddels, addriddels, updateRiddelById, deleteRiddleById } from "../DAL/riddlesDAL.js";

// //--------------------------------------------
// // Controller to get all riddles from the database
// export async function getAllRiddles(req, res) {
//   try {
//     const riddels = await getAllriddels();
//     res.json(riddels);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to get products" });
//   }
// }

// //--------------------------------------------
// // Controller to create a new riddle in the database
// export async function createRiddle(req, res) {
//   try {
//     const result = await addriddels(req.body);
//     // console.log(req.body);
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to add product" });
//   }
// }

// //--------------------------------------------
// // Controller to update an existing riddle by ID
// export async function updateRiddle(req, res) {
//   try {
//     const id = req.params.id;
//     const result = await updateRiddelById(id, req.body);
//     res.json(result);
//   } catch {
//     res.status(500).json({ error: "Failed to update riddle" });
//   }
// }

// //--------------------------------------------
// // Controller to delete a riddle by ID from the database
// export async function deleteRiddle(req, res) {
//   try {
//     const id = req.params.id;
//     const result = await deleteRiddleById(id);
//     res.json(result);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete riddle" });
//   }
// }
