import express from "express";
import dotenv from "dotenv";

dotenv.config();

import {connectDB} from "./db/db.js";
import authRoutes from "./routes/auth.route.js"
import eventRoutes from "./routes/event.route.js"
import cookieParser from "cookie-parser";
import { protectAuth } from "./middlewares/protectAuth.js";

const PORT = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


app.use('/api/auth',authRoutes)
app.use('/api/events',protectAuth,eventRoutes)




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
