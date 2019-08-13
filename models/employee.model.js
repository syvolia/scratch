const mongoose = require('mongoose');
const validate = require("mongoose-validator");
const unique = require("mongoose-unique-validator");



const emailValidator = [
  validate({
    validator: "isLength",
    arguments: [0, 40],
    message: "Email must not exceed {ARGS[1]} characters.",
  }),
  validate({
    validator: "isEmail",
    message: "Email must be valid.",
  }),
];

var employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "This field is required.",
  },
  lastName: {
    type: String,
    required: "This field is required.",
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    validate: emailValidator,
  },
  mobile: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
  },
  status: {
    type: String,
  },
});

// Custom validation for email
employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');
// Use the unique validator plugin
employeeSchema.plugin(unique, { message: "That {PATH} is already taken." });

mongoose.model('Employee', employeeSchema);