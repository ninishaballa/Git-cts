import React from "react";

const ListGroup = props => {
  console.log(props.category);
  return (
    <div className="mt-5 ml-3">
      <ul className="list-group">
        {props.category.map(cate => (
          <li
            onClick={() => props.handleSelectedCategory(cate)}
            key={cate.id}
            className={
              cate.id === props.handleSelectedCategory
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {cate.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
