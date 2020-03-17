import NavBar from "./Components/navbar";
import Counters from "./Components/counters";
import Counter from "./Components/counter";

import React, { Component } from "react";

class App extends Component {
  state = {
    totalItems: 0,
    count: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  render() {
    const { id, value } = this.state.count;
    return (
      <div>
        <NavBar totalItems={this.state.totalItems} />
        <buttons className="btn btn-sm btn-warning" onClick={this.reset}>
          Reset
        </buttons>
        {this.state.count.map(coun => (
          <Counter
            id={coun.id}
            value={coun.value}
            handleIncrement={this.incre}
            handleDecrement={this.decre}
            handleDelete={this.delete}
            // handleReset={this.reset}
          />
        ))}
        <Counters
          count={this.state.count}
          handleIncrement={this.incre}
          handleDecrement={this.decre}
          handleDelete={this.delete}
          //handleReset={this.reset}
        />
      </div>
    );
  }

  decre = id => {
    console.log("inside decre() method", id + " Decre");
    const counters = this.state.count;

    counters.map(counter => {
      if (counter.id == id && counter.value > 0) counter.value -= 1;
    });

    this.setState({ counters });

    this.state.totalItems -= 1;
  };

  incre = id => {
    console.log("inside incre() method", id + " Incre");

    const counters = this.state.count;
    counters.map(counter => {
      if (counter.id == id) counter.value += 1;
    });
    this.setState({ counters });

    this.state.totalItems += 1;
  };

  delete = id => {
    this.state.count.map(rem => {
      const counts = this.state.count.filter(f => id !== f.id);
      this.setState({ count: counts });
    });

    const counters = this.state.count;
    counters.map(counter => {
      if (counter.id == id) this.state.totalItems -= counter.value;
    });
  };

  reset = () => {
    const counters = this.state.count;
    counters.map(counter => {
      counter.value = 0;
    });
    this.setState({ counters });
    this.state.totalItems = 0;
  };
}

export default App;
