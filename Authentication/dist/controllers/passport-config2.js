'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var verify = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, done) {
    var dbUser;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // When a user tries to sign in this code runs
            dbUser = void 0;

            if (!req.body.email) {
              _context.next = 13;
              break;
            }

            _context.next = 4;
            return _qurbaPackage.adminModel.admin.findOne({ email: req.body.email });

          case 4:
            dbUser = _context.sent;

            if (dbUser) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return', done(null, false, {
              message: "Incorrect email."
            }));

          case 9:
            if (_bcrypt.bcrypt.compareSync(req.body.password, dbUser.password)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt('return', done(null, false, {
              message: "Incorrect password."
            }));

          case 11:
            _context.next = 23;
            break;

          case 13:
            if (!req.body.phone) {
              _context.next = 19;
              break;
            }

            _context.next = 16;
            return _qurbaPackage.adminModel.admin.findOne({ phone: req.body.phone });

          case 16:
            dbUser = _context.sent;
            _context.next = 23;
            break;

          case 19:
            if (!req.body.fb_id) {
              _context.next = 23;
              break;
            }

            _context.next = 22;
            return _qurbaPackage.adminModel.admin.findOne({ fb_id: req.body.fb_id });

          case 22:
            dbUser = _context.sent;

          case 23:
            return _context.abrupt('return', done(null, dbUser));

          case 24:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function verify(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _passport = require('passport');

var _passportCustom = require('passport-custom');

var _passportCustom2 = _interopRequireDefault(_passportCustom);

var _bcrypt = require('bcrypt');

var _qurbaPackage = require('@hosam093/qurba-package');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomStrategy = _passportCustom2.default.Strategy;

_passport.passport.use('custom', new CustomStrategy(verify));

_passport.passport.serializeUser(function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(user, done) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              done(null, user);
            } catch (e) {
              done(e);
            }

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

_passport.passport.deserializeUser(function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(user, done) {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {
              done(null, user);
            } catch (e) {
              done(e);
            }

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());

exports.default = _passport.passport;