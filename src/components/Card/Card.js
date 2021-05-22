import React from "react";

function Card(props) {
  return (
    <div className="card-group">
      <div className="card">
        <img src={props.image} className="card-img-top h-50" alt={props.alt}/>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              <a href={props.deployed} target="_blank"  rel="noreferrer" className="text-dark">Link to Deployed Page!</a><br/>
                <a href={props.github} target="_blank"  rel="noreferrer" className="text-dark">Link to Repo!</a>
          </small>
       </div>
      </div>
    </div>
    );
}

export default Card