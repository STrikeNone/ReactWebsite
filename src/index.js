import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Home from "./components/Home";
import About from "./components/About";
import ModuleReview from "./components/ModuleReview";
import ModuleReview2 from "./components/ModuleReview2";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/ReactWebsite/">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/year1_review" element={<ModuleReview />} />
        <Route exact path="/year2_review" element={<ModuleReview2 />} />
      </Routes>
    </Router>
  </React.StrictMode>,
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
