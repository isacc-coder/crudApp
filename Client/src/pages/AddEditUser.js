import React, {useState} from 'react';
import {FormGroup, FormControl ,Button ,  Input, InputLabel, Typography} from '@mui/material';
import { makeStyles } from '@material-ui/styles';
 import { useNavigate} from 'react-router-dom';
 import { useDispatch } from 'react-redux';
 import { createUserStart} from '../redux/actions';
 import {toast} from "react-toastify";



const initialValues = [

{
    name:" ",
    dateofbirth:" ",
    gender: "",
    salary:"",
}
]
const useStyles = makeStyles({
  container:{
    width:'50%',
    margin:'10% 0 0 25%',
    // '& > *':{
    //   marginTop:30,
    // }
    
  }
})
const AddEditUser = () => {
  const [info, setInfo] = useState(initialValues);   
  const {name, dateofbirth, gender, salary} = info;
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit =(e) =>{
    e.preventDefault();
    if(name && dateofbirth && gender && salary){
         dispatch(createUserStart(info));
          toast.success("User info successfully Added")
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
    
  
  //  const addUserDetails = async (info) =>{
  //    if(!name || !dateofbirth || !gender || !salary ){
  //      toast.error("Please Provide value into each Input field");
  //    }else{
  //     await addUser(info);
  //     toast.success("User info successfully Added")
  //    console.log(info)
  //    navigate.push("/")
  
  //    }
     

     
  //  }
     
    return (
      
       <FormGroup className={classes.container}  >
         <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={onValueChange} type="text"  value={name} name='name'/>
        </FormControl>
            <br/>
        <FormControl>
          <InputLabel>Dateofbirth</InputLabel>
          <Input onChange={onValueChange} type="text" value={dateofbirth} name='dateofbirth'/>
        </FormControl>
        <br/>
        <FormControl>
          <InputLabel>Gender</InputLabel>
          <Input  onChange={ onValueChange} type="text" value={gender} name='gender'/>
        </FormControl>
        <br/>
        <FormControl>
          <InputLabel>Salary</InputLabel>
          <Input onChange={ onValueChange} type="number" value={salary} name='salary'/>
          <br/>
         
        </FormControl>

   <Button variant="contained" color="primary" type="submit" onSubmit={handleSubmit}>Add User</Button>
   
   <br/>
   <Button variant="contained" color="error" onClick={() => navigate("/")}  >Go Back</Button>

       </FormGroup>


    

    )
}

export default AddEditUser













/*

const [user, setUser] = useState({
    Name:" ",
    Dateofbirth:" ",
    Gender: "",
    Salary:"",
  });

  const [users, setUsers] = useState([
    {
    Name:"",
    Dateofbirth:"",
    Gender:"",
    Salary:"",
    _id:"",
    },
    

  
  ]);

    const [isPut, setIsPut] = useState(false);
    const [updateUser, setUpatedUser] = useState({
      Name:"",
      Dateofbirth:"",
      Gender:"",
      Salary:"",
      id:"",
    })

  useEffect(() =>{
    fetch("/").then((res)=>{
      if(res.ok){
        return res.json();
      }
    }).then((jsonRes)=> setUsers(jsonRes))
     .catch((err)=> console.log(err));
     
  },[users]);

  // getAll()
  // {
  //   axios.get("http://localhost:8000/info").then(res =>{
  //   console.log(res.data);
  //   this.setUsers({
  //     data:res.data,
     
  //   })
  // })
 
  // }
function handleChange(event){
       const {name, value} = event.target;
       setUser(prevInput => {
         return(
           {
             ...prevInput,
             [name]: value,
           }
         )
       });
       console.log(user)
     }

   function add(event) {
     event.preventDefault();
     const newUser = {
       Name:user.Name,
       Dateofbirth:user.Dateofbirth,
       Gender:user.Gender,
       Salary:user.Salary
     };
        axios.post("http://localhost:8000/info", newUser);
        console.log(newUser)
   }
//    function deleteUser(id) {
//     axios.delete("http://localhost:8000/info/del/:id" + id);
//     alert("itemDeleted");
//     console.log(`Deleted users with id ${id}`);
// }
 function openUpdate(id){
   setIsPut(true);
   setUpatedUser(prevInput =>{
     return {
      ...prevInput,
      id:id,
     }
   })
 }
 function updatedUser(id){
   axios.put("http://localhost:8000/info/update/:id" + id, updateUser);
   alert("item updated");
   console.log(`item with id ${id} update`);
 }
 onClick={()=> addUserDetails()} //onChange={(e) => onValueChange(e)} onChange={handleChange}  name='Salary'
 onClick={add}
    <Button variant="contained" onClick={()=> addUserDetails()} color="error" onClick={() => deleteUser(user._id)}>Delete</Button>
    <br/>
    <Button variant="contained" color="primary" onClick={() => updatedUser(user.id)}>Update</Button>
{users.map(user=>{
     return(
  <div key={user._id}>
     <h1>{user.Dateofbirth}</h1>
     <h1>{user.Gender}</h1>
     <h1>{user.Salary}</h1>
  </div>
  );
})
} */








    // const [editMode, setEditMode] = useState(false);
    // 
    // const {users} = useSelector(state =>  state.data);
    // const {name, dateofbirth, gender, salary} = formValue;
    
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const {id} = useParams();
    // console.log("id=>", typeof(id));
    

    // useEffect(() => {
    //   if(id) {
    //      setEditMode(true)
    //      const singleuser = users.find((item)=> item.id === Number(id));
    //      setFormValue({...singleuser});
    //   }else {
    //     setEditMode(false);
    //     setFormValue({...initialState});
    //   }
    // }, [id])

    // const handleSubmit = (e) => {
    //       e.preventDefault();
    //       if(name && dateofbirth && gender && salary ){
    //         if(!editMode){
           
    //         dispatch(createUserStart(formValue));
    //        toast.success("user Added Sucessfully");
    //        setTimeout(() => navigate('/'), 500);
    //         }else {
    //           dispatch(updateUserStart({id, formValue}));
    //           setEditMode(false);
    //           toast.success("user Updated Sucessfully");
    //           setTimeout(() => navigate('/'), 500);
    //         }
          
    //       }
    // };
    // const onInputChange = (e) => {
    //     let { name, value } = e.target;
    //     setFormValue({...formValue, [name]: value});

    // };
    // const onValueChange = (e) => {
    //   console.log(e.target.value)
    //   setFormValue({...formValue, [e.target.name]: e.target.value});
    //   console.log(formValue)

    // }
    // const addUserDetails = async () => {
    //   await AddEditUserx(formValue);
    // }
   









































//   <MDBValidation
    //   className="row g-3"
    //   style={{marginTop:"100px"}}
    //   noValidate
    //   onSubmit={{handleSubmit}}
    //   >

    
    //   <div style={{ margin:"auto", padding:"25px", maxWidth:"400px", alignContent:"center",}}>
    //   <p>{!editMode ? "AddEditUser" : "Update User Detail"}</p>
    //   <MDBInput
    //   value={name || ""}
    //   name="Name"
    //   type="text"
    //   onChange={onInputChange}
    //   required
    //   label="Name"
    //   validation="please Provide a Name"
    //   invalid
    //   />
    // <br/>
    //     <MDBBtn variant="contained" size="medium" type="submit" style={{marginRight:"10px"}}>
    //       {!editMode ? "Add" : "Update"}
    //     </MDBBtn>
     
    //     <MDBBtn onClick={() => navigate("/")} variant="contained" size="medium" color="error">
    //      GoBack
    //     </MDBBtn>
    //     </div>
    //     </MDBValidation> 
    