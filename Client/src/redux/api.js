import axios from "axios";

const usersurl = 'http://localhost:8000/info';



 export const loadUsersApi = async () =>
  await axios.get(`${usersurl}`);

   export const createUserApi = async (info) =>
   await axios.post(`${usersurl}/addUser`, info);
  
   export const deleteUserApi = async (id) =>
   await axios.delete(`${usersurl}/${id}`);
  
   export const updateUserApi = async (id, info) =>
   await axios.put(`${usersurl}/${id}`, info);

  






/*

 export const loadUsersApi = async () =>
  await axios.get("http://localhost:8000/info");

   export const createUserApi = async (user) =>
   await axios.post(`${usersurl}/data`, user);
  
   export const deleteUserApi = async (userId) =>
   await axios.delete(`http://localhost:8001/one/card/${userId}`);
  
   export const updateUserApi = async (userId, userInfo) =>
   await axios.put(`http://localhost:8001/one/card/${userId}`, userInfo);








*/    