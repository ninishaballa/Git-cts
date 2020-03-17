import React, { Component } from "react";
//import http from "http";
import http from "../services/httpservice";
import Posttable from "./post-table";
import { toast } from "react-toastify";
import Spinner from "./spinners";
import Pagination from "react-js-pagination";
import _ from "lodash";

const baseUrl = "https://jsonplaceholder.typicode.com";

class Post extends Component {
  constructor() {
    super();
    //console.log("Inside Constructor");
  }

  state = {
    posts: [],

    post: {
      id: "",
      title: "",
      body: ""
    },
    loading: true,
    activePage: 1,
    pageSize: 10
  };

  handlePageChange(PageNumber) {
    this.setState({ activePage: PageNumber });
  }

  paginate = (items, activePage, pageSize) => {
    const startIndex = (activePage - 1) * pageSize;
    return _(items)
      .slice(startIndex)
      .take(pageSize)
      .value();
  };

  componentWillUnmount() {
    console.log("Inside componentWillUnmount");
  }

  async componentDidMount() {
    //when v use await most put async beside function
    console.log("Inside componentDidMount");
    const promise = await http.get(baseUrl + "/posts"); //await is to read the code at backend
    console.log(promise);

    this.setState({ posts: promise.data, loading: false });
    console.log(promise.data[0]);
  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate");
  }

  addPost = event => {
    /*const obj = { title: "New Title", body: "This is body....." };
    const response = await http.post(baseUrl + "/posts", obj); //takes 2 args,the link and obj.
    console.log(response);

    const posts = { ...this.state.posts, obj };
    this.setState({ posts });*/

    event.preventDefault();
    const posts = [this.state.post, ...this.state.posts]; //spread operator will spread all obj's-[{e1},{e2},{e3},{e4}]
    console.log("posts", posts);
    //const response = await http.post(baseUrl + "/posts", posts);
    this.setState({ posts });
  };

  deletePost = async post => {
    const orig = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });
    http.delete(baseUrl + "/posts/" + post.id);

    try {
      await http.delete("hfeliu" + baseUrl + "/posts/" + post.id);
    } catch (err) {
      if (err.response && err.response.status == 404) {
        toast.error("Post has been deleted"); //can replace toast with toast.error
      } else {
        //alert("Failed to delete");
        this.setState({ posts: orig });
      }
    }
  };

  getPost = id => {
    const post = this.state.posts.filter(po => po.id == id);
    this.setState({ post: post[0] });
  };

  updatePost = async post => {
    console.log(post);
    post.title = "New Title";
    const response = http.put(baseUrl + "/posts/" + post.id, post); //can use post or put, can be used for whole post data
    // http.patch("https://jsonplaceholder.typicode.com/posts/`${post.id}`", {title:"New Title"}); this is for patch, can be used for only particular field
    console.log(response);

    const indx = this.state.posts.indexOf(post);
    const posts = this.state.posts;
    posts[indx] = (await response).data;
    this.setState({ posts });
  };

  handleInput = event => {
    const post = this.state.post;
    const { name, value } = event.currentTarget;
    post[name] = value;
    this.setState({ post });
    //sconst posts = this.state.posts;
  };

  /*component lifecycle methods

constructor()-instance clientInformation    1st
render()-   2nd
componentDidMount-component loading     3rd
componentDidUpdate-will exwcute when any updations going on     4th
componentWillUnmount-will use this when we want to add anything in closing time    5th*/

  render() {
    console.log("Inside render");

    const paginatedPost = this.paginate(
      this.state.posts,
      this.state.activePage,
      this.state.pageSize
    );
    console.log(this.state.posts.length);
    return (
      <div>
        {this.state.loading && <Spinner />}
        <Posttable
          addPost={this.addPost}
          updatePost={this.updatePost}
          deletePost={this.deletePost}
          getPost={this.getPost}
          handleInput={this.handleInput}
          post={this.state.post}
          posts={paginatedPost}
        />
        <Pagination
          itemClass="page-item "
          linkClass="page-link ml-5"
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.state.posts.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default Post;
