import Supabase from "../DB/supabaseDB.js";
//--------------------------------------------
export async function getAllPlayers() {
    return await Supabase.from("Player").select("*");
}
//--------------------------------------------
export async function insertPlayer(playerData) {
    return await Supabase.from("Player").insert([playerData]);
}
