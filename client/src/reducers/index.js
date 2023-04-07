import { combineReducers } from "redux";
import manage from "./manage";
import auth from "./auth";

export default combineReducers({ manage, auth });