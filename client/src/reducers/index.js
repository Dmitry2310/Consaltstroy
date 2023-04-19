import { combineReducers } from "redux";
import manage from "./manage";
import auth from "./auth";
import news from "./news";

export default combineReducers({ manage, auth, news });