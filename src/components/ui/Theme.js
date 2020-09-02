import { createMuiTheme } from "@material-ui/core/styles";

const pink = "#fc1868";

export default createMuiTheme({
  palette: {
    common: {
      pink: `${pink}`,
    },
    primary: {
      main: `${pink}`,
    },
    secondary: {
      main: `rgba(255,255,255,1)`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Poppins, sans",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
      marginLeft: "25px",
    },
  },
  breakpoints: {
    keys: ["xxs", "xs", "sm", "md", "lg", "xl"],
    values: {
      xxs: 0,
      xs: 360,
      sm: 410,
      md: 600,
      lg: 960,
      xl: 1200,
    },
  },
});
