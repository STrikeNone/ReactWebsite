import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  ToolBar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const styles = makeStyles({
  bar: {
    backgroundColor: "#1F2833",
    paddingTop: "1rem",
  },

  hover: {
    "&:hover": {
      color: "#8B949E",
    },
  },
});

function Footer() {
  const classes = styles();
  return (
    <BottomNavigation className={classes.bar}>
      <BottomNavigationAction
        color="red"
        label="Facebook"
        value="recents"
        onClick={() => {
          window.location = "https://www.facebook.com/yihao.Admires.1A/";
        }}
        icon={<FacebookIcon style={{ fill: "#C9D1D9" }} />}
      />
      <BottomNavigationAction
        label="Instagram"
        value="nearby"
        onClick={() => {
          window.location = "https://www.instagram.com/puah_yihao/";
        }}
        icon={<InstagramIcon style={{ fill: " #C13584" }} />}
      />
    </BottomNavigation>
  );
}

export default Footer;
