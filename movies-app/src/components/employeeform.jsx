import React, { Component } from "react";
import Input from "./input";
//import Joi from "joi-browser";
//import { Link } from "react-router-dom";

const EmployeeForm = ({
  empid,
  empname,
  empemail,
  empdept,
  addEmp,
  handleInput
}) => {
  return (
    <div>
      <h1 className="h3 bg-secondary text-white text-center p-3">
        Add an Employee
      </h1>

      <form className="w-50 mx-auto mt-5 pt-0" onSubmit={addEmp}>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="form-group">
                <Input
                  className="form-control"
                  inputName="empid"
                  value={empid}
                  type="text"
                  handleInput={handleInput}
                  label="Emp_Id"
                  //error={this.state.errors.empid}
                />
              </div>

              <div className="form-group">
                <Input
                  className="form-control"
                  inputName="empname"
                  value={empname}
                  type="text"
                  handleInput={handleInput}
                  label="Emp_Name"
                  //error={this.state.errors.empname}
                />
              </div>

              <div className="form-group">
                <Input
                  className="form-control"
                  inputName="empemail"
                  value={empemail}
                  type="email"
                  handleInput={handleInput}
                  label="Emp_E-mail"
                  //error={this.state.errors.empemail}
                />
              </div>

              <div className="form-group">
                <Input
                  className="form-control"
                  inputName="empdept"
                  value={empdept}
                  type="text"
                  handleInput={handleInput}
                  label="Emp_Dept"
                  //error={this.state.errors.empdept}
                />
              </div>

              <button
                type="submit"
                className="form-control"
                style={
                  ({ width: "100%" },
                  { marginbottom: "20px" },
                  { backgroundColor: "indianred" })
                }
              >
                Add
              </button>
            </div>
            <div class="col-mid-1"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployeeForm;
