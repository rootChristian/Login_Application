/***********************************************************************
************ Author:    Christian KEMGANG NGUESSOP *********************
************ Version:    1.0.0                      ********************
***********************************************************************/
import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import userReducer from "./users/userSlice";

const rootReducer = combineReducers({
    auth: authReducer,
    users: userReducer,
})

export default rootReducer;