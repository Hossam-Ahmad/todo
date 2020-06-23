'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = function () {
    function config() {
        (0, _classCallCheck3.default)(this, config);
    }

    (0, _createClass3.default)(config, null, [{
        key: 'getDB',
        value: function getDB() {
            return 'mongodb://mongo:27017/qurbdb';
        }
    }, {
        key: 'getSecretKey',
        value: function getSecretKey() {
            return '6RznV.*]^lFQ4#sV$":C0j-IC+At3iX_sY%u)Q({jU5*kU6AXrsyt\;*:7K1st*';
        }
    }]);
    return config;
}();

exports.default = config;