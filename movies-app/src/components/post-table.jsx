import React, { Component } from "react";
import PostUpdate from "./postupdate";
import PostAdd from "./postadd";

const Posttable = ({
  addPost,
  deletePost,
  getPost,
  searchPost,
  updatePost,
  handleInput,
  post,
  posts
}) => {
  //console.log(posts.length);
  return (
    <div className="container">
      <button
        type="button"
        class="btn btn-info"
        data-toggle="modal"
        data-target="#staticBackdrop11111"
        style={{ marginRight: "20px" }}
      >
        Add post
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
            <div className="modal-body">
              <PostAdd
                addPost={addPost}
                handleInput={handleInput}
                post={post}
              />
            </div>
          </div>
        </div>
      </div>

      {/*<form className="form-inline my-2 my-lg-0" onSubmit={searchPost}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter post id"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
  </form>*/}

      <table className="table">
        {posts.length > 0 && (
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
        )}
        <tbody>
          {posts.map(posti => (
            <tr key={posti.id}>
              <td>{posti.id}</td>
              <td>{posti.title}</td>
              <td>{posti.body}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#staticBackdrop22222"
                  style={{ marginRight: "20px" }}
                  onClick={() => getPost(posti.id)}
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
                        <PostUpdate
                          handleInput={handleInput}
                          updatePost={updatePost}
                          post={post}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePost(posti)}
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

export default Posttable;
