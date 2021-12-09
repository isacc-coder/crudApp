


import React from 'react'
import { Typography } from '@mui/material'
//import {FormGroup, FormControl , Input, InputLabel, Button, Typography} from '@mui/material';
// import { useDispatch, useSelector } from 'react-redux';
// import { loadUsersStart } from '../redux/actions';
// import Table from '@mui/material/Table';
//import { styled } from '@mui/material/styles';
//import { makeStyles } from '@mui/styles';

//import { makeStyles } from '@material-ui/styles';

// import TableBody from '@mui/material/TableBody';
// import TableCell,{ tableCellClasses }  from '@mui/material/TableCell';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import { MDBTypography } from 'mdb-react-ui-kit';
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
// }));
// const useStyles = makeStyles({
//   container:{
//     width:'50%',
//     margin:'5% 0 0 25%',
//     '& > *':{
//       marginTop:20
//     }
//   }
// })

 const About = () => { 

//const classes = useStyles();
//   const dispatch = useDispatch();
//   const {users} = useSelector(state => state.data);

//   useEffect(() => {
//   dispatch(loadUsersStart());
//   }, []);
//   const handleDelete = (id) => {

//   }
    return (
   
        < div >
           <Typography variant="h3" component="div" gutterBottom>
        About The Project
      </Typography>
      <Typography variant="body1" gutterBottom>  
      Hi there this is fulll curud app with the help of react js we ahave
          use Redux-saga to perform all crud operation in this application.
          In this application we have also routing facility as well. we have use
         material-ui to build the component like Table Form, Navbar, button etc import 
          this React Application.
      </Typography>
          {/* <MDBTypography note noteColor="primary">
          Hey guus this is fulll curud app with the help of react js we ahave
          use Redux-saga to perform all crud operation in this application.
          In this application we have also routing facility as well. we have use
          MDBBootsrap to build the component like Table Form, Navbar, button etc import 
          this React Application.

          </MDBTypography> */}

      
      








          {/* <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>NO</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Dateofbirth</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Salary</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
            <TableBody>
            {users && users.map((item, index) => (
              <TableRow key={index}>
                <TableCell scope="row">{index + 1}</TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.Dateofbirth}</TableCell>
                <TableCell align="right">{item.gender}</TableCell>
                <TableCell align="right">{item.salary}</TableCell>
                <TableCell align="right">
                  <DeleteIcon onClick={() => handleDelete(item.id)}/>
                  <EditIcon/>
                  <VisibilityIcon/>
                </TableCell>
              </TableRow>
                ))}
            </TableBody>

          </Table>
          </TableContainer> 
          
          
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      spacing={4}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
          <TextField
          label="Name"
          //id="outlined-size-small"
          defaultValue="Small"
          size="small"
          value={name}
          type="text"
          onChange={onInputChange}
          required
          focused
          id="demo-helper-text-misaligned" 
          //helperText="Please Provide a Name."
         
        />
        <TextField
          label="Date"
          //id="outlined-size-small"
          defaultValue="Small"
          size="small"
          value={dateofbirth}
          type="text"
          onChange={onInputChange}
          required
          focused 
          id="demo-helper-text-misaligned"
          //helperText="Please Provide a Dateofbirth."
          
        />
        <TextField
          label="Gender"
         // id="outlined-size-small"
          defaultValue="Small"
          size="small"
         value={gender}
          color="secondary" 
          focused 
          onChange={onInputChange}
          required
          id="demo-helper-text-misaligned"
         // helperText="Please Provide a Gender"
         
        />
        <TextField
          label="Salary"
          //id="outlined-size-small"
          defaultValue="Small"
          size="small"
          value={salary}
          type="number"
          onSubmit={onInputChange}
          required
          focused 
          id="demo-helper-text-misaligned"
          //helperText="Please Provide a Salary"
          
        />
      
    </Box>

          */}
        </div>
    )
}

export default About

