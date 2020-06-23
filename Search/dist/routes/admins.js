'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _admins = require('../controllers/admins.js');

var _admins2 = _interopRequireDefault(_admins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET users listing. */
// router.post('/login', passport.authenticate('jwt', { failureRedirect: '/login' }), admins.login);

/* Create user. */
router.post("/register", _admins2.default.register);

exports.default = router;