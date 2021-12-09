import * as types from "./actionTypes";

/////////////////LOAD//////////////////////

export const loadUsersStart = () => ({
 type: types.LOAD_USERS_START,
});

export const loadUsersSuccess = (info) => ({
  type:types.LOAD_USERS_SUCCESS,
  payload:info,
});

export const loadUsersError = (error) => ({
    type:types.LOAD_USERS_ERROR,
    payload:error,
});

// /////////////CREATE//////////////////

export const createUserStart = (info) => ({
  type: types.CREATE_USER_START,
  payload:info
 });
 
 export const createUserSuccess = () => ({
   type:types.CREATE_USER_SUCCESS,
   
 });
 
 export const createUserError = (error) => ({
     type:types.CREATE_USER_ERROR,
     payload:error,
 });

 /////////////////DELETE///////////////////

 export const deleteUserStart = (id) => ({
  type: types.DELETE_USER_START,
  payload:id
 });
 
 export const deleteUserSuccess = (id) => ({
   type:types.DELETE_USER_SUCCESS,
   payload:id,
   
 });
 
 export const deleteUserError = (error) => ({
     type:types.DELETE_USER_ERROR,
     payload:error,
 });

 //////////////UPDATE//////////////

 export const updateUserStart = (id, info) => ({
  type: types.UPDATE_USER_START,
  payload:id
 });
 
 export const updateUserSuccess = () => ({
   type:types.UPDATE_USER_SUCCESS,
   
 });
 
 export const updateUserError = (error) => ({
     type:types.UPDATE_USER_ERROR,
     payload:error,
 });