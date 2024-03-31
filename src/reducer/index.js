import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slice/authSlice";
import profileReducer from "../slice/profileSlice";
import postReducer from "../slice/postSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
});

export default rootReducer;
