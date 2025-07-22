import { getAllPlayers, insertPlayer, updatePlayerById } from "../DAL/PlayerDAL.js";

//--------------------------------------------
// Controller to fetch all players from the database
export async function getPlayers(req, res) {
    const { data, error } = await getAllPlayers();
    if (error) {
        return res.status(500).json({ error: "failed to get players" });
    }
    res.json(data);
}

//--------------------------------------------
// Controller to create a new player and save to the database
export async function createPlayer(req, res) {
    const { data, error } = await insertPlayer(req.body);
    if (error) {
        return res.status(500).json({ error: "failed to add player" });
    }
    res.status(201).json({ message: "player added successfully"});
}

//--------------------------------------------
// Controller to update an existing player's data by ID
export async function updatePlayer(req, res) {
    const id = req.params.id;
    const { data, error } = await updatePlayerById(id, req.body);
    if (error) {
        return res.status(500).json({ error: "failed to update player" });
    }
    res.json({ message: "player updated successfully"});
}
