import React from "react";

function Jumbo () {
    return(
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Jenna Garrison's Portfolio</h1>
        <p className="lead">Take a look at what I've been up to lately!</p>
      </div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="/Images/Jenna Garrison Resume - Current.pdf" target="_blank">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://www.linkedin.com/in/jennaholkgarrison" target="_blank">LinkedIn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/jenna4285" target="_blank">GitHub</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact" target="_blank">Contact</a>
        </li>
      </ul>
    </div>
    )
};

export default Jumbo;