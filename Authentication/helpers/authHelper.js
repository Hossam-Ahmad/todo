import jwt from 'jsonwebtoken';
import config from '../config';

export default class authHelper{

    static generatToken(data) {
        return jwt.sign(data, config.getSecretKey() , { expiresIn: '7d' });
    }

    static verifyToken(req, res, next) {
        const bearerHeader = req.headers['authroizaton'];
        if( typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        } else {
            res.status(403);
        }
    }

}