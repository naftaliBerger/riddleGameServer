import { connectDB } from "../riddles/db.js";
import { ObjectId } from "mongodb";

export async function getAllriddels() {
  const db = await connectDB();
  return db.collection("riddles").find().toArray();
}

export async function addriddels(report) {
  const db = await connectDB();
  return db.collection("riddles").insertOne(report);
}



export async function updateRiddelById(id, product) {
  const db = await connectDB();
  return db.collection("riddles").updateOne({ _id: new ObjectId(id) },{ $set: product });
}

export async function deleteRiddleById(id) {
  const db = await connectDB();
  return db.collection("riddles").deleteOne({ _id: new ObjectId(id) });
}


// export async function getRiddelById(id) {
//   const db = await connectDB();
//   return db.collection("riddles").findOne({ _id: id });
// }



