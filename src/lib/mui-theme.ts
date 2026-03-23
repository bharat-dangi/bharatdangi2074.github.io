import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "hsl(250, 69%, 61%)",
      dark: "hsl(250, 57%, 53%)",
      light: "hsl(250, 92%, 85%)",
    },
    background: {
      default: "hsl(250, 60%, 99%)",
      paper: "#ffffff",
    },
    text: {
      primary: "hsl(250, 8%, 15%)",
      secondary: "hsl(250, 8%, 45%)",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "hsl(250, 69%, 61%)",
      dark: "hsl(250, 57%, 53%)",
      light: "hsl(250, 92%, 85%)",
    },
    background: {
      default: "hsl(250, 28%, 12%)",
      paper: "hsl(250, 29%, 16%)",
    },
    text: {
      primary: "hsl(250, 8%, 95%)",
      secondary: "hsl(250, 8%, 75%)",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  shape: {
    borderRadius: 8,
  },
});
