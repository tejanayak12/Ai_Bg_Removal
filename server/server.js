import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js';


// app config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();


// middelwares
app.use(express.json());
app.use(cors())



// api routes
app.get('/', (req, res) => res.send("API Working..."));

app.listen(PORT, () => console.log("Server Running On Port" + PORT))