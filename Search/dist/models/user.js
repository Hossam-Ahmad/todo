'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//open connection with mongoDB
var mongoose = new _mongoose.Mongoose();
mongoose.connect(_config2.default.getDB(), { useNewUrlParser: true }, function (err) {
    if (!err) {
        console.log('MongoDB Connection Succeeded.');
    } else {
        console.log('Error in DB connection : ' + err);
    }
});

// create a schema for user
var userSchema = new _mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    address: {
        type: String,
        required: 'This field is required.'
    },
    nationalId: {
        type: String,
        required: 'This field is required.'
    },
    age: {
        type: Date,
        required: 'This field is required.'
    },
    creationDate: {
        type: Date,
        required: 'This field is required.'
    },
    createdBy: {
        type: Number,
        required: 'This field is required.'
    }
});

// Create a model using schema
var user = mongoose.model("users", userSchema);
exports.default = user;