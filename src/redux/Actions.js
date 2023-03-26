import {ADD_USER, DELETE_USER, GET_USER, GET_USERS, UPDATE_USER } from "./actionType";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers = () => async(dispatch) => {
    try{
        const res = await axios.get(BASE_URL)
        const users = res.data;
        dispatch({
            type:GET_USERS,
            payload:users
        })
    }catch(error){
        console.log(error.message)
    }
    
}

export const fetchUser = (id) => async(dispatch) =>{
    try{
        const res = await axios.get(`${BASE_URL}/${id}`)
        const user = res.data;
        dispatch({
        type:GET_USER,
        payload:user
        })
    }
    catch(error){
        console.log(error.message)
    }
  }



export const addUser = (user,prevdata) => async(dispatch) =>{
  try{

    const res = await axios.post(BASE_URL,JSON.stringify(user),{
        headers: {
            'Content-Type': 'application/json'
          }
    })
    const newUser = res.data
    // console.log(newUser,"new")
    dispatch({
        type:ADD_USER,
        payload:([...prevdata,newUser])
        })
  }
  catch(error){
    console.log(error.message)
  }
}


export const updateUser = (id,updateduser) => async(dispatch)=>{
    // console.log(id,user,"bbb")
    try{
        const res = await axios.patch(`${BASE_URL}/${id}`, updateduser);
        dispatch({
            type:UPDATE_USER,
            payload:res.data
        })
    }
    catch(error){
        console.log(error.message)
    }
}


export const deleteUser = (id) => {
    return {
        type:DELETE_USER,
        payload:id
    }
}



