const userModel = require('../models/usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



module.exports = {

    Signup:async(req,res)=>{
        const {name , email , password } = req.body;
        const userExist= await userModel.findOne({email:email})
        if(userExist){
            res.status(401).json({msg:"exist"})
        }else{
            const salt = await bcrypt.genSalt(10)
            const hashedpassword = await bcrypt.hash(password,salt)  
        
            const user = new userModel({
                username: name,
                email: email,
                password: hashedpassword
            })
        
            if (user) {
                user.save()
                res.status(201).json({
                    _id: user.id,
                    name: user.name,
                    email: user.email
                })
            } else {
                res.status(400)
                throw new Error('Invalid user data')
            }
        }

    

    },

    Login:async(req, res) => {
        try {
            console.log(req.body);
            const {email,password} = req.body;
            const userExist = await userModel.findOne({email:email})
            if(userExist && (await bcrypt.compare(password,userExist.password))){
             const id = userExist._id
                if(userExist.status==="true"){
                    const token = jwt.sign({id}, "jwtSecret",{expiresIn:300000})
                    res.status(200).json({msg:"login",token}) 
                }else{
                res.status(401).json({msg:"Your Accont is blocked"})
                }
              
            }else{
                res.status(401).json({msg:"Email or password incorrect"})
            }
        } catch (error) {
            console.log(error);
        }
       
        
    },

    jwt:(req,res)=>{
        res.status(200).json({auth:true})
    }
}