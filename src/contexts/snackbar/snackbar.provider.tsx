import React, { useReducer, useState } from "react"; 

import { SnackBarContext } from "./snackbar.context"; 
import { SnackbarProps } from "@material-ui/core";
import { CustomSnackbar } from "components/snackbar";
import { AlertProps } from "@material-ui/lab/Alert/Alert";


export interface SnackBarProps { 
  snackbarProps: SnackbarProps; 
  alertProps: AlertProps;
}

const isBrowser = typeof window !== "undefined"; 

const INITIAL_STATE: SnackBarProps = {
    snackbarProps: {},
    alertProps: {} 
};

export const SnackBarProvider: React.FunctionComponent = ({ children }) => {
  const [snackBarState, snackBarDispatch] = useState(INITIAL_STATE);
  return (
    <SnackBarContext.Provider value={{ snackBarState, snackBarDispatch }}>
      <CustomSnackbar {...snackBarState} />
      {children} 
    </SnackBarContext.Provider>
  );
};
