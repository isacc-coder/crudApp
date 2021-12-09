
import express from 'express';
import {getUsers,addUser,getuserById, editUser, deleteUser} from '../controller/user-contorller.js';

const router = express.Router();

   router.get("/", getUsers);
   router.post("/addUser", addUser);
   router.get('/:id', getuserById);
   router.put('/:id', editUser);
   router.delete('/:id', deleteUser);





















   export default router;


//create
// router.post("/", async(req, res)=>{
    
//     var data = new infoRouter({
//         Name:req.body.Name,
//         Dateofbirth:req.body.Dateofbirth,
//         Gender:req.body.Gender,
//         Salary:req.body.Salary

//     });
//     await data.save();
//     res.json(data);
// })

//getAll
// router.get("/", async (req, res)=>{
//     var findData = await infoRouter.find();
//     res.json(findData);
// })

//Update
// router.put("/update/:id", async(req,res)=>{
//     var update = await infoRouter.updateMany(
//         {_id:req.body._id},
//         {$set:{
//         Name:req.body.Name,
//         Dateofbirth:req.body.Dateofbirth,
//         Gender:req.body.Gender,
//         Salary:req.body.Salary      
//     }});
//     res.json(update);
//})
// router.put("/update/:id", (req, res)=>{
//     const updateUser = {
//         Name:req.body.Name,
//         Dateofbirth:req.body.Dateofbirth,
//         Gender:req.body.Gender,
//         Salary:req.body.Salary 
//     };
//     infoRouter.updateMany(
//         {_id:req.body._id},
//         {$set:updateUser},
//         (req, res, err)=>{
//             if(!err){
//                 console.log("user Updated");
//             }else{
//                 console.log(err);
//             }
//         }
//     )
// })

//Delete
// router.delete("/del/:id", async(req, res)=>{
//     var delData = await infoRouter.findByIdAndRemove(req.params.id).then(e =>{
//         res.json({message:"Deleted SuccessFully "});
//     })
// })



// router.get("/", (req, res)=>{
//     res.json("I am from router file")
// })
 




















// route.get("/",getUsers);
// route.post('/addUser',AddEditUserx)
// export default route;