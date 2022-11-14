import { createSlice } from "@reduxjs/toolkit";
import notify from "@utils/toast";
import axios from "axios";
import { closeAuthPopup } from "./auth-reducer";

const DEFAULT_USER_OBJECT = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  country: "",
  displayPicture: "",
  Tier: 0,
  accessToken: "",
  refreshToken: "",
  id: 0,
  tab: 0
};

const initialState = {
  isUserLoggedIn: false,
  user: { ...DEFAULT_USER_OBJECT },
};

const getConvertToUserObject = (user) => {
  const preparedUser = { ...DEFAULT_USER_OBJECT };
  preparedUser.firstName = user.firstName;
  preparedUser.lastName = user.lastName;
  preparedUser.accessToken = user.access_token;
  preparedUser.refreshToken = user.refresh_token;
  preparedUser.email = user.email;
  preparedUser.phone = user.phone;
  preparedUser.gender = user.gender;
  preparedUser.dateOfBirth = user.dateOfBirth;
  preparedUser.city = user.city;
  preparedUser.state = user.state;
  preparedUser.country = user.country;
  preparedUser.displayPicture = user.Display_Picture;
  preparedUser.Tier = user.Tier;
  // preparedUser.Tier = 1;
  preparedUser.id = user.id;


  return preparedUser;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const user = action.payload;
      if (!user) return alert("Login failed. Incorrect username or password.");
      state.user = getConvertToUserObject(user);
      state.isUserLoggedIn = true;

      window.localStorage.setItem("loggedInUser", user.access_token);
      window.localStorage.setItem("access_token", user.access_token);
      window.localStorage.setItem("refresh_token", user.refresh_token);
      if (!state.isUserLoggedIn) {
        notify("Successfully Logged in", "success");
      }
    },
    updateUserObject: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    logout: (state) => {
      if (state.isUserLoggedIn) {
        notify("Successfully Logged out", "warning");
      }
      window.localStorage.removeItem("loggedInUser");
      window.localStorage.removeItem("access_token");
      window.localStorage.removeItem("refresh_token");

      state.user = { ...DEFAULT_USER_OBJECT };
      state.isUserLoggedIn = false;
    },
  },
});

export const selectorAuth = (state) => state.auth;
export const { login, logout, updateUserObject } = authSlice.actions;
export default authSlice.reducer;
