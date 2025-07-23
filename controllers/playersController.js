import {  getAllPlayers,  insertPlayer,  updatePlayerById,  getUserByUsername,  checkPassword} from "../DAL/PlayerDAL.js";

import bcrypt from "bcrypt"; // 🟢 להצפנת סיסמה
import jwt from "jsonwebtoken"; // 🟢 יצירת טוקן

export async function getPlayers(req, res) {
  const { data, error } = await getAllPlayers();
  if (error) return res.status(500).json({ error: "failed to get players" });
  res.json(data);
}

// 🟢 רישום משתמש חדש
export async function register(req, res) {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "username and password required" });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const { error } = await insertPlayer({
      username,
      password: hashedPassword,
      role: "user",
    });

    if (error) {
      console.error("❌ Supabase Insert Error:", error); // ✅ כאן תראה את השגיאה האמיתית
      return res.status(500).json({ error: "failed to register user" });
    }

    res.status(201).json({ message: "user registered" });
  } catch (e) {
    console.error("❌ General Error:", e); // ✅ אם יש שגיאה כללית
    res.status(500).json({ error: "failed to register user" });
  }
}


// 🟢 התחברות
export async function login(req, res) {
  const { username, password } = req.body;
  const { data: user, error } = await getUserByUsername(username);
  if (error || !user) return res.status(403).json({ error: "User not found" });

  const match = await checkPassword(password, user.password);
  if (!match) return res.status(403).json({ error: "Wrong password" });

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.json({ token });
}

export async function updatePlayer(req, res) {
  const id = req.params.id;
  const { data, error } = await updatePlayerById(id, req.body);
  if (error) return res.status(500).json({ error: "failed to update player" });
  res.json({ message: "player updated successfully" });
}





















// import { getAllPlayers, insertPlayer, updatePlayerById } from "../DAL/PlayerDAL.js";

// //--------------------------------------------
// // Controller to fetch all players from the database
// export async function getPlayers(req, res) {
//     const { data, error } = await getAllPlayers();
//     if (error) {
//         return res.status(500).json({ error: "failed to get players" });
//     }
//     res.json(data);
// }

// //--------------------------------------------
// // Controller to create a new player and save to the database
// export async function createPlayer(req, res) {
//     const { data, error } = await insertPlayer(req.body);
//     if (error) {
//         return res.status(500).json({ error: "failed to add player" });
//     }
//     res.status(201).json({ message: "player added successfully"});
// }

// //--------------------------------------------
// // Controller to update an existing player's data by ID
// export async function updatePlayer(req, res) {
//     const id = req.params.id;
//     const { data, error } = await updatePlayerById(id, req.body);
//     if (error) {
//         return res.status(500).json({ error: "failed to update player" });
//     }
//     res.json({ message: "player updated successfully"});
// }
