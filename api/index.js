import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("connected to mongodb database!")
})
.catch(() => {
    console.log(err);
});

const app = express();

app.listen(5000, ()=> {
    console.log("server is running on port 3000!");
})

app.use('/api/user', router);