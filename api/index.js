const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
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