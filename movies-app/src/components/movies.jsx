import React from "react";
import Movie from "./movie";
import { Link } from "react-router-dom";

const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map(movie => (
        <Link
          to={{ pathname: `/movies/${movie._id}`, state: { movie } }}
          style={{ textDecoration: "none" }}
        >
          <Movie
            key={movie._id}
            title={movie.title}
            description={movie.description}
            image={movie.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default Movies;
