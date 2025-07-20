import { getAllPlayers, insertPlayer } from "../DAL/PlayerDAL.js";
//--------------------------------------------
export async function getPlayers(req, res) {
    const { data, error } = await getAllPlayers();
    if (error) {
        return res.status(500).json({ error: "failed to get players" });
    }
    res.json(data);
}
//--------------------------------------------
export async function createPlayer(req, res) {
    const { data, error } = await insertPlayer(req.body);
    if (error) {
        return res.status(500).json({ error: "failed to add player" });
    }
    res.status(201).json({ message: "player added successfully"});
}
