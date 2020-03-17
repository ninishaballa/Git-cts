import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";

class Registration extends Component {
  state = {
    account: {
      //this is obj. and it contains key-value pairs and is used by refering to name,
      // an array used '[ ]' and contains values
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    },
    errors: {}
  };

  schema = {
    //for joi    //define pattern for validation here
    firstname: Joi.string()
      .min(3)
      .required(),

    lastname: Joi.string()
      .min(3)
      .required(),

    email: Joi.string().required(),

    password: Joi.string()
      .min(8)
      .alphanum()
      .required()
  };

  handleInput = event => {
    const account = {};
    const errors = {};
    const { name, value } = event.currentTarget;
    //account[event.currentTarget.name] = event.currentTarget.value; //the 'value' v enter goes to 'name' in account
    account[name] = value;
    this.setState({ account });

    //validate
    const obj = { [name]: value }; //firstname: abc
    const sch = { [name]: this.schema[name] };
    /* firstname: Joi.string()
    .min(3)
    .required(),*/

    console.log(obj);
    console.log(sch);

    console.log(Joi.validate(obj, sch));
    const result = Joi.validate(obj, sch);
    if (result.error !== null) {
      errors[name] = result.error.details[0].message;
      this.setState({ errors });
    } else {
      this.setState({ errors });
    }
  };

  handleFormSubmit = event => {
    event.preventDefault(); //will stop data from going to backend
    alert("Successfully registered...!!");
    this.props.history.replace("/login"); //as soon as u submit registeration page will go to login and not revert back
    //For joi
    const account = this.state.account;
    const errors = {};
  };

  render() {
    return (
      <div>
        <h1 className="h3 bg-secondary text-white text-center p-3">
          Registration Page
        </h1>

        <form
          className="w-50 mx-auto mt-5 pt-0"
          onSubmit={this.handleFormSubmit}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <form>
                  <div className="form-group">
                    <Input
                      inputName="firstname"
                      value={this.state.account.firstname}
                      type="text"
                      handleInput={this.handleInput}
                      label="First Name"
                      error={this.state.errors.firstname}
                    />
                  </div>

                  <div className="form-group">
                    <Input
                      inputName="lastname"
                      value={this.state.account.lastname}
                      type="text"
                      handleInput={this.handleInput}
                      label="Last Name"
                      error={this.state.errors.lastname}
                    />
                  </div>

                  <div className="form-group">
                    <Input
                      inputName="email"
                      value={this.state.account.email}
                      type="email"
                      handleInput={this.handleInput}
                      label="E-mail"
                      error={this.state.errors.email}
                    />
                  </div>

                  <div className="form-group">
                    <Input
                      inputName="password"
                      value={this.state.account.password}
                      type="password"
                      handleInput={this.handleInput}
                      label="Password"
                      error={this.state.errors.password}
                    />
                  </div>

                  <button
                    type="submit"
                    className="form-control"
                    style={
                      ({ width: "100%" },
                      { marginbottom: "20px" },
                      { backgroundColor: "BurlyWood" })
                    }
                  >
                    Register
                  </button>
                </form>
              </div>
              <div class="col-mid-1"></div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Registration;
