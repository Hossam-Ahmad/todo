import authHelper from '../helpers/authHelper';
import { adminModel } from "@hosam093/qurba-package";
import bcrypt from 'bcrypt';

export default class Admins {

    static async register(req, res) {
        let userData = {
            name : req.body.name
        };
        if(req.body.email) {
            userData.email = req.body.email;
            userData.password = bcrypt.hashSync(req.body.password, 10);
        }else if(req.body.phone){
            userData.phone =  req.body.phone;
        }else{
            userData.fb_id =  req.body.fb_id;
        }
        let token = authHelper.generatToken(userData);
        userData.token = token;
        let insertedAdmin = new adminModel.admin(userData);
        try{
            const doc = await insertedAdmin.save();
            return res.status(200).json({token, id : doc._id});
        }catch(e) {
            return res.status(500).json({
                error: `Error during record insertion : ${e}`
            });
        }
    }
}