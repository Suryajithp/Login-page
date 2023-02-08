const Admincollection = require('../models/adminmodel')
const userModel = require('../models/usermodel')
const bcrypt = require('bcrypt')

module.exports = {

    Adminlogin: async (req, res) => {
        try {
            console.log(req.body);
            const { email, password } = req.body;
            const admin = await Admincollection.findOne({ email: email })
            if (admin) {
                res.status(200).json({ message: "login successs" })
            } else {
                res.status(401).json({ message: "login failed" })
            }
        } catch (error) {
            console.log(error);
        }


    },
    Userlist: async (req, res) => {
        try {
            const userData = await userModel.find()
            if (userData) { res.status(200).json({ userData }) }
        } catch (error) {
            console.log(error);

        }
    },
    getEdit: async (req, res) => {
        try {
            const userId = req.params.id
            console.log(userId);
            const userData = await userModel.findOne({ _id: userId })
            res.status(200).json(userData)
        } catch (error) {
            console.log(error);

        }

    },
    updateUser: (req,res)=>{
        try {
            const {name,email,id}=req.body;
            userModel.findByIdAndUpdate(id,{username:name , email:email}).then(()=>{
                res.status(200).json({msg:"user data updated"})
            }).catch((error)=>{
                console.log(error);
            })
        } catch (error) {
            console.log(error);
            
        }
    },
    ChangeStatus: async(req,res)=>{
        try {
            const id = req.params.id
            console.log(id);
            const userData = await userModel.findOne({ _id: id })
            console.log(userData.status);
                if(userData.status=="true"){
                    userModel.findByIdAndUpdate(id,{status:false}).then(()=>{
                        res.status(200).json({msg:"user status updated"})
                    }).catch((error)=>{
                        console.log(error);
                    })
                }else{
                    userModel.findByIdAndUpdate(id,{status:true}).then(()=>{
                        res.status(200).json({msg:"user status updated"})
                    }).catch((error)=>{
                        console.log(error);
                    })
                }
            
        } catch (error) {
            console.log(error);
        }
    }
}
