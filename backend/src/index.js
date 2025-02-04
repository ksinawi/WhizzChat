import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import auth_routes from "../src/routes/auth_routes.js";
import messages_routes from "../src/routes/messages_routes.js";

dotenv.config();

const PORT = process.env.PORT;

const app =  express();

app.use(express.json());
app.use(cookieParser())

mongoose.connect(process.env.DATABASE);
const db = mongoose.connection;

db.on("error", (error) => console.error("Database connection error:", error));
db.once("open", () => console.log("Database Connected"));

app.use("/api/auth", auth_routes);
app.use("/api/messages", messages_routes);

app.listen(PORT, () => {
    console.log("Server is running");
});