import express from 'express';
import users from '../controllers/users.js';
import {passportCheck} from '@hosam093/qurba-package';

const router = express.Router();

/* Create user. */
router.post("/create", passportCheck.passport.authenticate("custom"), users.create);

/* Update user. */
router.put("/update", passportCheck.passport.authenticate("custom"), users.update);

/* Remove user. */
router.post("/delete", passportCheck.passport.authenticate("custom"), users.delete);

export default router ;