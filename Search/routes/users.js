import express from 'express';
import users from '../controllers/users.js';

const router = express.Router();

/* GET users listing. */
router.get("/list", users.list);

/* Search in users by any field. */
router.post("/search", users.search);

export default router ;