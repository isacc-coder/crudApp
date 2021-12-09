// import express from  'express';
// import mongoose from 'mongoose';
// import Cors from 'cors';
// //import Cards from './dbCards.js';
// //import route from './route/routes.js';
// import bodyParser from 'body-parser';
// //import user from './dbCards.js'
// //import user from './dbCards.js'
// //App config

// const app = express();
// //const UserModel = require("./dbCards");
// const UserModel =("./dbCards");
// const port = process.env.PORT || 8001;
// const connection_url = 'mongodb+srv://admin:41g0vNnetc0w6v8H@cluster0.juse5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

// //Muddkewares
// app.use(express.json({ extended: true}));
// app.use(bodyParser.urlencoded({ extended: true}))
// app.use(Cors());

// //DB config
// mongoose.connect(connection_url,{
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
    
// })
//  .then(() => app.listen(port, () => console.log(`server running on port:${port}`)))
//  .catch((error)=> console.log(error.message));

// //API Endpoints

// app.get("/", async (req, res) => {
//     const user = new UserModel({ name:"Love", dateofbirth:"24/3/1990", gender:"Female", salary:3000 });
//     try{
//         await user.save();
//     }catch (err){
//         console.log(err);
//     }
// });
// //app.use('/users', route);

// app.post("/one/card", (req, res)=>{
//     const dbCard = req.body;

// Cards.create(dbCard,(err, data)=> {
//     if(err) {
//         res.status(500).send(err);
        
//     }else{
//         res.status(201).send(data);
//     }
// });
// });
// app.get("/one/card", (req,res)=>{
//     Cards.find((err, data)=> {
//         if(err) {
//             res.status(500).send(err);
            
//         }else{
//             res.status(200).send(data);
//         }
//     })  
// })
// //Listnere
// //app.listen(port, () => console.log(`Listening on localhos
