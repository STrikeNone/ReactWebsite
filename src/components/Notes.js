import "../App.css";
import React from "react";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import NavBar from "./NavBar";
import Footer from "./Footer";

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
  outerDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#ECECEC",
    paddingLeft: "2rem",
  },

  title: {
    fontSize: 30,
    margin: "2rem",
    paddingLeft: "2rem",
  },

  textBox: {
    paddingLeft: "3rem",
    paddingRight: "5rem",
    margin: "1rem",
    textAlign: "justify",
    fontSize: 15,
    fontFamily: "Arial",
  },

  fileBox: {
    flexDirection: "row",
    display: "flex",
    fontSize: 17.5,
  },

  fileDownload: {
    position: "relative",
    display: "flex",
    paddingLeft: "3rem",
  },
});

function Notes() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.outerDiv}>
          <h4 className={classes.title}>Notes</h4>
          <div className={classes.textBox}>
            <div className={classes.fileBox}>
              <li>CZ1016 Introduction to Data Science</li>
              <a
                className={classes.fileDownload}
                href="https://drive.google.com/file/d/1Rlj3jyjC9FD13D8mE0dryNtqs7G9tEbG/view?usp=sharing"
                download
              >
                Notes
              </a>
              <strong> |</strong>
              <a
                href="https://drive.google.com/file/d/1BXGgHanEj5MON8x4ay1Jx3pAQrPkwlqD/view"
                download
              >
                Cheatsheet
              </a>
            </div>
          </div>
        </div>
        <div className={classes.bottom}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Notes;
