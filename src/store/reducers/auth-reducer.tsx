import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState, AppThunk } from "..";

export enum FormType {
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
  FORGOT = "FORGOT",
  UPDATES = "UPDATES",
}

export interface AuthFormState {
  visible: boolean;
  formType?: FormType | "";
  email?: string;
  referralCode?: string;
}

const initialState: AuthFormState = {
  visible: false,
};

export const authFormSlice = createSlice({
  name: "authforms",
  initialState,
  reducers: {
    openForgotPassword: (state, value) => {
      state.visible = true;
      state.formType = FormType.FORGOT;
      state.email = value.payload;
    },
    openRegisterForm: (state) => {
      state.visible = true;
      state.formType = FormType.SIGNUP;
      state.referralCode = undefined;
    },
    openRegisterWithReferralForm: (state, value) => {
      state.visible = true;
      state.formType = FormType.SIGNUP;
      state.referralCode = value.payload;
    },
    openLoginForm: (state) => {
      state.visible = true;
      state.formType = FormType.LOGIN;
    },
    openUpdates: (state) => {
      state.visible = true;
      state.formType = FormType.UPDATES;
    },
    closeAuthPopup: (state) => {
      state.visible = false;
      state.formType = "";
    },
  },
});

export const {
  openLoginForm,
  closeAuthPopup,
  openRegisterForm,
  openRegisterWithReferralForm,
  openForgotPassword,
  openUpdates
} = authFormSlice.actions;

export default authFormSlice.reducer;
