const User = require("../model/userModel");
// const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.createUser = catchAsyncErrors(async (req, res, next) => {
  
    const { name, email, password, avatar } = req.body;

    const user = await User.create({ 
       name,
        email,
        password,
        avatar:{
         public_id:"https://test.com",
         url:"https://test.com"
        }
    })
    res.status(201).json({
        success:true,
        user
    })
    // sendToken(user, 201, res);

})