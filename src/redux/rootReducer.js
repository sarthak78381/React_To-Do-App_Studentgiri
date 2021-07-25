import {combineReducers} from 'redux';
// import userReducer from "./user/userReducer";
import taskReducer from './task/taskReducer';


const rootReducer = combineReducers({
   // user: userReducer,
   tasks: taskReducer
})

export default rootReducer;