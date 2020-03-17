import React from "react";
const Movie = props => {
  return (
    <div>
      <div
        className="row shadow pb-3 pt-3 mb-4"
        style={{ backgroundColor: "silver" }}
      >
        <div className="col-lg-4">
          <img src={props.image} alt="image"></img>
        </div>
        <div className="col-lg-8">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              textAlign: "center",
              color: "white"
            }}
          >
            {props.title}
          </span>
          <br></br>
          <span>{props.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
