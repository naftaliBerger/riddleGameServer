import { connectDB } from "../DB/mongodb.js";
import { ObjectId } from "mongodb";

//--------------------------------------------
// DAL function to retrieve all riddles from the MongoDB "riddles" collection
export async function getAllriddels() {
  const db = await connectDB();
  return db.collection("riddles").find().toArray();
}

//--------------------------------------------
// DAL function to insert a new riddle into the "riddles" collection
export async function addriddels(report) {
  const db = await connectDB();
  return db.collection("riddles").insertOne(report);
}

//--------------------------------------------
// DAL function to update a specific riddle by its ID
export async function updateRiddelById(id, product) {
  const db = await connectDB();
  return db.collection("riddles").updateOne({ _id: new ObjectId(id) }, { $set: product });
}

//--------------------------------------------
// DAL function to delete a riddle by its ID from the "riddles" collection
export async function deleteRiddleById(id) {
  const db = await connectDB();
  return db.collection("riddles").deleteOne({ _id: new ObjectId(id) });
}
