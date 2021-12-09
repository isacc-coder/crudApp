
import React, {useEffect, useState} from 'react'
import {Button} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { getUsers } from '../axios';

const useStyles = makeStyles({
    container:{
      width:'50%',
      margin:'10% 0 0 25%',
      '& > *':{
        marginTop:30,
      }
      
    }
  })

 const UserInfo = () => {
     const [info, setInfo] = useState([]);
     //const {info} = useSelector(state => state.data);
     const {id} = useParams();
     const navigate = useNavigate();
     const classes = useStyles();

      
      useEffect(() =>{
        getAllUsers(id);
      },[id])
     console.log("info", id);
     
   const getAllUsers = async(id) =>{
     let res = await getUsers();
     console.log(res.data);
     setInfo({...res.data[0]});
   
   }
     //const singleUser = info.find((infos) => infos.id === Number(id));
     return (
         <div className={classes.container}>
             <h1>User info</h1>
             <strong>ID:</strong>
             <span>{id}</span>
             <br/>
             <br/>

             <strong>Name:</strong>
             <span>{info && info.Name}</span>
             <br/>
             <br/>
             
             <strong>Dateofbirth:</strong>
             <span>{info && info.Dateofbirth}</span>
             <br/>
             <br/>

             <strong>Gender:</strong>
             <span>{info && info.Gender}</span>
             <br/>
             <br/>

             <strong>Salary:</strong> 
             <span>{info && info.Salary}</span>
             <br/>
             <br/>

             <Button onClick={() => navigate("/")} variant="contained" color="error">Goback</Button>
         </div>
     )
 }
 
 export default UserInfo
 
 







// //UserInfo const {users} = useSelector(state => state.data);
// //     const {id} = useParams();
// //     const navigate = useNavigate();
// //     //const singleUser = users.find((item) => item.id === Number(id));


// //      <p className="col-md-12 fs-3">Name:</p>
// //             <p className="col-md-6">{singleUser.name}</p>
// //             <p className="col-md-12 fs-3">Gender:</p>
// //             <p className="col-md-6">{singleUser.gender}</p>
// //             <p className="col-md-12 fs-3">Dateofbirth:</p>
// //             <p className="col-md-6">{singleUser.dateofbirth}</p>
// //             <p className="col-md-12 fs-3">Salary:</p>
// //             <p className="col-md-6">{singleUser.salary}</p> 
        
// // <MDBBtn onClick={() => navigate("/")} variant="contained" size="medium" color="error">
// //         GoBack
// //        </MDBBtn>