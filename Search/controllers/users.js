import {userModel} from '@hosam093/qurba-package'
export default class Users {
    
    static async search(req, res) {
        try{
            const doc = await userModel.user.find({name : { "$regex": req.body.query, "$options": "i" }}).exec();
            return res.status(200).json({
                document: doc
            });
        }catch(e){
            return res.status(500).json({
                error: `Error during search : ${e}`
            });
        }
    }

    static async list(req, res) {
        const page = parseInt(req.query.page)-1;
        try{
            const doc = await userModel.user.find().skip(page).limit(10).exec();
            return res.status(200).json({
                document: doc
            });
        }catch(e){
            return res.status(500).json({
                error: `Error during search : ${e}`
            });
        }
    }
}