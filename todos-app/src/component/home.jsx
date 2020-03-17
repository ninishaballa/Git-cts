import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1
          className="text-center"
          style={({ fontFamily: "Arial" }, { color: "olive" })}
        >
          Welcome to TO-DO's app, where you can put a list of all your works and
          remind yourself of all the pending and completed tasks all day.....
        </h1>
      </div>
    );
  }
}

export default Home;
