
import './App.css';

import React from 'react';

import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import AddEditUser from './pages/AddEditUser';
import EditUser from './pages/EditUser';
import UserInfo from './pages/UserInfo';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   
    <BrowserRouter> 

    <div >
      
      <Header/>
 <ToastContainer position="top-center"/>
  <Routes> 
     <Route path="/" element={<Home />} />
     <Route path="/addUser" element={<AddEditUser />} />
     <Route path="/editUser/:id" element={<EditUser/>} />
     <Route path="/userInfo/:id" element={<UserInfo />} />
     <Route path="/about" element={<About />} />
  </Routes>

    </div>

    </BrowserRouter>
     
  );
}

export default App;




