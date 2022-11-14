import { createTheme } from "@material-ui/core";
import { THEMECONSTANTS } from "./theme-constants";

let theme = createTheme({
  palette: {
    // primary: {
    //   light: '#ffc107',
    //   main: '#ffc107',
    //   dark: '#ffc107'

    // },
    primary: {
      light: "#fddf3d",
      main: "#fddf3d",
      dark: "#fddf3d",
    },

    secondary: {
      light: "#f36638",
      main: "#f36638",
      dark: "#f36638",
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,

  overrides: {

    MuiCard: {
      root: {
        boxShadow: "0 1px 6px 0 rgb(0 0 0 / 20%)"
      }
    },

    MuiDrawer: {
      paper: {
        backgroundColor: "#18202c",
      },
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
      contained: {
        borderRadius: theme.shape.borderRadius,
        boxShadow: "none",
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        justifyContent: "space-between",
        textTransform: "none",
        margin: "0 16px",
        minWidth: 0,
        padding: 0,

        [theme.breakpoints.up("md")]: {
          padding: 0,
          minWidth: 0,
        },
        [theme.breakpoints.up("sm")]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },

    MuiTooltip: {
      tooltip: {
        fontSize: "0.9rem",
        color: "white",
        backgroundColor: "#dc143c",
        borderRadius: 4,
        textAlign: 'center',
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: "#404854",
      },
    },
    MuiListItemText: {
      primary: {
        // fontWeight: theme.typography.fontWeightMedium,
      },
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

export default theme;
