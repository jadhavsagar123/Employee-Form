import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import Routes from './server/route.js';
import mongoose from 'mongoose';
const app = express();


dotenv.config();
const path =process.env.MONGO_URL

mongoose.connect(path).then(data=>{
    console.log("Mongodb connected")
}).catch(err=>{
    console.log(err);
})


app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);


const PORT = process.env.PORT||'8080';

 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));