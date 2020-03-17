import React, { Component } from "react";

class Logout extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1
          className="text-center text-primary"
          style={({ fontFamily: "Cursive" }, { paddingTop: "100px" })}
        >
          {" "}
          You have successfully Logged Out !!
        </h1>
      </div>
    );
  }
}

export default Logout;
