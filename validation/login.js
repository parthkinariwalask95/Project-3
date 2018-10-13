const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //Check with our is empty function
  // if the field is empty it will convert into an empty string
  //reason behind this is validator check only if the string is empty if it is just empty it does not check
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  //Make sure email is entered in email field
  if (!Validator.isEmail(data.email)) {
    errors.email = "Not a valid email";
  }

  //E-mail field cannot be empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "E-mail field cannot be empty";
  }

  //Password is not empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field cannot be empty";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
