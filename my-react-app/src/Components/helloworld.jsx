import React, { Component } from "react";
//import { findDOMNode } from "react-dom";

class Hello extends Component {
  //class name-last line defaule name must be same
  state = {
    count: 0,
    //links: ["Link1", "Link2", "Link3"]
    links: [
      { id: 1, name: "Google", url: "https://www.google.com/" },
      { id: 2, name: "W3 schools", url: "https://www.w3schools.com/" },
      { id: 3, name: "Babel", url: "https://babeljs.io/" }
    ],

    h1: {
      color: "white",
      backgroundColor: "green",
      padding: "10px",
      fontFamily: "Arial",
      fontSize: "30px"
    },

    students: [
      { rollno: "120", name: "Ninisha", age: "22", dsg: "employee" },
      { rollno: "121", name: "Sailesh", age: "22", dsg: "employee" },
      { rollno: "122", name: "Yashwanth", age: "22", dsg: "employee" },
      { rollno: "123", name: "Pravallika", age: "22", dsg: "employee" }
    ]
  };

  render() {
    if (this.state.students.length == 0) {
      return <p className="alert alert-danger">*coudn't find students table</p>;
    }
    return (
      <div>
        <ul>
          {/*map is a func. that applies to all the links here*/}
          {this.state.links.map(link => (
            <li key={link.id}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </ul>
        {/*for multiple tags must use div tag*/}
        <h1 style={this.state.h1}>Hello cts</h1>
        <button
          className="badge badge-warning"
          style={{ padding: "20px", fontSize: "20px" }}
          onClick={this.decre}
        >
          Decrement
        </button>
        <span className="m-5 p-1 badge badge-primary">{this.state.count}</span>
        <button
          className="badge badge-secondary"
          style={{ padding: "20px", fontSize: "20px" }}
          onClick={this.incre}
        >
          Increment
        </button>
        {/*table.table>thead>tr>th*4  table  table_name  table_head  table_row  table_head(4)*/}
        <table className="table">
          <thead>
            <tr>
              <th>Roll no</th>
              <th>Name</th>
              <th>Age</th>
              <th>dsg</th>
            </tr>
          </thead>
          {/*tbody>tr>td*4*/}
          <tbody>
            {this.state.students.map(student => (
              <tr key={student.rollno}>
                <td>{student.rollno}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.dsg}</td>
                <td>
                  {/*button.btn.btn-sm.btn-danger*/}
                  <button
                    onClick={() => this.delete(student)}
                    className="btn btn-sm btn-danger"
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
  }

  decre = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  incre = () => {
    this.setState({ count: this.state.count + 1 });
  };

  delete = student => {
    const stu = this.state.students.filter(
      age => student.rollno !== age.rollno
    );

    //To update state properties must use 'setstate' else wil not work
    this.setState({ students: stu });
  };
}

export default Hello;
