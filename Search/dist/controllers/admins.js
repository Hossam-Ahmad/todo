'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dbHelper = require('../helpers/dbHelper');

var _dbHelper2 = _interopRequireDefault(_dbHelper);

var _admin = require('../models/admin');

var _admin2 = _interopRequireDefault(_admin);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Admins = function () {
    function Admins() {
        _classCallCheck(this, Admins);
    }

    _createClass(Admins, null, [{
        key: 'login',
        value: function login(req, res) {
            _admin2.default.findOne({ email: req.body.email, password: req.body.password }, function (err, admin) {
                return res.status(200).json({
                    admin: admin
                });
            });
        }
    }, {
        key: 'register',
        value: function register(req, res) {
            var token = _jsonwebtoken2.default.sign({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                }
            }, _config2.default.getSecretKey(), { expiresIn: '7d' });
            var insertedAdmin = new _admin2.default({ name: req.body.name, email: req.body.email, password: req.body.password, token: token });
            insertedAdmin.save(function (err, doc) {
                if (!err) {
                    return res.status(200).json({
                        token: token
                    });
                } else {
                    return res.status(500).json({
                        error: 'Error during record insertion : ' + err
                    });
                }
            });
        }
    }]);

    return Admins;
}();

exports.default = Admins;