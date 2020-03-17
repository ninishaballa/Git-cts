import React, { Component } from "react";
import _ from "lodash";
import NavBar from "./components/navbar";
import ListGroup from "./components/listgroup";
import Movies from "./components/movies";
import Pagination from "./components/pagination";

import terminator from "./components/images/Terminator.jpg";
import DieHard from "./components/images/dieHard.jpg";
import GetOut from "./components/images/GetOut.jpg";
import TriptoItaly from "./components/images/TheTriptoItaly.jpg";
import Airplane from "./components/images/Airplane.jpg";
import Jumanji from "./components/images/Jumanji.jpg";
import ToyStory from "./components/images/ToyStory.jpg";
import TheSixthSense from "./components/images/TheSixthSense.jpg";
import TheAvengers from "./components/images/TheAvengers.jpg";

import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Logout from "./components/logout";
import NoFile from "./components/nofile";
import MovieDetails from "./components/moviedetails";
import Registration from "./components/registration";
import Employees from "./components/employees";
import Post from "./components/post";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    movies: [
      {
        _id: "5c15",
        title: "Terminator",
        genre: "Action",
        numberInStock: 6,
        dailyRentalRate: 2.5,
        image: terminator,
        description:
          "A cyborg assassin is sent back in time to kill Sarah, a waitress, in a bid to stop her son who will wage a long war against his enemy in the future unless the course of history is altered."
      },
      {
        _id: "5a16",
        title: "Die Hard",
        genre: "Action",
        numberInStock: 5,
        dailyRentalRate: 4,
        image: DieHard,
        description:
          "Die Hard is a 1988 American action film directed by John McTiernan, written by Jeb Stuart and Steven E. de Souza. Based on Roderick Thorp's 1979 novel Nothing Lasts Forever, it was produced by the Gordon Company and Silver Pictures, and distributed by 20th Century Fox."
      },
      {
        _id: "5t17",
        title: "Get Out",
        genre: "Thriller",
        numberInStock: 8,
        dailyRentalRate: 3,
        image: GetOut,
        description:
          "Get Out is a 2017 American horror film, written and directed by Jordan Peele in his directorial debut. It stars Daniel Kaluuya, Allison Williams, Lil Rel Howery, Bradley Whitford, Caleb Landry Jones, Stephen Root, and Catherine Keener. Get Out follows Chris Washington (Kaluuya), a young African-American man who uncovers a disturbing secret when he meets the family of his white girlfriend, Rose Armitage (Williams)."
      },
      {
        _id: "6c18",
        title: "Trip to Italy",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        image: TriptoItaly,
        description:
          "The Trip to Italy is a 2014 British comedy film written and directed by Michael Winterbottom. It is the sequel of Winterbottom's TV series The Trip, and similarly stars Steve Coogan and Rob Brydon as fictionalized versions of themselves. The film had its world premiere at the 2014 Sundance Film Festival on 20 January 2014.[4][5] Following the premiere, a second TV series, also titled The Trip to Italy, broadcast on BBC Two."
      },
      {
        _id: "5d19",
        title: "Airplane",
        genre: "Comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        image: Airplane,
        description:
          "Airplane! (alternatively titled Flying High!)[5] is a 1980 American satirical disaster film written and directed by David and Jerry Zucker and Jim Abrahams,[6] and produced by Jon Davison. It stars Robert Hays and Julie Hagerty and features Leslie Nielsen, Robert Stack, Lloyd Bridges, Peter Graves, Kareem Abdul-Jabbar, and Lorna Patterson.[6] The film is a parody of the disaster film genre, particularly the 1957 Paramount film Zero Hour!, from which it borrows the plot and the central characters."
      },
      {
        _id: "5a20",
        title: "Jumanji",
        genre: "Animation",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        image: Jumanji,
        description:
          "Jumanji: Welcome to the Jungle is a 2017 American fantasy adventure comedy film directed by Jake Kasdan, co-written by Chris McKenna, Erik Sommers, Scott Rosenberg, and Jeff Pinkner, and starring Dwayne Johnson, Jack Black, Kevin Hart, Karen Gillan, Nick Jonas, and Bobby Cannavale. It is the third installment of the Jumanji franchise, after Zathura: A Space Adventure (2005) and a direct sequel to Jumanji (1995), based on the 1981 children's book of the same name by Chris Van Allsburg."
      },
      {
        _id: "6b23",
        title: "Toy Story",
        genre: "Thriller",
        numberInStock: 7,
        dailyRentalRate: 4.5,
        image: ToyStory,
        description:
          "Toy Story is a 1995 American computer-animated buddy comedy film produced by Pixar Animation Studios and released by Walt Disney Pictures. The feature film directorial debut of John Lasseter, it was the first entirely computer-animated feature film, as well as the first feature film from Pixar."
      },
      {
        _id: "6b22",
        title: "The Sixth Sense",
        genre: "Thriller",
        numberInStock: 4,
        dailyRentalRate: 3.5,
        image: TheSixthSense,
        description:
          "The Sixth Sense is a 1999 American supernatural psychological thriller film[2] written and directed by M. Night Shyamalan. The film tells the story of Cole Sear (Haley Joel Osment), a boy who is able to see and talk to the dead, and Malcolm Crowe (Bruce Willis), a child psychologist who tries to help him."
      },
      {
        _id: "5b21",
        title: "The Avengers",
        genre: "Action",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        image: TheAvengers,
        description:
          "The Avengers premiered at Hollywood's El Capitan Theatre on April 11, 2012, and was released in the United States on May 4, 2012. The film received praise for Whedon's direction and screenplay, visual effects, action sequences, acting, and musical score, and garnered numerous awards and nominations including Academy Award and BAFTA nominations for achievements in visual effects. It set or tied numerous box office records, including the biggest opening weekend in the United States and Canada. "
      }
    ],
    genres: [
      { id: 1, name: "Action" },
      { id: 2, name: "Comedy" },
      { id: 3, name: "Thriller" },
      { id: 4, name: "Animation" }
    ],
    selectedGenre: 1,
    pageSize: 2,
    selectedPage: 1,
    submovie: [],

    isLoggedin: false
    //isLoggedout: true
  };
  handleSelectedGenre = genre => {
    console.log(genre);
    this.setState({ selectedGenre: genre.id });
  };
  handlePageSelect = page => {
    this.setState({ selectedPage: page });
  };
  paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items)
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  action = () => {
    var movies1 = this.state.movies.filter(mov => mov.genre === "Action");
    this.setState({ submovie: movies1 });
  };
  comedy = () => {
    var movies1 = this.state.movies.filter(mov => mov.genre === "Comedy");
    this.setState({ submovie: movies1 });
  };
  thriller = () => {
    var movies1 = this.state.movies.filter(mov => mov.genre === "Thriller");
    this.setState({ submovie: movies1 });
  };
  animation = () => {
    var movies1 = this.state.movies.filter(mov => mov.genre === "Animation");
    this.setState({ submovie: movies1 });
  };
  movieGenre = () => {
    const movies = this.state.movies;
    this.setState({ submovie: movies });
  };

  setLogin = status => {
    this.setState({ isLoggedin: status }); //setting login value
  };
  //setLogout = status => {
  //this.setState({ isLoggedout: status }); //setting logout value
  //};

  render() {
    //console.log(this.state.submovie.length);
    const { genres } = this.state;
    const { selectedGenre } = this.state;
    // filtering movies based on genre
    const genre = genres.filter(genre => genre.id === selectedGenre);

    const filteredMovies = this.state.movies.filter(
      movie => movie.genre === genre[0].name
    );

    const paginatedMovies = this.paginate(
      filteredMovies,
      this.state.selectedPage,
      this.state.pageSize,
      this.state.movies
    );

    return (
      <div>
        <ToastContainer />
        <NavBar
          isLoggedin={this.state.isLoggedin}
          // isLoggedout={this.state.isLoggedout}
          setLogin={this.setLogin}
        />

        <Switch>
          <Route
            path="/login"
            render={props => (
              <Login
                setLogin={this.setLogin}
                //setLogout={this.setLogout}
                isLoggedin={this.state.isLoggedin}
                //isLoggedout={this.isLoggedout}
                {...props}
              />
            )}
          />

          <Route path="/register" component={Registration} />
          <Route path="/logout" component={Logout} />

          {this.state.isLoggedin ? (
            //<Route path="/movies/:id?" component={MovieDetails} />
            <Route path="/movies" component={Movies} />
          ) : (
            <Redirect to="/login" />
          )}
          {/*<Route path="/login" component={Login} />*/}

          {this.state.isLoggedin ? (
            <Route path="/employees" component={Employees} />
          ) : (
            <Redirect to="/login" />
          )}

          {this.state.isLoggedin ? (
            <Route path="/post" component={Post} />
          ) : (
            <Redirect to="/login" />
          )}

          <Route path="/" component={Home} />
          <Redirect from="/home" to="/" />
          <Route component={NoFile} />
        </Switch>

        <div className="row m-3">
          <div className="col-lg-3 mt-3">
            <ListGroup
              genres={genres}
              selectedGenre={selectedGenre}
              handleSelectedGenre={this.handleSelectedGenre}
              handleAction={this.action}
              handleComedy={this.comedy}
              handleThriller={this.thriller}
              handleAnimation={this.animation}
              handleMovie={this.movieGenre}
            />
          </div>
          <div className="col-lg-8">
            <h4>Total number of movies: {filteredMovies.length}</h4>
            <Movies movies={paginatedMovies} />

            <Pagination
              pageSize={this.state.pageSize}
              totalMovies={filteredMovies.length}
              selectedPage={this.state.selectedPage}
              handlePageSelect={this.handlePageSelect}
            />
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default App;
