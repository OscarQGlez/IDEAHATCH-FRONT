import React from "react";
import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#6e00ee",
    },
    secondary: {
      main: "#00ee96",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: ["Josefin Sans", "Arial", "Helvetica", "sans-serif" ].join(","), 
    fontSize: 12,
    fontStyle: "italic",
  },
});
