import React, { Component } from "react";
import http from "../service/httpservice";
import TodoTable from "./todotable";
import { toast } from "react-toastify";
import Spinner from "./spinners";
import Pagination from "react-js-pagination";
import _ from "lodash";

const baseUrl = "https://jsonplaceholder.typicode.com";

class ToDo extends Component {
  constructor() {
    super();
    //console.log("Inside Constructor");
  }

  state = {
    todos: [],
    subtodo: [],
    todo: {
      id: "",
      title: "",
      completed: ""
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
    //console.log("Inside componentWillUnmount");
  }

  async componentDidMount() {
    //when v use await most put async beside function
    //console.log("Inside componentDidMount");
    const promise = await http.get(baseUrl + "/todos"); //await is to read the code at backend
    console.log(promise);

    this.setState({ todos: promise.data, loading: false });
    this.setState({ subtodo: promise.data });
    //console.log(promise.data[0]);
  }

  componentDidUpdate() {
    //console.log("Inside componentDidUpdate");
  }

  addtodo = event => {
    event.preventDefault();
    const todos = [this.state.todo, ...this.state.todos]; //spread operator will spread all obj's-[{e1},{e2},{e3},{e4}]
    console.log("todos", todos);
    //const response = await http.todo(baseUrl + "/todos", todos);
    this.setState({ todos });
  };

  completed = () => {
    const comp = this.state.subtodo.filter(c => c.completed === true);
    this.setState({ todos: comp });
    //this.setState({ todoi: comp });
  };

  pending = () => {
    //event.preventDefault();
    // console.log("pending");
    const comp = this.state.subtodo.filter(c => c.completed === false);
    this.setState({ todos: comp });
  };

  deletetodo = async todo => {
    const orig = this.state.todos;
    const todos = this.state.todos.filter(p => p.id !== todo.id);
    this.setState({ todos });
    http.delete(baseUrl + "/todos/" + todo.id);

    try {
      await http.delete("hfeliu" + baseUrl + "todos/" + todo.id);
    } catch (err) {
      if (err.response && err.response.status == 404) {
        toast.error("todo has been deleted"); //can replace toast with toast.error
      } else {
        //alert("Failed to delete");
        this.setState({ todos: orig });
      }
    }
  };

  gettodo = id => {
    const todo = this.state.todos.filter(to => to.id == id);
    this.setState({ todo: todo[0] });
  };

  updatetodo = async todo => {
    console.log(todo);
    todo.title = "New Title";
    const response = http.put(baseUrl + "todos/" + todo.id, todo); //can use todo or put, can be used for whole todo data
    // http.patch("https://jsonplaceholder.typicode.com/todos/`${todo.id}`", {title:"New Title"}); this is for patch, can be used for only particular field
    console.log(response);

    const indx = this.state.todos.indexOf(todo);
    const todos = this.state.todos;
    todos[indx] = (await response).data;
    this.setState({ todos });
  };

  handleInput = event => {
    const todo = this.state.todo;
    const { name, value } = event.currentTarget;
    todo[name] = value;
    this.setState({ todo });
    //const todos = this.state.todos;
  };

  render() {
    //console.log("Inside render");

    const paginatedtodo = this.paginate(
      this.state.todos,
      this.state.activePage,
      this.state.pageSize
    );
    //console.log(this.state.todos.length);
    return (
      <div>
        {this.state.loading && <Spinner />}
        <TodoTable
          addtodo={this.addtodo}
          updatetodo={this.updatetodo}
          deletetodo={this.deletetodo}
          gettodo={this.gettodo}
          handleInput={this.handleInput}
          todo={this.state.todo}
          todos={paginatedtodo}
          completed={this.completed}
          pending={this.pending}
        />
        <Pagination
          itemClass="page-item "
          linkClass="page-link ml-5"
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.state.todos.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
    );
  }
}

export default ToDo;
