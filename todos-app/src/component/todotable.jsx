import React, { Component } from "react";
import TodoUpdate from "./todoupdate";
import TodoAdd from "./todoadd";
import Joi from "joi-browser";

const TodoTable = ({
  addtodo,
  deletetodo,
  gettodo,
  updatetodo,
  handleInput,
  todo,
  todos,
  completed,
  pending
}) => {
  //console.log(todos.length);
  return (
    <div className="container">
      <button
        type="button"
        class="btn btn-info"
        data-toggle="modal"
        data-target="#staticBackdrop11111"
        style={{ marginRight: "20px" }}
      >
        Add a new one
      </button>
      <div
        className="modal fade"
        id="staticBackdrop11111"
        data-backdrop="static"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <TodoAdd
                addtodo={addtodo}
                handleInput={handleInput}
                todo={todo}
              />
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-info"
        style={{ marginRight: "20px" }}
        onClick={completed}
      >
        Completed
      </button>

      <button
        type="button"
        class="btn btn-info"
        style={{ marginRight: "20px" }}
        onClick={pending}
      >
        Pending
      </button>

      <table className="table">
        {todos.length > 0 && (
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Completed status</th>
            </tr>
          </thead>
        )}
        <tbody>
          {todos.map(todoi => (
            <tr key={todoi.id}>
              <td>{todoi.id}</td>
              <td>{todoi.title}</td>
              <td>{todoi.completed.toString()}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#staticBackdrop22222"
                  style={{ marginRight: "20px" }}
                  onClick={() => gettodo(todoi.id)}
                >
                  Update
                </button>
                <div
                  className="modal fade"
                  id="staticBackdrop22222"
                  data-backdrop="static"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <TodoUpdate
                          handleInput={handleInput}
                          updatetodo={updatetodo}
                          todo={todo}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletetodo(todoi)}
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
};

export default TodoTable;
