import React, { Component } from "react";
class BookDetails extends Component {
  state = {};

  render() {
    return (
      <div>
        <h1 className="text-center" style={{ paddingTop: "100px" }}>
          Book Details
        </h1>
        <h3 className="text-center text-success">
          Selected Book id is: {this.props.match.params.id}
        </h3>
        <h3 className="text-center text-warning">
          Title : {this.props.location.state.catig.title}
        </h3>
      </div>
    );
  }
}

export default BookDetails;
