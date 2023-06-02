// // const express = require("express");
// // const app = express();
// // app.use(express.json());

// const user = require("./routes/userRoute");
// // const ErrorHandler = require("./utils/ErrorHandler");
// // const QuestionRoute = require('./routes/QuestionRoute');
// // mongoose.connect('mongodb://localhost:27017/EEMS', { useNewUrlParser: true, useUnifiedTopology: true })
// // .then(() => {
// //   console.log('Connected to database.');
// // })
// // .catch((error) => {
// //   console.error(error);
// // });
// // app.use("/api/w2",user);
// // app.use('/api/questions', QuestionRoute);

// // app.use(ErrorHandler);
// // app.use(function(req, res, next) {
// //     res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Replace with your domain
// //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// //     next();
// //   });
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const QuestionRoute = require('./routes/QuestionRoute');

// // const app = express();

// // mongoose.connect('mongodb://localhost:27017/EEMS', { useNewUrlParser: true, useUnifiedTopology: true })
// //   .then(() => {
// //     console.log('Connected to database.');
// //   })
// //   .catch((error) => {
// //     console.error(error);
// //   });

// // app.use(express.json());
// // app.use('/api/questions', QuestionRoute);

// // app.listen(3000, () => {
// //   console.log('Server started on port 4000.');
// // });
// // module.exports = app;

// const express = require('express');
// const mongoose = require('mongoose');
// // const cors = require('cors');
// const questionRoutes = require('../routes/QuestionRoute');

// const app = express();

// app.use(cors());
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
// app.use("/api/w2",user);

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });
// module.exports = app;

const express = require("express");
const app = express();
app.use(express.json());
const question = require("./routes/QuestionRoute");

app.use("/api/v2",question);

module.exports = app
