const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String
    },
    mobileNumber:{
        type: Number
    }
})

module.exports = mongoose.model('user', userSchema, 'user');