import Supabase from "../DB/supabaseDB.js";

//--------------------------------------------
// DAL function to fetch all players from the "Player" table
export async function getAllPlayers() {
    return await Supabase.from("Player").select("*");
}

//--------------------------------------------
// DAL function to insert a new player into the "Player" table
export async function insertPlayer(playerData) {
    return await Supabase.from("Player").insert([playerData]);
}

//--------------------------------------------
// DAL function to update an existing player by ID in the "Player" table
export async function updatePlayerById(id, playerData) {
    return await Supabase.from("Player").update(playerData).eq("id", id);
}
