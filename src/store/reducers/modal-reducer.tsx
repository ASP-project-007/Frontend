import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState, AppThunk } from "..";

export enum ModalType {
  LOGIN = "LOGIN",
  SIGNUP = "SIGNUP",
  FORGOT = "FORGOT",
  UPDATES = "UPDATES",
}

export interface ModalState {
  visible: boolean;
  formType?: ModalType | "";
}

const initialState: ModalState = {
  visible: false,
};

export const authFormSlice = createSlice({
  name: "authforms",
  initialState,
  reducers: {
    openModalPopup: (state) => {
      state.visible = true;
      state.formType = ModalType.FORGOT;
    },
    closeModalPopup: (state) => {
      state.visible = false;
      state.formType = "";
    },
  },
});

export const {
  openModalPopup,
  closeModalPopup,  

} = authFormSlice.actions;

export default authFormSlice.reducer;
