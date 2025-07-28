import Supabase from "../DB/supabaseDB.js";
import bcrypt from "bcrypt";

//--------------------------------------------
// DAL function to fetch all players from the "Player" table
export async function getAllPlayers() {
    return await Supabase.from("players").select("*");
}

//--------------------------------------------
// DAL function to insert a new player into the "Player" table
export async function insertPlayer(playerData) {
    return await Supabase.from("players").insert([playerData]);
}

//--------------------------------------------

export async function updatePlayerById(id, playerData) {
    return await Supabase.from("players").update(playerData).eq("id", id);     
}
//--------------------------------------------
export async function getUserByUsername(username) {
  const { data, error } = await Supabase.from("players").select("*").eq("username", username);
  return { data, error };
}
//--------------------------------------------
export async function checkPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
//--------------------------------------------
export async function updatePlayerByUsername(username, updateFields) {
  try {
    const { data, error } = await Supabase.from("players").update(updateFields).eq("username", username);
    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
}
