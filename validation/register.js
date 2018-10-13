const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //Check with our is empty function
  // if the field is empty it will convert into an empty string
  //reason behind this is validator check only if the string is empty if it is just empty it does not check
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  data.avatar = !isEmpty(data.avatar) ? data.avatar : "";

  //Make sure name is atlease 2 chars and no longer then 50
  if (!Validator.isByteLength(data.name, { min: 2, max: 50 })) {
    errors.name = "Name must be between 2 and 30 Chars";
  }
  //Name field cannot be empty
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field cannot be empty";
  }
  //E-mail field cannot be empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "E-mail field cannot be empty";
  }
  //Make sure email is entered in email field
  if (!Validator.isEmail(data.email)) {
    errors.email = "Not a valid email";
  }

  //Password is not empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field cannot be empty";
  }

  //Password must be between 3-to 30 chars
  if (!Validator.isLength(data.password, { min: 3, max: 30 })) {
    errors.password = "Password must be between 3 to 30 chars";
  }

  //Password 2 matches password
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match";
  }

  //avatar is not empty
  if (Validator.isEmpty(data.avatar)) {
    errors.avatar = "Avater field cannot be empty";
  }
  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
