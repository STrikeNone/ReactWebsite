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
import Profile from "../img/new_zealand.jpg";
import { red } from "@material-ui/core/colors";

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
  leftCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "5rem",
    marginLeft: "1.5rem",
    width: "20%",
  },

  footer: {
    bottom: 0,
    width: "100%",
    marginTop: "0rem",
    textAlign: "center",
  },

  logo: {
    flexWrap: "wrap",
    margin: 10,
  },

  logoText: {
    textAlign: "left",
    display: "flex",
    fontSize: 15,
    margin: 0,
  },

  logoTextName: {
    textAlign: "left",
    fontSize: 20,
    margin: 0,
    padding: 0,
  },

  centerCol: {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    flexWrap: "wrap",
    marginTop: "3.3rem",
    width: "800px",
    flexDirection: "column",
  },

  centerText: {
    textAlign: "justify",
    display: "flex",
    fontSize: 20,
    marginBottom: 0,
  },

  centerHeader: {
    textAlign: "left",
    display: "flex",
    fontSize: 20,
  },

  centerDescription: {
    textAlign: "justify",
    display: "flex",
    fontSize: 17,
    marginTop: -20,
    flexDirection: "column",
  },
});

function About() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            gap: "4rem",
            alignItems: "flex-start",
            backgroundColor: "#ECECEC",
          }}
        >
          <div className={classes.leftCol}>
            <img src={Profile} />
            <p className={classes.logo}>{""}</p>
            <h6 className={classes.logoTextName}>Puah Yi Hao (22)</h6>
            <p className={classes.logoText}>
              Nanyang Technological University (NTU) Data Science & Artificial
              Intelligence (Y2)
            </p>
          </div>
          <div className={classes.centerCol}>
            <p className={classes.centerText}>
              I am a Year 2 student currently pursuing a Bachelor of Science in
              Data Science and AI at NTU. I am still exploring my career options
              through seeking various internships. My current CCA would be the
              SCSE Club Community Development portfolio continuiting my CIP
              adventures from my JC days in Saints Advocates. I believe it is a
              CCA with meaning and to do a part for the community good
            </p>
            <h5 className={classes.centerHeader}>Hobbies</h5>
            <p className={classes.centerDescription}>
              I enjoy playing sports such as badminton and frequently go for
              runs (avid runner) to maintain my fitness and to de-stress. I
              enjoy hanging out and talking with my friends frequently as well
              (Social Life is one of the things I strongly value). I also
              enjoying taking up fun side projects in Machine Learning during my
              free time to apply it to other aspects not normally taught in
              school (eg. Gaming).
            </p>
            <p
              style={{
                textAlign: "justify",
                marginTop: 5,
                marginBottom: 0,
                fontSize: 17,
              }}
            >
              Gaming: I enjoy gaming with friends on my off days as the sense of
              fulfilment and satisfaction is something that always excites me.
              Games I currently play would include (Call of Duty Mobile, Brawl
              Stars, Clash of Clans, Pokemon GO)
            </p>
            <h5 className={classes.centerHeader}>Education</h5>
            <ul className={classes.centerDescription}>
              <li style={{ fontSize: 17 }}>
                2021 - Ongoing: Nanyang Technological University -- CGPA: 4.95
              </li>
              <li style={{ fontSize: 17, marginTop: 5 }}>
                2016 - 2017: St Andrews Junior College -- 90 Rank Points
              </li>
              <li style={{ fontSize: 17, marginTop: 5 }}>
                2012 - 2015: Maris Stella High School -- L1R5 10
              </li>
            </ul>
            <h5 className={classes.centerHeader}>Skills</h5>
            <p
              style={{
                textAlign: "justify",
                marginTop: -15,
                fontSize: 17,
              }}
            >
              Python Programming, C/C++, Flutter (App Development), Java,
              HTML(Basic), ReactJs, MySQL, Machine Learning, Computer Vision,
              Deep Learning
            </p>
            <h5 className={classes.centerHeader}>Others</h5>
            <p
              style={{
                textAlign: "justify",
                marginTop: -15,
                marginBottom: "2.5rem",
                fontSize: 17,
              }}
            >
              Uni notes:{" "}
              <a
                href="https://drive.google.com/drive/folders/1TKm-WrIipy9DSt7olbG_56s4yhQ_bqyU?usp=sharing"
                target="_blank"
              >
                g-drive
              </a>
            </p>
          </div>
        </div>
        <div className={classes.footer}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default About;
