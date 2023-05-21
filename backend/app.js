const express = require("express");
const app = express();
app.use(express.json());

const user = require("./routes/userRoute");
// const ErrorHandler = require("./utils/ErrorHandler");

app.use("/api/w2",user);

// app.use(ErrorHandler);

module.exports = app;