import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import LawRoutes from './routes/LawRoutes.js';

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express();


// Apply middleware parse json and apply (req.body) - CORS
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    return res.send("Welcome to server of Laws API")
})

// Routes
app.use("/api/law", LawRoutes)

// Connect db and listen port
connectDB()
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})