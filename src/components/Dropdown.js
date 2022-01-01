import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { hover } from "@testing-library/user-event/dist/hover";

const styles = makeStyles({
  dropbtn: {
    backgroundColor: "#1F2833",
    cursor: "pointer",
    color: "#C9D1D9",
    flexGrow: 1,
    border: "none",
    "&:hover": {
      backgroundColor: "#1F2833",
    },
    "&:hover + $dropdown_content": {
      backgroundColor: "#1F2833",
      display: "block",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },

  dropdown_content: {
    display: "none",
    position: "absolute",
    backgroundColor: "#1F2833",
    minWidth: "160px",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    "&:hover": {
      display: "block",
    },
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

function Dropdown() {
  const classes = styles();
  return (
    <Typography>
      <div variant="h6" className={classes.dropbtn}>
        Module Review
      </div>
      <div className={classes.dropdown_content}>
        <a className={classes.display_item} href="#">
          Year 1
        </a>
        <a className={classes.display_item} href="#">
          Year 2
        </a>
      </div>
    </Typography>
  );
}

export default Dropdown;
