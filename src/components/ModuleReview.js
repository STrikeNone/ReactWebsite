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

function ModuleReview() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className={classes.outerDiv}>
          <h4 className={classes.title}>Module Review</h4>
          <div className={classes.textBox}>
            <p>
              <strong>Y1S1</strong> <br />
              Total Modules: 6 (3 Core, 1 GER Core, 2 UE) <br />
              Total AUs: 18
            </p>
            <p>
              <br />
              <a href="https://www.ntu.edu.sg/docs/librariesprovider76/course-outlines/ug---cos-ssm-courses/web-hw0128-sci-comm-i---180520.pdf?sfvrsn=e3382ed3_2">
                HW0128 Scientific Communication 1 (2AUs)
              </a>{" "}
              <br />
              Grade: A <br />
              Difficulty: 7/10 <br />
              Review: <br />
              This module was essentially a module focused on imparting to us
              writing skills that would be useful to us in the future when
              drafting reports. The assesment components were broken down into 3
              parts (and Group participation), Annotated Biblography
              (Individual), Review Paper (Group) and Oral Presentation. Students
              were asked to write an Annotated Bilography on one of two articles
              utilising writing skills taught throughout the semster. Learning
              to read the text critically and forming proper arguments were
              essential to writing a good essay. The group portion involved
              partnering another person who chose a different article to
              evaluate both articles together as a Review Paper. From my
              experience, I think good communication between your groupmate will
              help in deciding better on what to write (Something i did not do
              as well in). I had asked my fellow friends to constructively
              criticise my work in order to find loop holes to improve on.
              Subsequently, the Oral portion required us to choose any topic on
              Science and to present on it. Being an avid fan of cyber security
              and having done my OP in JC on it, i chose the same topic
              (Defending against Cyber Security in the 21st Century).
            </p>
            <p>
              Having struggled in General Paper back in JC, I personally found
              this module to be harder as I often struggled with writing formal,
              yet solid evaluations. In terms of hours spent on this module,
              while there is no fixed timing, i’d personally say i dedicated
              about 3-4 hours a week for this module trying to look at my
              writing to improve on it. <br />
            </p>
            <p>
              <br />
              <br />
              <a href="https://curr.ntu.edu.sg/obtl/spms-mas/obtl-output/MH1805?sfvrsn=ad1703e7_2">
                MH1805 Calculus (4AUs)
              </a>{" "}
              <br />
              Grade: A+ <br />
              Difficulty: 8/10 <br />
              Mid Term: 100/100 (The Median was 100)
              <br />
              Final Paper: 93/100 <br />
              Review: <br />
              Hands down the hardest module in Y1S1. This module focused on
              looking back to JC calculus but on a deeper level. Limits and
              Continuity was one of the most complicated concepts for me as it
              involved using the epsilon-delta definition. These concepts were
              then extended to differentiaton and then to Integration and
              finally Differential Equation. We were also briefly introduced to
              Big O notation. The tutorials were much harder than the Mid Terms
              and Finals. In order to not lag behind, i spent alot of attention
              focusing on the early concepts taught to us and searched for
              practice questions in our tutorials and redoing them. Tutorials
              were mostly in group discussion of the tutorial works. We also had
              a graded IRA (Individual Readiness Assesment) and TRA (Team..)
              every 2-3 weeks. We would first do a quiz individually and then
              discuss as a group and resubmit our answers. Being able to bank
              our scores on multiple options was certainly risky, but i remember
              telling my group to be confident and go all in with the points
              (HAHA). The group assigned to us were also important as we were
              given a coding assignment once every few weeks where we had to
              implement the concpets taught to us in code, to solve a problem.
              With about 2 week it was more than sufficient time to complete the
              assignment. Really enjoyed the group assignment as it also gave me
              a chance to know my course mates better from just talking things
              outside of work :)
            </p>
            <p>
              Mathematically inclined students will certainly enjoy this module
              regardless of how hard it is. The concepts are also vital to Data
              Science as i realised when diving deeper into Neural Networks.
              Blackpenredpen became my favourite youtuber for saving my life
              countless number of times :)
            </p>
            <p>
              <br />
              <br />
              <a href="https://www.ntu.edu.sg/pace/programmes/detail/mh1812-discrete-mathematics">
                MH1812 Discrete Mathematics (3AUs)
              </a>
              <br />
              Grade: A+ <br />
              Difficulty: 6/10 <br />
              CA1 (25%): 100/100 <br />
              CA2 (25%): 94/100 <br />
              Review: <br />
              This module focused on teaching discrete concepts (obviously) of
              mathematics such as relations, propositional logic, predicate
              logic, induction, set theory, graph theory etc. I felt that most
              of the things in this module required alot of logical thinking and
              common sense. CA1 and CA2 both had a bonus question that was
              insanely hard to solve. I managed to find online resources from
              other universities online that talked about certain tricky
              relation problems which ended up being tested. Overall, this
              module was moderate in terms of difficulty, and with sufficient
              practice of finals paper, anyone should be able to excel in it.
              Prof Yi Li was one of the best professors in explaining the
              concepts to us.
            </p>
            <p>
              I was really lucky because 3 times i managed to predict the EXACT
              question that came out, either from random online
              resources/friends casually asking me for help.
            </p>
            <p>
              <br />
              <br />
              <a href="https://www.ntu.edu.sg/pace/programmes/detail/cz1103-introduction-to-computational-thinking">
                CZ1103 Introduction to Computational Thinking (3AUs)
              </a>{" "}
              <br />
              Grade: A+ <br />
              Difficulty: 7/10 <br />
              Review : <br />
              This module was our basic introduction module to programming.
              Consisting of two portions, Python and C. The Python portion
              introduced us to various python concepts and structures such as
              list, dictionaries, loops, recursion and labs involved us applying
              these concepts to the Raspberry Pi (sort of a mini computer). We
              were asked to create games which was quite enjoyable. Mid Terms
              had 2 test, a Python MCQ quiz on lab and tutorial concepts each
              having equal weightage. Being an MCQ test it was quite doable as
              we could guess answers even if we didnt knew how to do (I guessed
              so many rip).
            </p>
            <p>
              The C portion (Week 7 - 12) involved introducing to us the basic
              concepts of C as well an Structs! C was certainly much harder than
              Python as it isnt as user-friendly. Having picked up Python a few
              weeks before Uni started, i struggled alot in the C portion and
              constantly redid the questions they had in an online server. The
              best way to learn programming in my opinion is through doing
              problems. The weekly assignments certainly helped us alot with
              that. During finals, some questions were repeated from our
              assignment and different students got different questions. I was
              quite lucky that 2/5 of my questions were repeated once. The zoom
              session with my clique before finals also attributed to me
              remembering what to do with the questions on strings :). Overall i
              would say this module is average in difficulty as it served as an
              introductory course. The lecutrers for Python were solid but for C
              it was extremely dry
            </p>
            <p>
              <br />
              <br />
              <a href="https://www.ntu.edu.sg/cml/programmes/languages/french/french-language-classes#Content_C018_Col00">
                LF9001 French Level 1 (3AUs)
              </a>
              <br />
              Grade: SU <br />
              Difficulty: 5/10 <br />
              Review: <br />
              Bonjour, Je suis etudiant a NTU! French Level 1 was hands down one
              of the most enjoyable mods to do. The Professor was really
              engaging. The daily Duo Lingo app + occasional reading of notes
              before exams were sufficient to pass the module! I highly
              recommend French to anyone interested in picking up a third
              language! One downside however would be the Classiel online
              homework every lesson (50+ questions MCQ/Open Ended on the current
              topic). Classiels took up sooo much time as i kept redoing them
              with my friends!
            </p>
            <p>
              <br />
              <br />
              <a href="https://www.ntu.edu.sg/docs/librariesprovider124/undergraduate-programmes/bsocsci-(hons)-in-economics/course-outline/he1003--basic-mathematics-for-economists.pdf?sfvrsn=88ecc13b_2">
                HE1003 Basic Math for Economist (3AUs)
              </a>{" "}
              <br />
              Grade: A+ <br />
              Difficulty: 3/10 <br />
              Mid Term: 100/100 <br />
              Review: <br />
              This module was the introductory math module for Economics
              students. It was by far the easiest module i ever took till today.
              Taking Calculus concurrently kind of made all the DSAI students
              who took the mod a smurf. Prof Wei-Siang is also hands down the
              most enthusiastic prof who explains concepts really well as well.
              Class participation marks are awarded in the form of forum
              discussion as well.
            </p>
            <p>
              <br />
              <strong>Y1S2</strong>
              <br />
              Total Modules: 5 (3 Core, 1 GER BU, 1 UE)
              <br />
              Total AUs: 15
            </p>
            <p>
              <br />
              <a href="https://www.ntu.edu.sg/docs/librariesprovider123/obtl/mas/mh2802_obtl.pdf?sfvrsn=6f6b0698_2">
                MH2802 Linear Algebra for Data Scientist (3AUs)
              </a>
              <br />
              Grade: A+ <br />
              Difficulty: 8/10 <br />
              Mid Term: 105/100 (Bonus Question) <br />
              Review: Linear algebra module teaching about vector
              transformation, eigenvalues, matrix diagonolization. The concepts
              were quite hard for me to understand and the finals had some
              questions that were really confusing. Practicing out of the given
              tutorials is a must in my opinion if you want to score. I couldnt
              solve the very last question of finals (Only one student did :/).
              But overall the Prof Mile Gu is really engaging and good at
              simplifying concepts. Make sure to go for his tutorials HAHA
              <br />
            </p>
            <p>
              <br />
              <br />
              <a href="https://curr.ntu.edu.sg/obtl/spms-mas/obtl-output/MH8300?sfvrsn=dbb2b0ad_2">
                MH8300 Its a Discreetly Discrete World (3AUs)
              </a>
              <br />
              Grade: A+ <br />
              Difficulty: 6/10 <br />
              Mid Term: 28.5/30 <br />
              Review: This module was a basically the mathematics version of a
              Year 2 module i had to take CZ2101 Algorithm Design and Analysis.
              Prof Han Mao made the lesson super engaging and fun during
              tutorials, as with all the other TAs. Additionally my group was
              quite enthusiastic as well. Overall there isnt much to say but if
              you are interested in mathematics and computing i feel this module
              is right for you. Not to mention it is relatively easy to score
              in.
              <br />
            </p>
            <p>
              <br />
              <br />
              <a href="https://www.ntu.edu.sg/pace/programmes/detail/cz1007-data-structures">
                CZ1107 Data Structures and Algorithms (3AUs)
              </a>
              <br />
              Grade: A <br />
              Difficulty: 9/10 <br />
              Mid Term: 15/15 <br />
              Finals: 3/15 :( <br />
              Review: This module destroyed me in the finals and basically more
              than half the cohort. It made me regret not being a leetcode
              grinder HAHA. Not to mention i had to face a plagarism issue for
              the assignments. I was expecting a B+ for this module but
              evidently the bellcurve gods have saved me on this one.
              <br />
            </p>
            <p>
              <br />
              <br />
              <a href="http://souravsengupta.com/courses/cz1016.html">
                CZ1016 Introduction to Data Science (3AUs)
              </a>
              <br />
              Grade: A+ <br />
              Difficulty: 7/10 <br />
              Exploratory Data Analysis Assignment: 20/20 <br />
              Mini Group Project: 72/80 <br />
              Review: Really enjoyable intro to Data Science module. Teaching
              the datascience pipeline as well as supervised and unsupervised
              learning problems. The bulk of this module would be on the project
              where we could choose any problem and get it approve by the
              professor and then work on it. My group chose to create a movie
              recommendation system, using content and collobrative filtering on
              the IMDB dataset to recommend Golden Village (Application) movies.
              <br />
            </p>
            <p>
              <br />
              <br />
              <a href="http://web.nbs.ntu.edu.sg/undergrad/common/contents/courseoutline/co_BU8501.pdf">
                BU8501 Marketing in the 21st Century
              </a>
              <br />
              Grade: SU
              <br />
              Difficulty: 6/10 <br />
              MCQ Quiz: 17/25 <br />
              Review: Took this mod to clear my GER Biz requirement and at the
              same time to take a module with one of my JC friends who was on
              SUSEP exchange program from NUS. If you are taking to SU, then you
              dont really have to study since almost everything except the MCQ
              is open book
              <br />
            </p>
            <br />
          </div>
        </div>
        <div className={classes.bottom}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default ModuleReview;
