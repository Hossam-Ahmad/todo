"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _qurbaPackage = require("@hosam093/qurba-package");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = function () {
    function Users() {
        (0, _classCallCheck3.default)(this, Users);
    }

    (0, _createClass3.default)(Users, null, [{
        key: "search",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
                var doc;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _qurbaPackage.userModel.user.find({ name: { "$regex": req.body.query, "$options": "i" } }).exec();

                            case 3:
                                doc = _context.sent;
                                return _context.abrupt("return", res.status(200).json({
                                    document: doc
                                }));

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context["catch"](0);
                                return _context.abrupt("return", res.status(500).json({
                                    error: "Error during search : " + _context.t0
                                }));

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 7]]);
            }));

            function search(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return search;
        }()
    }, {
        key: "list",
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
                var page, doc;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                page = parseInt(req.query.page) - 1;
                                _context2.prev = 1;
                                _context2.next = 4;
                                return _qurbaPackage.userModel.user.find().skip(page).limit(10).exec();

                            case 4:
                                doc = _context2.sent;
                                return _context2.abrupt("return", res.status(200).json({
                                    document: doc
                                }));

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2["catch"](1);
                                return _context2.abrupt("return", res.status(500).json({
                                    error: "Error during search : " + _context2.t0
                                }));

                            case 11:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[1, 8]]);
            }));

            function list(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return list;
        }()
    }]);
    return Users;
}();

exports.default = Users;