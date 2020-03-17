import React, { Component } from "react";
import EmployeeDetails from "./employeedetails";
import EmployeeForm from "./employeeform";
//import UpdateForm from "./updateform";

class Employees extends Component {
  state = {
    employees: [
      {
        empid: "1000",
        empname: "Selva",
        empemail: "selva@gmail.com",
        empdept: "Accounts"
      },
      {
        empid: "1001",
        empname: "Ramya",
        empemail: "ramya@gmail.com",
        empdept: "Research"
      },
      {
        empid: "1002",
        empname: "Sandeep",
        empemail: "sandy@gmail.com",
        empdept: "Research"
      },
      {
        empid: "1003",
        empname: "pravallika",
        empemail: "prava@gmail.com",
        empdept: "Sales"
      },
      {
        empid: "1004",
        empname: "Gayathri",
        empemail: "gayathri@gmail.com",
        empdept: "Sales"
      },
      {
        empid: "1005",
        empname: "Jay",
        empemail: "jay@gmail.com",
        empdept: "Operation"
      }
    ],
    employee: {
      id: "",
      name: "",
      email: "",
      dept: ""
    }
  };
  addEmp = event => {
    event.preventDefault();
    const employees = [...this.state.employees, this.state.employee]; //spread operator will spread all obj's-[{e1},{e2},{e3},{e4}]
    this.setState({ employees });
  };

  getEmp = empid => {
    //update btn
    const employee = this.state.employees.filter(emp => emp.empid == empid);
    this.setState({ employee: employee[0] });
  };

  deleteEmp = empid => {
    const employees = this.state.employees.filter(emp => emp.empid !== empid);
    this.setState({ employees });
  };

  updateEmp = event => {
    //save btn
    event.preventDefault();
    const emp = this.state.employee;
    const employees = this.state.employees;
    const indx = this.state.employees.indexOf(emp);
    employees[indx] = emp;
    this.setState({ employees });
  };

  handleInput = event => {
    const employee = this.state.employee;
    //const errors = {};
    const { name, value } = event.currentTarget;
    //account[event.currentTarget.name] = event.currentTarget.value; //the 'value' v enter goes to 'name' in account
    employee[name] = value;
    this.setState({ employee });

    //validate
    /*const obj = { [name]: value }; //firstname: abc
    const sch = { [name]: this.schema[name] };
     firstname: Joi.string()
    .min(3)
    .required(),*/

    /*console.log(obj);
    console.log(sch);

    console.log(Joi.validate(obj, sch));
    const result = Joi.validate(obj, sch);
    if (result.error !== null) {
      errors[name] = result.error.details[0].message;
      this.setState({ errors });
    } else {
      this.setState({ errors });*/
  };

  render() {
    return (
      <div>
        <EmployeeDetails
          deleteEmp={this.deleteEmp}
          updateEmp={this.updateEmp}
          getEmp={this.getEmp}
          employees={this.state.employees}
          employee={this.state.employee}
          handleInput={this.handleInput}
        />
        <EmployeeForm addEmp={this.addEmp} handleInput={this.handleInput} />
      </div>
    );
  }
}

export default Employees;
