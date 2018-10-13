import React, { Component } from "react";
//Replacement for a tags
import { Link } from "react-router-dom";

//
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  //On click log out function
  onLogoutClick(e) {
    e.preventDefault(e);
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    //auth links - these are the links that authorized users can see
    const authLinks = (
      <ul>
        <a href="/" onClick={this.onLogoutClick.bind(this)}>
          <button className="btn btn-success navButtons">
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "35px", height: "35px", marginRight: "5px" }}
            />
            Logout
          </button>
        </a>
      </ul>
    );

    const guestLinks = (
      <ul>
        <Link to="/register">
          <button className="btn btn-success navButtons">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-success navButtons">Login</button>
        </Link>
      </ul>
    );
    return (
      <div>
        <nav className="navbar">
          {/* Conditional statements to display nav items */}
          {isAuthenticated ? authLinks : guestLinks}
        </nav>
      </div>
    );
  }
}

Navbar.PropTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
