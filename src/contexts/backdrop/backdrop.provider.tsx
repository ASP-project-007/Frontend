import React, { useReducer, useState } from "react";

import { BackdropContext } from "./backdrop.context";
import { Backdrop, CircularProgress, BackdropProps } from "@material-ui/core";

const isBrowser = typeof window !== "undefined";

export interface CustomBackdropProps extends BackdropProps {
  message: undefined;
}

const INITIAL_STATE: CustomBackdropProps = {
  open: false,
  message: undefined,
};

export const BackdropProvider: React.FunctionComponent = ({
  children,
}: any) => {
  const [backdropState, backdropDispatch] = useState(INITIAL_STATE);
  return (
    <BackdropContext.Provider value={{ backdropState, backdropDispatch }}>
      <Backdrop
        style={{ zIndex: 1000000, color: "#fff" }}
        className="custom-backdrop"
        {...backdropState}
      >
        <CircularProgress color="inherit" />
        {backdropState.message && <div>{backdropState.message}</div>}
      </Backdrop>
      {children}
    </BackdropContext.Provider>
  );
};
