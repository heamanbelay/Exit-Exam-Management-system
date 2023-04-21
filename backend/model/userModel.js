const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const ErrorHandler = require("../utils/ErrorHandler");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the your Name"],
    minlength: [3, "Please enter a name atleast 3 characters"],
    maxlength: [15, "Name can not more than 15 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "Please enter a valid email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minlength: [6, "Password should be greater than 6 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  // otp: {
  //   type: String,
  //   required: true,
  // },
  role: {
    type: String,
    default: "admin",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

// //hash the password
// userSchema.pre("save",async function (next){
//   if (!this.isModified("password")) {
//     next();
//   }
//     this.password = await bcrypt.hash(this.password,10);
// }
// )
// //jwt token for the login
// userSchema.methods.getJwtToken = function () {
  
//   return jwt.sign({ id: this._id }, '1!2@3#4$abcdefg', {
//     expiresIn: '6d',
//   });
// };

// // compare password
// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };
// module.exports = mongoose.model("user", userSchema);

// Forgot password

// userSchema.pre("save", async function (next) {
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });
// userSchema.methods.getResetToken = function () {
//   // Generating token

//   const resetToken = crypto.randomBytes(20).toString("hex");

//  //    hashing and adding resetPasswordToken to userSchema
//  this.resetPasswordToken = crypto
//  .createHash("sha256")
//  .update(resetToken)
//  .digest("hex");

// this.resetPasswordTime = Date.now() + 15 * 60 * 1000;

// return resetToken;
// }

module.exports = mongoose.model("User", userSchema);
 