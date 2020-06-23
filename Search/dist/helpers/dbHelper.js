'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dbHelper = function () {
    function dbHelper() {
        _classCallCheck(this, dbHelper);
    }

    _createClass(dbHelper, null, [{
        key: 'connect',
        value: function connect() {
            var mongoose = new _mongoose.Mongoose();
            mongoose.connect(_config2.default.getDB(), { useNewUrlParser: true }, function (err) {
                if (!err) {
                    console.log('MongoDB Connection Succeeded.');return mongoose;
                } else {
                    console.log('Error in DB connection : ' + err);
                }
            });
        }
    }, {
        key: 'getMongooseConnection',
        value: function getMongooseConnection() {
            if (this.mongoose === undefined) {
                return this.connect();
            } else {
                return this.mongoose;
            }
        }
    }]);

    return dbHelper;
}();

exports.default = dbHelper;