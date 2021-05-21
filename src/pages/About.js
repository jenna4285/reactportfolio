import React from "react";

function About() {
    return (
    <div className="d-flex justify-content-center">
        <div className="card-deck">
        < div className="card mb-3" >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="../Images/currentphoto.jpg" alt="Person Smiling at Camera" className="rounded float-left card-img"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">About Me!</h5>
                <p className="card-text">After spending my adult career in construction as a Project Manager, I decided that I was ready to be the one building things! I took the plunge, and have loved every moment of it! Coding is a new world, one without limits, and one with a huge community of supporters.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="../Images/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb-s800-c85.jpeg" alt="Planet Earth from Space with Moon in Distance" className="rounded float-left card-img"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Green Search!</h5>
                <p className="card-text"><a href="./Green/green.html" target="_blank" >Utilize</a> my Google Custom Search API to shop for plastic free/zero waste products! The search results will prioritize sustainable sites and products where available..</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div >
    )
};

export default About;