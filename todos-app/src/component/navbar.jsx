import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "BurlyWood" }}
      >
        {/*<i class="fas fa-clipboard-list"></i>*/}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                style={{ color: "black" }}
              >
                Home
              </NavLink>
            </li>
            {props.isLoggedin && (
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/todo"
                  style={{ color: "black" }}
                >
                  Todo List
                </NavLink>
              </li>
            )}
          </ul>
          <ul>
            {!props.isLoggedin && (
              <NavLink
                className="nav-link"
                to="/login"
                style={{ color: "black" }}
              >
                Login
              </NavLink>
            )}
            {props.isLoggedin && (
              <NavLink
                className="nav-link"
                to="/logout"
                style={{ color: "black" }}
                onClick={() => props.setLogin(false)}
              >
                Logout
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
