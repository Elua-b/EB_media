import {combineReducers} from "redux"
import authReducer from './authReducer'
import postReducer from "./poseReducer"
export const reducers=combineReducers({authReducer,postReducer})