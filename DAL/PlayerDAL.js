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
// DAL function to update an existing player by ID in the "Player" table
export async function updatePlayerById(id, playerData) {
    return await Supabase.from("players").update(playerData).eq("id", id).select().single();     
}
//--------------------------------------------
export async function getUserByUsername(username) {
  const { data, error } = await Supabase.from("players").select("*").eq("username", username).single();
  return { data, error };
}
//--------------------------------------------
export async function checkPassword(plainPassword, hashedPassword) {
  return await bcrypt.compare(plainPassword, hashedPassword);
}
//--------------------------------------------
export async function updatePlayerByUsername(username, updateFields) {
  try {
    const { data, error } = await Supabase.from("players").update(updateFields).eq("username", username).select();
    return { data, error };
  } catch (error) {
    return { data: null, error };
  }
}
