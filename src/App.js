import React, { useState, useEffect } from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Projects from "./Projects/Projects";

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/resume" element = {<Resume />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;