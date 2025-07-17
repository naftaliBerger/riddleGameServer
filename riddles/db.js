import{ MongoClient } from "mongodb";
import { config } from "dotenv";
config();
const client = new MongoClient(process.env.DB_CONNECTION);
let db;

export async function connectDB() {
    if (!db) {    
        await client.connect();
        db = client.db();
        console.log("Connected to the database");
    }
    return db;
}
connectDB();
export default db;