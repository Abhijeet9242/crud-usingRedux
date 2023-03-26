import {ADD_USER, DELETE_USER, GET_USERS } from "./actionType"

const initialState = {
    userData : []
}


export const userReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_USERS:{
            return {
                ...state,userData:action.payload
            }
        };
        case ADD_USER:{
            return { ...state,userData:action.payload}
        }
        case DELETE_USER:{
           return{
            ...state,userData:state.userData.filter((data)=> data.id !== action.payload)
           }
        };
       default: {
            return state
        }
    }
}