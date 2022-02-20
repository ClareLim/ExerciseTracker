const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
}, {
    timestamps: true,
});

// add a new user schema for the model user to mongoose, u r using a third party library to organise MongoDB (ORM = Object–relational mapping)
const User = mongoose.model('User', userSchema);

//exported as a module then can use as a class from any file where u put a requirement on. 
module.exports = User;
