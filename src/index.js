import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Home from "./components/Home";
import About from "./components/About";
import ModuleReview from "./components/ModuleReview";
import ModuleReview2 from "./components/ModuleReview2";
import Notes from "./components/Notes";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router basename="/">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/year1_review" element={<ModuleReview />} />
      <Route path="/year2_review" element={<ModuleReview2 />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ReactDOM.render(
// <React.StrictMode>
//   <App />
// </React.StrictMode>, document.getElementById("root")
// );
// REMEMBER TO UPDATE package.json homepage
