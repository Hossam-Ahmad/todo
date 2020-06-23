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

var _qurbaPackage = require('@hosam093/qurba-package');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = function () {
    function Users() {
        (0, _classCallCheck3.default)(this, Users);
    }

    (0, _createClass3.default)(Users, null, [{
        key: 'create',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
                var insertedUser, doc;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                insertedUser = new _qurbaPackage.userModel.user();

                                insertedUser.name = req.body.name;
                                insertedUser.email = req.body.email;
                                insertedUser.address = req.body.address;
                                insertedUser.nationalId = req.body.nationalId;
                                insertedUser.age = req.body.age;
                                insertedUser.creationDate = new Date().toISOString();
                                insertedUser.createdBy = req.body.createdBy;
                                _context.prev = 8;
                                _context.next = 11;
                                return insertedUser.save();

                            case 11:
                                doc = _context.sent;
                                return _context.abrupt('return', res.status(200).json({
                                    status: "success"
                                }));

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context['catch'](8);
                                return _context.abrupt('return', res.status(500).json({
                                    status: 'Error during record insertion : ' + _context.t0
                                }));

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[8, 15]]);
            }));

            function create(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return create;
        }()
    }, {
        key: 'update',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
                var doc;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return _qurbaPackage.userModel.user.findOneAndUpdate({ _id: req.body.id, createdBy: req.body.createdBy }, req.body.data).exec();

                            case 3:
                                doc = _context2.sent;

                                console.log(doc); //--------------------------------------------- add line
                                return _context2.abrupt('return', res.status(200).json({
                                    status: 'success'
                                }));

                            case 8:
                                _context2.prev = 8;
                                _context2.t0 = _context2['catch'](0);
                                return _context2.abrupt('return', res.status(500).json({
                                    error: 'Error during update : ' + _context2.t0
                                }));

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 8]]);
            }));

            function update(_x3, _x4) {
                return _ref2.apply(this, arguments);
            }

            return update;
        }()
    }, {
        key: 'delete',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
                var doc;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;

                                console.log({ id: req.body.id, createdBy: req.body.createdBy }); //<--------------------------------------- added line
                                _context3.next = 4;
                                return _qurbaPackage.userModel.user.findOneAndRemove({ _id: req.body.id, createdBy: req.body.createdBy }).exec();

                            case 4:
                                doc = _context3.sent;
                                return _context3.abrupt('return', res.status(200).json({
                                    status: 'success'
                                }));

                            case 8:
                                _context3.prev = 8;
                                _context3.t0 = _context3['catch'](0);
                                return _context3.abrupt('return', res.status(500).json({
                                    error: 'Error during delete : ' + _context3.t0
                                }));

                            case 11:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 8]]);
            }));

            function _delete(_x5, _x6) {
                return _ref3.apply(this, arguments);
            }

            return _delete;
        }()
    }]);
    return Users;
}();

exports.default = Users;