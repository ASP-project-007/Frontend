import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "react-spring-bottom-sheet/dist/style.css";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";
import Script from 'next/script';
import store from "@store/.";
import {
  Backdrop,
  CircularProgress,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import theme from "@themes/default-theme";
// import Authentication from "@components/Auth/Authentication";

import { BackdropProvider } from "contexts/backdrop/backdrop.provider";
import { SnackBarProvider } from "contexts/snackbar/snackbar.provider";
import NextNProgress from "nextjs-progressbar";
// import AuthState from "@components/AuthState";




function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(new QueryClient());
  return (
    <>
    <Provider store={store}>              
              {/* <AuthState> */}
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  {/* <Authentication /> */}
                  {/* <NextNProgress
                    height={4}
                    color={theme.palette.secondary.main}
                    options={{ easing: "ease", speed: 500 }}
                  /> */}
                  {/* <Loading /> */}
                  <Component {...pageProps} />
                </ThemeProvider>
              {/* </AuthState> */}                     
    </Provider>
  
    </>
  );
}

export default MyApp;


