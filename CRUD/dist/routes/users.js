'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../controllers/users.js');

var _users2 = _interopRequireDefault(_users);

var _qurbaPackage = require('@hosam093/qurba-package');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* Create user. */
router.post("/create", _qurbaPackage.passportCheck.passport.authenticate("custom"), _users2.default.create);

/* Update user. */
router.put("/update", _qurbaPackage.passportCheck.passport.authenticate("custom"), _users2.default.update);

/* Remove user. */
router.post("/delete", _qurbaPackage.passportCheck.passport.authenticate("custom"), _users2.default.delete);

exports.default = router;