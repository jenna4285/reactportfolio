import React from "react";

function Card() {
    return (
   <div className="card-deck">
      <div className="card mb-3" style="max-width: 540px;">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="/Images/currentphoto.jpg" alt="Person Smiling at Camera" className="rounded float-left card-img"/>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">About Me!</h5>
                <p className="card-text">After spending my adult career in construction as a Project Manager, I decided that I was ready to be the one building things! I took the plunge, and have loved every moment of it! Coding is a new world, one without limits, and one with a huge community of supporters.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Card