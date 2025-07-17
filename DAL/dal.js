import fs from "fs";

const dbPath = "./riddles/db.txt";

export function readDB() {
  const data = fs.readFileSync(dbPath, "utf8");
  return JSON.parse(data);
}

export function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}