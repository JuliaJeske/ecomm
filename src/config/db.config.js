import mongoose from "mongoose";

mongoose.connect("mongodb+srv://juliajeske01:123@ecomm.j6kowwu.mongodb.net/ecomm?");

let db = mongoose.connection;

export default db;