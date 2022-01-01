import React from "react";
import CustomBtn from "./CustomBtn";
import Avatar from "../img/man.svg";
//import logoMobile from "../img/logo.svg";
import { Toolbar, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Home from "./Home";
import About from "./About";

const styles = makeStyles({
  bar: {
    padding: "0.5rem",
    backgroundColor: "#1F2833",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },
  logo: {
    width: "4%",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  logoMobile: {
    width: "100%",
    display: "none",
    ["@media (max-width:780px)"]: {
      display: "inline-block",
    },
  },
  menuItem: {
    cursor: "pointer",
    color: "#C9D1D9",
    flexGrow: 1,
    "&:hover": {
      color: "#8B949E",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },

  dropbtn: {
    backgroundColor: "#1F2833",
    cursor: "pointer",
    color: "#C9D1D9",
    flexGrow: 1,
    border: "none",
    "&:hover": {
      backgroundColor: "#1F2833",
      color: "#8B949E",
    },
    "&:hover + $dropdown_content": {
      backgroundColor: "#1F2833",
      display: "block",
    },
    height: "50px",
    paddingTop: "0.4rem",
  },

  dropdown_content: {
    display: "none",
    position: "absolute",
    backgroundColor: "#1F2833",
    minWidth: "200px",
    marginLeft: "50px",
    textAlign: "center",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    "&:hover": {
      display: "block",
    },
    paddingTop: "0.35rem",
  },

  display_item: {
    color: "#C9D1D9",
    padding: "12px 16px",
    textDecoration: "none",
    display: "block",
    "&:hover": {
      backgroundColor: "#8B949E",
    },
  },
});

function NavBar() {
  const classes = styles();
  return (
    <Toolbar
      position="sticky"
      color="rgba(0, 0, 0, 0.87)"
      className={classes.bar}
    >
      <img src={Avatar} className={classes.logo} />
      <Typography
        variant="h6"
        className={classes.menuItem}
        onClick={() => {
          window.location = "./";
        }}
      >
        Home
      </Typography>
      <Typography
        variant="h6"
        className={classes.menuItem}
        onClick={() => {
          window.location = ".#/about";
        }}
      >
        About
      </Typography>
      <Typography variant="h6" className={classes.dropbtn}>
        <div className={classes.dropbtn}>Module Review</div>
        <div className={classes.dropdown_content}>
          <a className={classes.display_item} href=".#/year1_review">
            Year 1
          </a>
          <a className={classes.display_item} href=".#/year2_review">
            Year 2
          </a>
        </div>
      </Typography>
      <Typography
        variant="h6"
        className={classes.menuItem}
        onClick={() => {
          window.location = "https://github.com/STrikeNone/";
        }}
      >
        GitHub
      </Typography>
      <Typography
        variant="h6"
        className={classes.menuItem}
        onClick={() => {
          window.location =
            "https://www.linkedin.com/in/yi-hao-puah-7286b11b8/";
        }}
      >
        LinkedIn
      </Typography>
      <CustomBtn txt="Contact Me" />
    </Toolbar>
  );
}

export default NavBar;
