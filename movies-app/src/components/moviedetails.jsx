import React, { Component } from "react";
class MovieDetails extends Component {
  state = {};
  // handleBack = () => {
  // this.props.history.push("/movies");
  //};
  render() {
    return (
      <div>
        <h1 className="text-center" style={{ paddingTop: "100px" }}>
          Movie Details
        </h1>
        <h3 className="text-center text">
          Selected movie #{this.props.match.params.id}
        </h3>
        <h3 className="text-center text-warning">
          {this.props.location.state.movie.title}
        </h3>
        {/* <button className="btn btn-primary" onClick={this.handleBack}>
          Back
    </button>*/}
      </div>
    );
  }
}

export default MovieDetails;
