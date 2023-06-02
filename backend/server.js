// const expree = require("express");
// const app = require("./app");

// const connectDatabase = require ("./db/Database.js");
// connectDatabase();

// const dotenv = require("dotenv");
// dotenv.config({
//     path:"backend/config/.env"
// })

// const server = app.listen(process.env.PORT,() =>{
//     console.log(`Server is working on http://localhost:${process.env.PORT}`)
// });
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your domain
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
// const express = require('express');
// const app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:4000"); // Replace with your domain
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.post('/api/questions', function(req, res) {
//   // Handle the API request here
// });

// app.listen(4000, function() {
//   console.log('Server started on port 4000');
// });
// require('./app');




// const express = require('express');
// const mongoose = require('mongoose');
// // const cors = require('cors');
// const questionRoutes = require('./routes/QuestionRoute');

// const app = express();

// // app.use(cors());
// app.use(express.json());

// mongoose.connect('mongodb://localhost:27017/EEMS', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB');
// });

// app.use('/api', questionRoutes);

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
const app = require("./app");

// const question = require("./routes/QuestionRoute");

const connectDB = require("./db/Database");

dotenv.config({
  path: "backend/config/.env"
})

connectDB();

const server = app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`)
})
