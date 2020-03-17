import React, { Component } from "react";

class Counter extends Component {
  render() {
    const {
      id,
      value,
      handleIncrement,
      handleDecrement,
      handleDelete
    } = this.props; // object Ddestructuring

    return (
      <div>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.props.handleDecrement(id)}
          disabled={value === 0 ? "disabled" : ""}
        >
          remove
        </button>

        <span className="badge badge-secondary badge-warning">{value}</span>

        {/*to access parent properties in child use 'props' as shown below*/}
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.props.handleIncrement(id)}
        >
          add
        </button>

        <buttons
          className="btn btn-sm btn-danger"
          onClick={() => this.props.handleDelete(id)}
        >
          Delete
        </buttons>
      </div>
    );
  }
}

export default Counter;
