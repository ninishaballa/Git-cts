import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1
          className="text-center text-primary"
          style={({ fontFamily: "Cursive" }, { paddingTop: "100px" })}
        >
          {" "}
          Welcome to BookLife please login to get more updates
          <br />
          Happy Learning !!! ^_^
        </h1>
      </div>
    );
  }
}

export default Home;
