import React, { Component } from "react";

class NoFile extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1
          className="text-center text-danger"
          style={{ fontFamily: "cursive" }}
        >
          404-File not found
        </h1>
      </div>
    );
  }
}

export default NoFile;
