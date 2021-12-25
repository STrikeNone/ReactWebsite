import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

function Footer() {
  return (
    <BottomNavigation>
      <BottomNavigationAction
        color="red"
        label="Facebook"
        value="recents"
        icon={<FacebookIcon style={{ fill: "#3b5998" }} />}
      />
      <BottomNavigationAction
        label="Instagram"
        value="nearby"
        icon={<InstagramIcon style={{ fill: " #C13584" }} />}
      />
    </BottomNavigation>
  );
}

export default Footer;
