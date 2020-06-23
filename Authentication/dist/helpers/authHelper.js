'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authHelper = function () {
    function authHelper() {
        (0, _classCallCheck3.default)(this, authHelper);
    }

    (0, _createClass3.default)(authHelper, null, [{
        key: 'generatToken',
        value: function generatToken(data) {
            return _jsonwebtoken2.default.sign(data, _config2.default.getSecretKey(), { expiresIn: '7d' });
        }
    }, {
        key: 'verifyToken',
        value: function verifyToken(req, res, next) {
            var bearerHeader = req.headers['authroizaton'];
            if (typeof bearerHeader !== 'undefined') {
                var bearer = bearerHeader.split(' ');
                var bearerToken = bearer[1];
                req.token = bearerToken;
                next();
            } else {
                res.status(403);
            }
        }
    }]);
    return authHelper;
}();

exports.default = authHelper;