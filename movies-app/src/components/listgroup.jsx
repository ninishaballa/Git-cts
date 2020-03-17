import React from "react";
const ListGroup = props => {
  return (
    <div className="mt-5 ml-3">
      <ul className="list-group">
        {props.genres.map(genre => (
          <li
            onClick={() => props.handleSelectedGenre(genre)}
            key={genre.id}
            className={
              genre.id === props.selectedGenre
                ? "list-group-item list-group-item-dark"
                : "list-group-item "
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
{
  /*
  <div>
    <div className="list-group">
      <button
        type="button"
        className="list-group-item list-group-item-success"
        onClick={props.handleMovie}
      >
        Movie Genre
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action"
        onClick={props.handleAction}
      >
        Action
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action"
        onClick={props.handleComedy}
      >
        Comedy
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action"
        onClick={props.handleThriller}
      >
        Thriller
      </button>
      <button
        type="button"
        className="list-group-item list-group-item-action"
        onClick={props.handleAnimation}
      >
        Animation
      </button>
    </div>
    */
}
export default ListGroup;
