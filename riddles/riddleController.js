import fs from "fs";

const dbPath = "./riddles/db.txt";

function readDB() {
  const data = fs.readFileSync(dbPath, "utf8");
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

export function getAllRiddles(req, res) {
  res.json(readDB());
}

export function getRiddleById(req, res) {
  const riddles = readDB();
  const riddle = riddles.find(r => r.id == req.params.id);
  res.json(riddle);
}

export function createRiddle(req, res) {
  const { name, taskDescription, correctAnswer } = req.body;
  const riddles = readDB();
  const newRiddle = {id: riddles[riddles.length - 1].id + 1,name, taskDescription,  correctAnswer };
  riddles.push(newRiddle);
  writeDB(riddles);
  res.status(201).json(newRiddle);
}

export function updateRiddle(req, res) {
    const id = Number(req.params.id);
    const riddles = readDB();
  const index = riddles.findIndex(r => r.id === id);

  const { name, taskDescription, correctAnswer } = req.body;
  riddles[index] = {id, name,taskDescription,correctAnswer };
  writeDB(riddles);
  res.json(riddles[index]);
}

export function deleteRiddle(req, res) {
  const riddles = readDB();
  const id = Number(req.params.id);
  const filtered = riddles.filter(r => r.id !== id);
  filtered.forEach((r, i) => r.id = i + 1);
  writeDB(filtered);
  res.sendStatus(204);
}
