import React ,{useState, useEffect}  from 'react'
import {useParams,useNavigate } from "react-router-dom";
import {useDispatch } from 'react-redux';
import {updateUserStart} from '../redux/actions'
import {FormGroup, FormControl ,Button ,  Input, InputLabel, Typography} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import {toast} from "react-toastify";

const initialValues = {
    name:" ",
    dateofbirth:" ",
    gender: "",
    salary:"",
    _id:"",
};
const useStyles = makeStyles({
  container:{
    width:'50%',
    margin:'10% 0 0 25%',
    // '& > *':{
    //   marginTop:30,
    // }
    
  }
})
const EditUser = () => {
  const [info, setInfo] = useState(initialValues);   
  const {name, dateofbirth, gender, salary} = info;
  const classes = useStyles();
  const { id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("id=>", typeof(id));

  useEffect(() =>{
  // if(id){
    
      // const singleUser = users.find((infos)=> infos.id === Number(id));
      // setInfo({...singleUser});
   //}
  }, [id])


  const handleSubmit =(e) =>{
    e.preventDefault();
    if(name && dateofbirth && gender && salary){
         dispatch(updateUserStart(id, info));
          toast.success("User info updated successfully")
         setTimeout(() => navigate("/"), 500);
    }
  }

  const onValueChange = (e) => {
    let {name, value} = e.target
    setInfo({...info, [name]: value});
    
     console.log(info)
     setInfo({value: e.target.value});
     console.log(e.target.value)  
   }
   /*
   
   
  // useEffect(() =>{
  //     loadUserData();

  // },[]);

  // const loadUserData = async() =>{
  //     const res = await getUsers(id);
  //     setInfo(res.data);
  // }

   
    
  
   const editUserDetails = async (info) =>{


     await editUser(id, info);
     toast.success("User info Updated Successfully")
     console.log(info)
     navigate.push("/")
     onClick={()=> editUserDetails()}
   }*/
     
    return (
      
       <FormGroup className={classes.container}>
         <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={ onValueChange} type="text"  value={name} name='name'/>
        </FormControl>
            <br/>
        <FormControl>
          <InputLabel>Dateofbirth</InputLabel>
          <Input onChange={ onValueChange} type="text" value={dateofbirth} name='dateofbirth'/>
        </FormControl>
        <br/>
        <FormControl>
          <InputLabel>Gender</InputLabel>
          <Input  onChange={ onValueChange} type="text" value={gender} name='gender'/>
        </FormControl>
        <br/>
        <FormControl>
          <InputLabel>Salary</InputLabel>
          <Input onChange={ onValueChange}  type="number" value={salary} name='salary'/>
          <br/>
         
        </FormControl>

   <Button variant="contained" color="primary" type="submit" onSubmit={handleSubmit}  >Edit User</Button>
   
   <br/>
   <Button variant="contained" color="error" onClick={() => navigate("/")}  >Go Back</Button>

       </FormGroup>


    

    )
}

export default  EditUser 
