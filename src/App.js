import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

import SecurityIcon from "@material-ui/icons/Security";
import EventNoteIcon from "@material-ui/icons/EventNote";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ComputerIcon from "@material-ui/icons/Computer";
import HttpIcon from "@material-ui/icons/Http";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

function App() {
  const classes = styles();
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Yi Hao</h2>
    </div>
  );
}

export default App;
