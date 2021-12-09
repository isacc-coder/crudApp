
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
 import { loadUsersStart,deleteUserStart } from '../redux/actions';
 import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses }  from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from '@material-ui/styles';
 import VisibilityIcon from '@mui/icons-material/Visibility';
 import { toast } from 'react-toastify';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 24,
    },
  }));

 const useStyle = makeStyles({
   table:{
     width:'90%',
     margin:'50px 0 0 50px'
   },
   thead:{
     '& > *':{
       backgroundColor:'00000',
       color:'#fffff',
       fontSize:20
     }
   },
   row:{
     '& > *':{
       fontSize:20
     } 
   }
 })
//  const initialValues = {
//   Name:" ",
//   Dateofbirth:" ",
//   Gender: "",
//   Salary:"",
//   _id:"",
// };



const Home = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.data);

  useEffect(()=>{
    dispatch(loadUsersStart());
  });

// if(loading){
//   return (
//     <CircularProgress color="success"  direction="center"/>   
//   )
// }



/*Orginal Code............
   const [info, setInfo] = useState([]);

//    useEffect(() =>{
//      getAllUsers();
//    },[])
  
  
// const getAllUsers = async() =>{
//   let res = await getUsers();
//   console.log(res.data);
//   setInfo(res.data)

// }*/
const deleteUserData =(id) =>{
  if(window.confirm("Are you sure that want to delete that user")){
     dispatch(deleteUserStart(id))
  }
  toast.success("Users Delete successfully ");
 // await deleteUser(id);
  //loadUsersStart()
 // getAllUsers();
}


    return (
   <Table className={classes.table}>
    <TableHead>
      <TableRow >
        <StyledTableCell >ID</StyledTableCell>
        <StyledTableCell>Name</StyledTableCell>
        <StyledTableCell>Dateofbirth</StyledTableCell>
        <StyledTableCell>Gender</StyledTableCell>
        <StyledTableCell>Salary</StyledTableCell>
        <StyledTableCell>Actions</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>

      
      
      
   
       {users && users.map((infos) => (


        
            <TableRow calssName={classes.row}>
              <TableCell key={infos._id}>{infos._id}</TableCell>
              <TableCell>{infos.Name}</TableCell>
              <TableCell>{infos.Dateofbirth}</TableCell>
              <TableCell>{infos.Gender}</TableCell>
              <TableCell>{infos.Salary}</TableCell>
              <TableCell>
              <IconButton color="error" aria-label="delete" size="small">
              <DeleteIcon  fontSize="small" onClick={() => deleteUserData(infos._id)} />
              </IconButton>
              <Link href={`/editUser/${infos.id}`}>
              <IconButton color="primary" aria-label="pen" size="small">
                <EditIcon  fontSize="small" to={`/editUser/${infos._id}`}/>
              </IconButton>
              </Link>
               {" "}
               <Link href={`/userInfo/${infos._id}`}>
              <IconButton color="primary" aria-label="view" size="small">
             <VisibilityIcon  fontSize="small" to={`/userInfo/${infos._id}`}/>
              </IconButton>
               </Link>

              </TableCell>
            </TableRow>
       ))
        //)
      //)
      } 
    </TableBody>

   </Table>
    
      
    )
}

export default Home



/*

const [users, setUsers] = useState([
    {
    Name:"",
    Dateofbirth:"",
    Gender:"",
    Salary:"",
    _id:"",
    },

  
  ]);


  useEffect(() =>{
    fetch("/info").then((res)=>{
      if(res.ok){
        return res.json();
      }
    }).then((jsonRes)=> setUsers(jsonRes))
     .catch((err)=> console.log(err));
  },[users]);

   function deleteUser(id) {
     axios.delete("/del/:id" + id);
     alert("itemDeleted");
     console.log(`Deleted users with id ${id}`);
}

onClick={() => deleteUser(user._id)}














*/
















  //   <TableContainer component={Paper}>
        
      //   <Table sx={{ minWidth: 700 }} aria-label="customized table">
      // <TableHead>
      //   <TableRow>
      //     <StyledTableCell>NO</StyledTableCell>
      //     <StyledTableCell align="right">Name</StyledTableCell>
      //     <StyledTableCell align="right">Dateofbirth</StyledTableCell>
      //     <StyledTableCell align="right">Gender</StyledTableCell>
      //     <StyledTableCell align="right">Salary</StyledTableCell>
      //     <StyledTableCell align="right">Action</StyledTableCell>
      //   </TableRow>
      // </TableHead>
      //     <TableBody>
      //     {users && users.map((item, index) => (
      //       <TableRow key={index}>
      //         <TableCell scope="row">{index + 1}</TableCell>
      //         <TableCell align="right">{item.name}</TableCell>
      //         <TableCell align="right">{item.Dateofbirth}</TableCell>
      //         <TableCell align="right">{item.gender}</TableCell>
      //         <TableCell align="right">{item.salary}</TableCell>
      //         <TableCell align="right">
                 
      //         <IconButton color="error" aria-label="delete" size="small">
      //          <DeleteIcon onClick={() => handleDelete(item.id)} fontSize="small" />
      //         </IconButton>

      //        <Link href={`/editUser/${item.id}`} >
      //         <IconButton color="primary" aria-label="pen" size="small">
      //           <EditIcon href="/editUser" fontSize="small"/>
      //         </IconButton>
      //        </Link>{" "}
               
      //          <Link href={`/userInfo/${item.id}`} > 
      //         <IconButton color="primary" aria-label="view" size="small">
      //        <VisibilityIcon  fontSize="small"/>
      //        </IconButton>
      //         </Link>

      //         </TableCell>
      //       </TableRow>
      //         ))}
      //     </TableBody>

      //   </Table>
      //   </TableContainer>

 // const dispatch = useDispatch();
    // const {users, loading,error} = useSelector(state => state.data);

    // useEffect(() => {
    // dispatch(loadUsersStart());
    // }, []);
     
    // useEffect(() => error && toast.error(error),  [error]);
 

    // const handleDelete = (id) => {
    //   if(window.confirm("Are you sure that you wanted to delete  that user ?")){
    //     dispatch(deleteUserStart(id));
    //     toast.success(" User Deleted Successfully");
    //   }
    // }
  // <div className="container" style={{marginTop:"150px"}}>
        //     <MDBTable>
        //         <MDBTableHead dark>
        //            <tr>
        //                <th scope="col">NO</th>
        //                <th scope="col">Name</th>
        //                <th scope="col">Dateofbirth</th>
        //                <th scope="col">Gender</th>
        //                <th scope="col">Salary</th>
        //                <th scope="col">Action</th>
        //            </tr>
        //         </MDBTableHead>
        //         {users && users.map((item, index) => (
        //          <MDBTableBody key={index}>
        //           <tr>
        //               <th scope="row">{index + 1}</th>
        //               <td>{item.name}</td>
        //               <td>{item.Dateofbirth}</td>
        //               <td>{item.gender}</td>
        //               <td>{item.salary}</td>
        //               <td>
        //                   <MDBBtn className="m-1" tag="a" color="none" onClick={() => handleDelete(item.id)}>
        //                  <MDBTooltip title="Delete" tag="a">
        //                      <MDBIcon
        //                      fas icon="trash" style={{color:"#dd4b39"}}
        //                      size="lg"
        //                      />

                            
        //                      </MDBTooltip>                             
        //                   </MDBBtn>
        //               </td>

        //           </tr>
        //          </MDBTableBody>
        //         ))}
        //     </MDBTable>
        // </div>