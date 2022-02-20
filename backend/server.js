const express = require('express');
// not needed in the new version of express
// const bodyParser = require('body-parser');
const cors = require('cors');
// mongoose is going to help us connect to our MongoDB
const mongoose = require('mongoose');

require('dotenv').config();

// This is how we create our express server, you can see the port the server will be on
const app = express();
const port = process.env.PORT || 5001;

// our middleware - this CORS middleware
app.use(cors());
// this is going to allow us to parse JSON because our server is going to be sending and receiving JSON. 
app.use(express.json());

// we have our database URI. this is smth we can from MongoDB URI Dashboard
const uri = process.env.ATLAS_URI;
// console.log(process.env.ATLAS_URI)
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//telling server to use router files created
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//when someone go to exercises router, it will load everything in the exercises router etc.
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter); // Note: Spelling error

// This is what start the server listening on a certain port. 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});