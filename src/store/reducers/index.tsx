import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import authUser from "./auth-user";

export default combineReducers({
  auth: authReducer,
  authUserState: authUser,
});
