
import axios from "axios";

//const axios = require('axios');

// const instance = axios.create({
//     baseURL:"http://localhost:8000/info",
// });
const usersurl = 'http://localhost:8000/info';

export const getUsers = async (id)=>{
     id = id || '';
     return await axios.get(`${usersurl}/${id}`);
}

export const addUser = async (info)=>{
     return await axios.post(`${usersurl}/addUser`, info);
    
}

export const editUser = async (id,info)=>{
     return await axios.put(`${usersurl}/${id}`, info)
}

export const deleteUser = async (id)=>{
     return await axios.delete(`${usersurl}/${id}`)
}













// export const deleteUser = async (id)=> {
//     await axios.delete("http://localhost:8000/info/del/:id" + id);
//      alert("itemDeleted");
//      console.log(`Deleted users with id ${id}`);
//  }
//  export const updatedUser =  async(id)=>{
//     await axios.put("http://localhost:8000/info/update/:id" + id, updateUser);
//      alert("item updated");
//      console.log(`item with id ${id} update`);
//    }

  // 
// 

// export default instance;