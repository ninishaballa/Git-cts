import React from "react";

const Book = props => {
  return (
    <div>
      <div
        className="row shadow mb-3 mt-5"
        style={{ backgroundColor: "lightblue" }}
      >
        <div className="col-2 pl-0">
          <img src="https://picsum.photos/75" />
        </div>
        <div className="col">
          <h4 className="text-danger">{props.catig.title}</h4>
          <br />
          <h6 className="text-success">
            author: {props.catig.authors}
            <br />
            pageCount: {props.catig.pageCount}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Book;
