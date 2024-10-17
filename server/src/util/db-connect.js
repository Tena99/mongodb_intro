import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DB_URL = process.env.DB_URL;
console.log(DB_URL);

const db = mongoose.connect(`${DB_URL}note-taking-app`);

export default db;
