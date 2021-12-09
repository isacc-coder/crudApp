


import Info from '../models/infoSchema.js'

export const getUsers = async (req,res)=>{
  try {
   let info =  await Info.find();
   res.json(info);
   } catch (error) {
     res.json({message:message});
   }
}

export const addUser = async (req, res) =>{

  const info = req.body;
  const newInfo = new Info(info);

  try {
   await newInfo.save();
  } catch (error) {
    res.json({message:message});
  }
}


export const getuserById = async (req, res)=>{
   const id = req.params.id;
  try {
    const info = await Info.findById(id);
    res.json(info);
  } catch (error) {
    res.json({message: error.message})
    
  } 

}
export const editUser = async (request, response) =>{
  const info = request.body;
  const editUser = new Info(info);
  try {
    await Info.updateOne({_id: request.params.id}, editUser);
    res.json(editUser);
  } catch (error) {
    res.json({message: error.message})
    
  }
}


export const deleteUser = async (req, res)=>{
  try {
    await Info.deleteOne({_id:req.params.id});
    res.json("user Deleted Sucessfully");
  } catch (error) {
    res.json({message: error.message});
  }
}















// const {infoRouter} = require("../models/infoSchema");

// module.exports = getUsers =>{
//   getUsers.get(" ",(req, res)=>{ 
//     res.status(200).json("hi from isacc");
//     res.send({message:"hi monog"})
//   }); 
// }  


// module.exports = (getUsers) = async (req, res) =>{
  
 
//    try {
//    const info = await infoRouter.find();
//       res.send(info);
//     } catch (error) {
//       res.json({message: error.message});
//     }
// }

// module.exports = (addUser) = async (req, res)=>{
  
// const infoRouter = req.body;
// const newInfo = new infoRouter(infoRouter)

//   try {
//   await newInfo.save();
//     res.json(newInfo);
//   } catch (error) {
//     res.json({message: error.message});
//   }
   
// }

// module.exports = (getUserById) = async (req, res) =>{
//  const id = req.params.id;
//  try {
//    const Info= await infoRouter.findById(id);
//    res.json(Info);
//  } catch (error) {
//    res.json({message: error.message})
//  }
// }

// module.exports = (editUser) = async (req, res)=>{
//   const infoRouter = req.body;
// const editInfo = new infoRouter(infoRouter);
  
//   try {
//    await infoRouter.updateOne({_id: req.params.id}, editInfo);
//    res.json(editInfo);
//   } catch (error) {
//    res.json({message:error.message}) 
//   }
//   res.status(200).send("updated sucessfully")
// } 

// module.exports = (deleteUser) = async (req, res) =>{
//   try {
//     await infoRouter.deleteOne({_id: req.params.id});
//     res.json("User Deleted Sucessfully");
//   } catch (error) {
//     res.json({message:error.message});
//   }
// }









//module.exports = (getUsers) = async (req, res) =>{
 // res.status(200).json("Hi from code interview")
  //  res.status(200).json("HELLO cleaver programmers");
  // console.log("hellow");
  //res.send("code for interview 1234")
    // try {
    //     let user = await user.find()
    //     res.json(user);
    // } catch (error) {
    //     res.json({ message:error.message});
        
    // }
//} 


//module.exports = (addUser) = (req, res)=>{
  //  const user = req.body;
  //  const newUser = new user(user);

  //  try {
  //    await newUser.save();
  //    res.json(newUser);
  //  } catch (error) {
  //      res.json({ message:error.message});
       
  //  }
//}




// export const AddEditUserx = async (req, res) =>{
    
//    const user = req.body;
//    const newUser = new User(user);
   
//    try{
//      await  newUser.save();
//      res.json(newUser);
//    }catch(error){
//        res.json({message: error.message});
//    }
 //module.exports = getUsers;