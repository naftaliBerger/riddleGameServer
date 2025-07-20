import{ MongoClient ,Db} from "mongodb";
import { config } from "dotenv";
config();
const client = new MongoClient(process.env.DB_CONNECTION);
let db;

/**
 * @type {Db | null}
 */
/**
 * @returns {Promise<Db>}
 */

export async function connectDB() {
    if (!db) {    
        await client.connect();
        db = client.db();
        console.log("Connected to the mongoDB");
    }
    return db;
}
connectDB();
export default db;