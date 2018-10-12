import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types";

class Navbar extends Component {

  logout = () => {
    localStorage.removeItem("jwtToken");
  }

  render() {

    const guestLink = (
      <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/register">
          Sign Up
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
    </ul>
    )

    const adminLink = (
      <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink className="nav-link" to="/blog/add">
          Add Blog
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/unpublished">
          Unpublished
        </NavLink>
      </li>
    </ul>
    )

    const logout = (
      <ul className="navbar-nav ml-auto">
      <li onClick={this.logout}  className="nav-item">
        <NavLink className="nav-link" to="/login">
          Logout
        </NavLink>
      </li>
    </ul>
    )
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            My Blog
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {this.props.isAdminAuth ? adminLink : null}
            {localStorage.jwtToken ? logout : guestLink}

          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
