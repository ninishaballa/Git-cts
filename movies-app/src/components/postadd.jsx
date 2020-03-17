import React, { Component } from "react";
import Input from "./input";
//import Joi from "joi-browser";
//import { Link } from "react-router-dom";

const PostAdd = ({ addPost, handleInput, post }) => {
  return (
    <div>
      <h1 className="h3 bg-secondary text-white text-center p-3">
        Add Post detalis
      </h1>

      <form className="w-50 mx-auto mt-5 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="form-group">
                <Input
                  className="form-control"
                  inputName="id"
                  value={post.id}
                  type="text"
                  handleInput={handleInput}
                  label="Id"
                />
              </div>

              <div className="form-group">
                <Input
                  className="form-control"
                  inputName="title"
                  value={post.title}
                  type="text"
                  handleInput={handleInput}
                  label="Title"
                />
              </div>

              <div className="form-group">
                <Input
                  className="form-control"
                  inputName="body"
                  value={post.body}
                  type="text"
                  handleInput={handleInput}
                  label="Body"
                />
              </div>

              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="form-control"
                data-dismiss="modal"
                style={
                  ({ width: "100%" },
                  { marginbottom: "20px" },
                  { backgroundColor: "indianred" })
                }
                onClick={addPost}
              >
                save
              </button>
            </div>
            <div class="col-mid-1"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostAdd;
