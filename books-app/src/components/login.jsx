import React, { Component } from "react";

//creating reference obj.
class Login extends Component {
  username = React.createRef();
  password = React.createRef();

  state = {
    account: {
      username: "",
      password: ""
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    //console.log(this.username.current.value);
    //console.log(this.password.current.value);
  };
  handleInput = event => {
    const account = this.state.account;
    console.log(event.currentTarget.name);
    console.log(event.currentTarget.value);
    account[event.currentTarget.name] = event.currentTarget.value;
    //account:username
    this.setState({ account: account });
  };

  render() {
    return (
      <div>
        <form
          className="w-50 mx-auto mt-5 pt-0"
          onSubmit={this.handleFormSubmit}
        >
          <div className="container">
            <h1 className="h3 bg-info text-white text-center p-3">Login</h1>

            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10">
                <form>
                  <div className="form-group">
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your Username"
                      ref={this.username}
                      value={this.state.account.username}
                      onChange={this.handleInput}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your Password"
                      ref={this.password}
                      value={this.state.account.password}
                      onChange={this.handleInput}
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
                    Login
                  </button>

                  <div>
                    <center>
                      <p style={{ color: "indianred" }}>
                        Don't have account?<a href="register.html">Register</a>
                      </p>
                    </center>
                  </div>
                  <div>
                    <a href="forgotname.html" style={{ marginRight: "240px" }}>
                      Forgot username?
                    </a>
                    <a href="forgotpass.html"> Forgotpassword?</a>
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
