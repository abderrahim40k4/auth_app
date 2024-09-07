import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connectDB.js';

import authRoutes from "./routes/auth.route.js"



dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000
app.get("/", (req, res) =>{
    res.send("hello world");
});


app.use("/api/auth", authRoutes);
app.use(express.json());

app.listen(PORT, () =>{
    connectDB();
    console.log("app is raning on port 5000 sucsasfly :)")
})
