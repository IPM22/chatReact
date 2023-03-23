import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AsyncLocalStorage from "../utils/asyncLocalStorage";
export const ColorModeContext = createContext({});

const ColorModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  useEffect(() => {
    AsyncLocalStorage.getItem("mode").then((response) => {
      let mode = response;
      console.log(mode);
      if (mode) {
        setMode(mode);
      } else {
        setMode("light");
      }
    });
  }, []);

  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
