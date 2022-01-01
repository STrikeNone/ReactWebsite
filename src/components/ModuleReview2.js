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
});

function ModuleReview2() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.outerDiv}>
          <h4 className={classes.title}>Module Review</h4>
          <div className={classes.textBox}>
            <p>
              <strong>Y2S1</strong>
              <br />
              Total Modules: 6 (5 Core, 1 GER Core)
              <br />
              Total AUs: 20
            </p>

            <p>
              <br />
              <a href="https://www.ntu.edu.sg/docs/librariesprovider123/obtl/mas/mh2100_obtl.pdf?sfvrsn=9b3e53c3_2">
                MH2100 Calculus III
              </a>
              <br />
              Grade: A- <br />
              Difficulty: 7/10 <br />
              Mid Terms 1: 48.5/50 <br />
              Mid Terms 2: 48/50 <br />
              Review: This module was a continuation from MH1805 Calculus where
              we learned more about Multivariable Calculus. A nice way to
              simplify would be Calculus but in vector form. Differentiation and
              Integration techniques (Greens Theorem, Divergence Theorem, Stokes
              Theorem) were taught to us. With sufficient practice on the
              Tutorials it was sufficient to do well in the Mid terms. During
              Finals, they set the last question to be a tricky one which
              required higher thinking. I was unable to think clearly and
              couldnt solve the entire 15m last question (Not to mention
              realising at the last second that the double integration boundary
              i wrote for another qn was wrong). While the results were
              disappointing, I personally found this mod to be the most
              enjoyable and easiest throughout the semester
              <br />
            </p>

            <p>
              <br />
              <a href="https://curr.ntu.edu.sg/obtl/spms-mas/obtl-output/MH2500?sfvrsn=ad1703e7_2">
                MH2500 Introduction to Probability and Statistics
              </a>
              <br />
              Grade: A+ <br />
              Difficulty: 6/10 <br />
              Mid Terms 1: 100/100 <br />
              Mid Terms 2: 100/100 <br />
              Review: Introduction to statistics module teaching Discrete Random
              Variable and Continuous Random Variable, Order statistics and
              Central Limit Theorem. The Professors lecture was quite messy in
              general as he always livestream the physical copies of his notes
              but fail to keep the relevant part shared on screen . But the mid
              terms and finals set were definitely doable. Questions were reused
              from the tutorial and the course text book (Practise that and you
              should be fine). Try to go for TA Chun Fei's class, his notes and
              the extra classes he holds are extremely useful (Even more so than
              the Prof imo).
              <br />
            </p>

            <p>
              <br />
              <a href="https://www.ntu.edu.sg/pace/programmes/detail/cz2002-object-oriented-design-and-programming">
                CZ2002 Object Oriented Design and Programming
              </a>
              <br />
              Grade: A <br />
              Difficulty: 8/10 <br />
              Assignment: Grade not released <br />
              Review: This module was quite hard for me especially since I had
              difficulties in drawing out the UML Class diagram. Proper
              understanding of concepts is very important. For the assignment
              remember to do the class diagrams before the actual code. This was
              a mistake my group made and we had to do alot of corrects towards
              the end. My group's code for our Restaurant Reservation Point Of
              Sale System can be found on my github.
              <br />
            </p>
            <br />
            <p>
              <a href="https://github.com/STrikeNone/CZ2004-Human-Computer-Interaction">
                CZ2004 Human Computer Interaction
              </a>
              <br />
              Grade: A+ <br />
              Difficulty: 7/10 <br />
              Lo-Fi: A <br />
              Evaluation: A+ <br />
              Hi-Fi: A <br />
              Review: Assignments were quite time consuming and I personally
              found this module to be for aesthetically talented people or those
              interested in UI UX (Definitely not me). Most students scored at
              least a A- for the Lo-Fi to Hi-Fi. Due to a situation, my finals
              was converted to 50% MCQ of which most questions were taken from
              past year finals. As a result most students found the paper really
              easy and left super early HAHAHA. I studied the module by using my
              friends online flashcards and then testing myself (just like
              biology days).
              <br />
            </p>

            <p>
              <br />
              <a href="https://www.ntu.edu.sg/pace/programmes/detail/cz2101-algorithm-design-and-analysis">
                CZ2101 Algorithm Design &amp; Analysis
              </a>
              <br />
              Grade: A+ <br />
              Difficulty: /10 <br />
              Mid Term 1: 40/40 <br />
              Review: Continuation of CZ1107 Data Structures and Algorithm, I
              found this module quite fun as we were given many opportunities to
              code out different algorithms. Lab groupmates were chosen by
              register index and we had 3 presentations on 3 different
              algorithms. Generally if you are able to understand how the
              algorithm the finals shouldnt be too hard. Things taught were
              Insertion Sort, Merge Sort, Quick Sort, Heap Sort, Prims
              Algorithm, Dijkstras Algorithm, Master Theorem, Dynamic
              Programming, String Matching, Non Deterministic Polynomial
              problems.
              <br />
            </p>

            <p>
              [PS8001 Defence Science]
              <br />
              Grade: Pass <br />
              Review: Hands down the easiest mod, no studying required as
              answers can be googled
              <br />
            </p>
          </div>
        </div>
        <div className={classes.bottom}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default ModuleReview2;
