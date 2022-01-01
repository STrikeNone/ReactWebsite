import "../App.css";
import React from "react";
import {
  createTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import NavBar from "./NavBar";
import Grid from "./Grid";
import Footer from "./Footer";

import HomeIcon from "@material-ui/icons/Home";
import EventNoteIcon from "@material-ui/icons/EventNote";
import InfoIcon from "@material-ui/icons/Info";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
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
    fontSize: 17.5,
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },

  color: {
    backgroundColor: "#ECECEC",
  },
});

function Home() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <div className={classes.color}>
          <NavBar />
          <div className={classes.wrapper}>
            <Typography
              variant="h4"
              className={classes.bigSpace}
              color="primary"
            >
              What is this?
            </Typography>
          </div>
          <div className={classes.wrapper}>
            <Typography
              variant="h5"
              className={classes.littleSpace}
              color="primary"
            >
              Welcome to the main page of my first ever React project! After
              self learning React and Js for a week i decided to embark on this
              project to create my own "Website" for GitHub to practice what I
              have been learning.
            </Typography>
          </div>
          <div className={`${classes.grid} ${classes.bigSpace}`}>
            <Grid
              icon={
                <HomeIcon
                  style={{ fill: "#4360A6", height: "125", width: "125" }}
                />
              }
              title="Home"
              btnTitle="Show me More"
              link="./"
            />
            <Grid
              icon={
                <InfoIcon
                  style={{ fill: "#D05B2D", height: "125", width: "125" }}
                />
              }
              title="About Me"
              btnTitle="Show me More"
              link="./#/about"
            />
            <Grid
              icon={
                <EventNoteIcon
                  style={{ fill: "#449A76", height: "125", width: "125" }}
                />
              }
              title="Module Review"
              btnTitle="Show me More"
              link="./#/year1_review"
            />
          </div>
          <div className={`${classes.grid} ${classes.littleSpace}`}>
            <Grid
              icon={
                <GitHubIcon
                  style={{ fill: "#171515", height: "125", width: "125" }}
                />
              }
              title="GitHub"
              btnTitle="Show me More"
              link="https://github.com/STrikeNone/"
            />
            <Grid
              icon={
                <LinkedInIcon
                  style={{ fill: "#0077b5", height: "125", width: "125" }}
                />
              }
              title="LinkedIn"
              btnTitle="Show me More"
              link="https://www.linkedin.com/in/yi-hao-puah-7286b11b8/"
            />
          </div>
          <div className={classes.bigSpace}>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Home;
