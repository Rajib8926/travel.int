// theme.ts or theme.js
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      drawerWidth: number;
      darkMain: string;
      gray: string;
    };
  }
  interface ThemeOptions {
    custom?: {
      drawerWidth?: number;
      darkMain?: string;
      gray: string;
    };
  }
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1700,
    },
  },
  custom: {
    drawerWidth: 240,
    darkMain: "#313131",
    gray: "#AEAEAE",
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
