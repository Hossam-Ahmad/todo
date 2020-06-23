'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _authHelper = require('../helpers/authHelper');

var _authHelper2 = _interopRequireDefault(_authHelper);

var _qurbaPackage = require('@hosam093/qurba-package');

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Admins = function () {
    function Admins() {
        (0, _classCallCheck3.default)(this, Admins);
    }

    (0, _createClass3.default)(Admins, null, [{
        key: 'register',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
                var userData, token, insertedAdmin, doc;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                userData = {
                                    name: req.body.name
                                };

                                if (req.body.email) {
                                    userData.email = req.body.email;
                                    userData.password = _bcrypt2.default.hashSync(req.body.password, 10);
                                } else if (req.body.phone) {
                                    userData.phone = req.body.phone;
                                } else {
                                    userData.fb_id = req.body.fb_id;
                                }
                                token = _authHelper2.default.generatToken(userData);

                                userData.token = token;
                                insertedAdmin = new _qurbaPackage.adminModel.admin(userData);
                                _context.prev = 5;
                                _context.next = 8;
                                return insertedAdmin.save();

                            case 8:
                                doc = _context.sent;
                                return _context.abrupt('return', res.status(200).json({ token: token, id: doc._id }));

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](5);
                                return _context.abrupt('return', res.status(500).json({
                                    error: 'Error during record insertion : ' + _context.t0
                                }));

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[5, 12]]);
            }));

            function register(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return register;
        }()
    }]);
    return Admins;
}();

exports.default = Admins;