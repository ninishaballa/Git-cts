import React, { Component } from "react";
//import EmployeeForm from "./employeeform";
import UpdateForm from "./updateform";

const EmployeeDetails = ({
  employee,
  employees,
  getEmp,
  deleteEmp,
  updateEmp,
  handleInput
}) => {
  // const emp = props.emp;
  return (
    <div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Employee_Id</th>
              <th>Employee_Name</th>
              <th>Employee_E-mail</th>
              <th>Employee_Dept</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(empd => (
              <tr>
                <td>{empd.empid}</td>
                <td>{empd.empname}</td>
                <td>{empd.empemail}</td>
                <td>{empd.empdept}</td>

                <td>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#staticBackdrop"
                    style={{ marginRight: "20px" }}
                    onClick={() => getEmp(empd.empid)}
                  >
                    update
                  </button>

                  <div
                    className="modal fade"
                    id="staticBackdrop"
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
                          <UpdateForm
                            updateEmp={updateEmp}
                            handleInput={handleInput}
                            employee={employee}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-danger"
                    onClick={() => deleteEmp(empd.empid)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeDetails;
