import React, { Component } from "react";
import Input from "./input";
import { Link } from "react-router-dom";

//creating reference obj.
class Login extends Component {
  // username = React.createRef();
  //password = React.createRef();

  state = {
    account: {
      //this is obj. and it contains key-value pairs and is used by refering to name,
      // an array used '[ ]' and contains values
      username: "",
      password: ""
    },
    errors: {}
  };

  handleFormSubmit = event => {
    event.preventDefault(); //will stop data from going to backend
    const errors = {};
    const { username, password } = this.state.account; //this is deconst...ring
    //console.log(username);
    //console.log(password);

    if (username.trim() === "") errors.username = "username is required";

    if (password.trim() === "") errors.password = "password is required";

    //console.log(errors);
    this.setState({ errors });
    //console.log(errors);

    if (username === "ninisha" && password === "123") {
      this.props.history.replace("/");
    } else {
      alert("Invalid credentials... Pls Login again!!");
      //<Link to="/login"></Link>;
    }
  };

  handleInput = event => {
    //console.log("handleInput");
    const account = this.state.account;
    //console.log(event.currentTarget.name);
    //console.log(event.currentTarget.value);
    account[event.currentTarget.name] = event.currentTarget.value; //the 'value' v enter goes to 'name' in account
    //account:username
    this.setState({ account });
  };

  render() {
    //console.log(this.state.errors.username);
    return (
      <div>
        <h1 className="h3 bg-secondary text-white text-center p-3">
          Login Page
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
                      inputName="username"
                      value={this.state.account.username}
                      type="text"
                      handleInput={this.handleInput}
                      label="Username"
                      error={this.state.errors.username}
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
                    onClick={() => this.props.setLogin(true)}
                    style={
                      ({ width: "100%" },
                      { marginbottom: "20px" },
                      { backgroundColor: "BurlyWood" })
                    }
                  >
                    Login
                  </button>

                  <div>
                    <center>
                      <p style={{ color: " purple" }}>
                        Don't have account?<Link to="/register">Register</Link>
                      </p>
                    </center>
                  </div>
                  <div>
                    <Link to="forgotname.html" style={{ marginRight: "240px" }}>
                      Forgot username?
                    </Link>
                    <Link to="forgotpass.html"> Forgotpassword?</Link>
                  </div>
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

export default Login;
