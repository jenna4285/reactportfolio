import React from "react";
import About from "../About/About";

import { Link, useLocation, Route, useRouteMatch } from "react-router-dom";


function Jumbo (props) {
  const location = useLocation();
  let {path, url} = useRouteMatch()
  console.log(url, path);
    return(
    
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Jenna Garrison's Portfolio</h1>
        <p className="lead">Take a look at what I've been up to lately!</p>
      </div>
      <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link
          to="/About" className={window.location.pathname === '/About' ? 'nav-link' : 'nav-link'}
        >About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Jenna_Garrison_ Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://www.linkedin.com/in/jennaholkgarrison" target="_blank" rel="noreferrer">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/jenna4285" target="_blank" rel="noreferrer">GitHub</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact" target="_blank" rel="noreferrer">Contact</a>
        </li>
      </ul>
    </div>
    )
};

export default Jumbo;