import express from 'express';
import { passportAuthentication } from "@hosam093/qurba-package";
import admins from '../controllers/admins.js';

const router = express.Router();

/* GET users listing. */
router.post("/login", passportAuthentication.passport.authenticate("auth"), async function(req, res) {
    res.status(200).json({
        id : req.user.id,
        token : req.user.token
    })
});

/* Create user. */
router.post("/register", admins.register);

export default router ;