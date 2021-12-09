
import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@mui/material/AppBar';
import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';


const useStyle = makeStyles({
  header:{
    background:'',

  
  },
  tabs:{
    color:'#fff',
    textDecoration:'none',
    marginRight:20,
    fontSize:20
  }
})

const Header = () => {
  const classes = useStyle();
    
    return (
        <div>
         
        
     <AppBar className={classes.header}   position="static">
         <Toolbar>
           <NavLink className={classes.tabs}  to="/"  >All User</NavLink >
           <NavLink className={classes.tabs}  to="/addUser" >Add User</NavLink >
           <NavLink className={classes.tabs}  to="/about" >About</NavLink >
         </Toolbar>
    </AppBar>  


        </div>
    )
}

export default Header







