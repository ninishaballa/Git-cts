import React, { Component } from "react";
import Input from "./input";
//import Joi from "joi-browser";
//import { Link } from "react-router-dom";

const UpdateForm = props => {
  return (
    <div>
      <h1 className="h3 bg-secondary text-white text-center p-3">
        Update Employee details
      </h1>

      <form className="w-50 mx-auto mt-5 pt-0" onSubmit={props.updateEmp}>
        <div className="container">
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
              <div className="form-group">
                <Input
                  className="form-control"
                  inputName="empid"
                  value={props.employee.empid}
                  type="text"
                  handleInput={props.handleInput}
                  label="Emp_Id"
                  disabled="true"
                  //error={this.state.errors.empid}
                />
              </div>

              <div className="form-group">
                <Input
                  className="form-control"
                  inputName="empname"
                  value={props.employee.empname}
                  type="text"
                  handleInput={props.handleInput}
                  label="Emp_Name"
                  //error={this.state.errors.empname}
                />
              </div>

              <div className="form-group">
                <Input
                  className="form-control"
                  inputName="empemail"
                  value={props.employee.empemail}
                  type="email"
                  handleInput={props.handleInput}
                  label="Emp_E-mail"
                  //error={this.state.errors.empemail}
                />
              </div>

              <div className="form-group">
                <Input
                  className="form-control"
                  inputName="empdept"
                  value={props.employee.empdept}
                  type="text"
                  handleInput={props.handleInput}
                  label="Emp_Dept"
                  //error={this.state.errors.empdept}
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

export default UpdateForm;
