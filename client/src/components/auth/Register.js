import React, { Component } from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
// import axios from "axios"; this will be replaced by redux actions
import classnames from "classnames";
import { connect } from "react-redux";
import { registeruser } from "../../actions/authActions";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      avatar: "",
      errors: {}
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  //Component will receive props - life cycle
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  //Function that changes the initial state as user starts typing on the input boxes
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //On submit function
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state); // This is a test remove this later
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      avatar: this.state.avatar
    };
    console.log(newUser);
    this.props.registeruser(newUser, this.props.history);
  };
  render() {
    //Getting the errrors varibale form the state - dstructuring
    const { errors } = this.state;

    //Dstructuring to pull out user from this.props.auth
    // const { user } = this.props.auth;

    return (
      <div className="register">
        {/* {user ? user.name : null} */}
        <div className="container">
          <div className="row">
            <div className="col-md-2 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center" />
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    // className="is-invalid form-control form-control-lg"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })}
                    placeholder="Confirm Password"
                    name="password2"
                    value={this.state.password2}
                    onChange={this.onChange}
                  />
                  {errors.password2 && (
                    <div className="invalid-feedback">{errors.password2}</div>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": errors.name
                    })} // This is for test, should upload image here
                    placeholder="image url"
                    name="avatar"
                    value={this.state.avatar}
                    onChange={this.onChange}
                  />
                  {errors.avatar && (
                    <div className="invalid-feedback">{errors.avatar}</div>
                  )}
                </div>
                {/* break should be taken out */}
                <br />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registeruser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registeruser }
)(withRouter(Register));
