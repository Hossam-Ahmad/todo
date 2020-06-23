import {userModel} from '@hosam093/qurba-package';
export default class Users {

    static async create(req, res) {
        const insertedUser = new userModel.user();
        insertedUser.name = req.body.name;
        insertedUser.email = req.body.email;
        insertedUser.address = req.body.address;
        insertedUser.nationalId = req.body.nationalId;
        insertedUser.age = req.body.age;
        insertedUser.creationDate = new Date().toISOString();
        insertedUser.createdBy = req.body.createdBy;
        try{
            const doc = await insertedUser.save();
            return res.status(200).json({
                status: "success"
            });
        }catch(e){
            return res.status(500).json({
                status: `Error during record insertion : ${e}`
            });
        }
    }

    static async update(req, res){
        try{
            const doc = await userModel.user.findOneAndUpdate({_id : req.body.id, createdBy : req.body.createdBy},req.body.data).exec();
            console.log(doc);//--------------------------------------------- add line
            return res.status(200).json({
                status: 'success'
            });
        }catch(e){
            return res.status(500).json({
                error: `Error during update : ${e}`
            });
        }
    }

    static async delete(req, res) {
        try{
            console.log({id : req.body.id, createdBy : req.body.createdBy});//<--------------------------------------- added line
            const doc = await userModel.user.findOneAndRemove({_id : req.body.id , createdBy : req.body.createdBy}).exec();
            return res.status(200).json({
                status: 'success'
            });
        }catch(e){
            return res.status(500).json({
                error: `Error during delete : ${e}`
            });
        }
    }
}