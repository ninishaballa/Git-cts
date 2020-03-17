import React, { Component } from "react";
//import Counter from "./counter";

class Counters extends Component {
  //Counters is parent class and Counter is child class
  /* state = {
    count: [
      { id: 1, value: 10 },
      { id: 2, value: 20 },
      { id: 3, value: 30 },
      { id: 4, value: 40 },
      { id: 5, value: 50 }
    ]
  };*/
  render() {
    //const { id, value } = this.state.count;
    return (
      <div>
        {/*composing components
        {this.state.count.map(coun => (
          <Counter
            id={coun.id}
            value={coun.value}
            handleIncrement={this.incre}
            handleDecrement={this.decre}
          />
        ))}*/}
        {/*{this.state.count.map(counter => (
          <Counter counter={this.state.count} />
        ))}}
        {/*do this, to pass parent properties to value child*/}
      </div>
    );
  }

  /* decre = id => {
    console.log("inside decre() method", id + " Decre");
    const counters = this.state.count;

    counters.map(counter => {
      if (counter.id == id && counter.value > 0) counter.value -= 1;
    });

    this.setState({ counters });
  };

  incre = id => {
    console.log("inside incre() method", id + " Incre");

    const counters = this.state.count;
    counters.map(counter => {
      if (counter.id == id) counter.value += 1;
    });
    this.setState({ counters });
  };*/
}

export default Counters;
