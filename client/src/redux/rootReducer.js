import {combineReducers} from 'redux';
import userReducer from "./user/userReducer";
import taskReducer from './task/taskReducer';


const rootReducer = combineReducers({
   users: userReducer,
   tasks: taskReducer
})

export default rootReducer;