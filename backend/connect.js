const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const port =process.env.PORT || 5001;

const uri = process.env.DB_CONNECT;
mongoose.connect(uri,{ useUnifiedTopology: true ,useCreateIndex: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('connected to db');
});


app.get('/',(req,res)=>{
    res.send('we are on high');
});

//connect routers
const userRouter = require("./routes/users");
const exerRouter = require("./routes/exercises");
app.use('/exercises',exerRouter);
app.use('/users',userRouter);


app.listen(port,(err)=>{
    if(err) throw err;
    console.log('listening to '+ port)});

