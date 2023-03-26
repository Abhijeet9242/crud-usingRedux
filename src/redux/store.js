// import {legacy_createStore,applyMiddleware,combineReducers} from "redux";
// import thunk from "redux-thunk";
// import { userReducer } from "./reducer";

// const rootReducer = combineReducers({
//     usersdata : userReducer
// })

// export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))



import {legacy_createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./reducer";


export const store = legacy_createStore(userReducer,applyMiddleware(thunk))