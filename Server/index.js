

import express, {Router} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import router from './route/routes.js';

// const express = require('express');
// const mongoose = require('mongoose');
// const morgan = require('morgan')
// const bodyParser = require('body-parser');
//const cors = require('cors');
const app = express();






//app.use(express.json());
//app.use(express.urlencoded({extended:false}))


app.use(bodyParser.json({ extended: true}))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());


// app.use("/", (req, res)=>{
//    res.json("Hi Friends Subscribe");
// })

//Middleware
app.use(morgan("dev"));

//const infoRouter = require("./route/routes");

app.use("/info", router)

//Listen Port
const port = process.env.PORT || 8000;

app.listen(port, ()=>console.log(`Listening on port ${port}..`));

//Mongose Db

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:s8bGrssKfiISYqUh@cluster0.juse5.mongodb.net/EmployeDB?retryWrites=true&w=majority',{
   useNewUrlParser: true,
   useUnifiedTopology:true,
})
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

if(process.env.NODE_ENV === 'production'){
   app.use(express.static('Client/build'));
}


//data schema
// const employSchema ={
//    name:String,
//    dateofbirth:String,
//    gender:String,
//    salary:Number
// };

// //dataModel
// const employ = mongoose.model("employ", employSchema);

// //read route
// app.get("/api/employs", (req, res)=>{
//   employ.find()
//   .then((employs)=>res.json(employs))
//   .catch((err)=> res.status(400).json("error: " + err))
// })

// app.get("/employs", (req, res)=>{
//    const newEmploy = new employ({
      
//    })
// })



























// 
//const connection = require("./db");
// const employees = require("./route/employees");



































//database connection
//const connection_url = 'mongodb+srv://admin:1CtfsZ0a2MQqM1j3k@cluster0.juse5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//connection();

// mongoose.connect ('mongodb+srv://admin:s8bGrssKfiISYqUh@cluster0.juse5.mongodb.net/EmployeDB?retryWrites=true&w=majority')
// // Middle wares
// app.use(express.json());
// app.use(cors());


//module.exports = asyncHandler(async ()=>{

// mongoose.connect('mongodb+srv://admin:1CtfsZ0a2MQqM1j3k@cluster0.juse5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
//         useNewUrlParser: true,
//         useUnifiedTopology:true,
        
//      }).then(() => console.log("Database connected!"))
//      .catch(err => console.log(err));
     

   //  const connection = await mongoose.connect(process.env.DB, connection_url);
   //     connection
   //     ? console.log("connnected to database")
   //    : console.log("could not connect to database!")
   //  })


   

//routes//
// app.use("/api/employees", employees)



//listening on port 
