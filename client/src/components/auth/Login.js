import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  //Empty constructor - the initial value assigned to each field
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  //Life cycle
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  //On change event
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //On submit event
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    // console.log(user);
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="container">
          <div className="loginRow">
            <div className="col-lg-4">
              {/* <h1 className="display-6 text-center">Log In</h1> */}

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    // className="form-control form-control-md"
                    className={classnames("form-control form-control-md", {
                      "is-invalid": errors.email
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
                    // className="form-control form-control-md"
                    className={classnames("form-control form-control-md", {
                      "is-invalid": errors.password
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
                <input type="submit" className="btn btn-info btn-block mt-2" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Login.protoTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

//map state to props
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
