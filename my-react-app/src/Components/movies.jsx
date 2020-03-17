import React, { Component } from "react";

class Cinema extends Component {
  state = {
    movies: [
      {
        title: "Terminator",
        genre: "Action",
        numberInStock: "6",
        dailyRentalRate: "2.5"
      },
      {
        title: "Mr.Bean Holiday",
        genre: "Comedy",
        numberInStock: "7",
        dailyRentalRate: "3.6"
      },
      {
        title: "Avengers-Endgame",
        genre: "Si-fi",
        numberInStock: "12",
        dailyRentalRate: "2"
      },
      {
        title: "Zootopia",
        genre: "Animated",
        numberInStock: "10",
        dailyRentalRate: "6"
      },
      {
        title: "Get Out",
        genre: "Thriller",
        numberInStock: "6",
        dailyRentalRate: "2.5"
      }
    ],
    table: {
      fontFamily: "TimesNewRoman",
      backroundColor: "green"
    }
  };

  render() {
    if (this.state.movies.length == 0) {
      return (
        <p
          className="alert alert-danger"
          style={{ textAlign: "center", fontSize: "25px" }}
        >
          can't find any movies -_-'
        </p>
      );
    }
    return (
      <div>
        <p align="center">Total no.of movies: {this.state.movies.length}</p>
        <table className="table" style={this.state.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>NumberInStock</th>
              <th>DailyRentalRate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(mov => (
              <tr key={mov.title}>
                <td>{mov.title}</td>
                <td>{mov.genre}</td>
                <td>{mov.numberInStock}</td>
                <td>{mov.dailyRentalRate}</td>

                <td>
                  <button
                    onClick={() => this.delete(mov)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  delete = mov => {
    const cine = this.state.movies.filter(genre => mov.title !== genre.title);
    //To update state properties must use 'setstate' else wil not work
    this.setState({ movies: cine });
  };
}

export default Cinema;
