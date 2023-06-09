const User = require("../config/models/User")
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require ('config');
const secret = config.get('secret');

exports.register = async(req , res) => {
    const {fullName,email,password,userRole}=req.body
    const existantUser = await User.findOne({email})
    if (existantUser) {res.status(409).json({msg:'user already exist'}) }
    try {
        const newUser = new User({
            fullName,
            email,
            password,
            userRole
        });
        let salt =await bcryptjs.genSalt(10);
let hash =await bcryptjs.hash(password, salt);
       newUser.password=hash
        await newUser.save();
const payload = {
    id:newUser._id,
};
        let token = jwt.sign(payload,secret);
        res.send({
            token,
            user:{
                id:newUser._id,
                fullName:newUser.fullName,
                email:newUser.email,
                userRole: newUser.userRole,

            }
        })
       // res.status(200).json(newUser);
    } catch (error) {
       res.status(500).json({msg:error.message}) 
    }

}
exports.login = async(req,res)=>{
    const {email,password}=req.body;
     try {
       const user = await User.findOne({email}) ;
       if (!user)return res.status(404).json({msg:"undefined user try again"})
       const isMatch = await bcryptjs.compare(password,user.password);
       if (!isMatch)return res.status(404).json({msg:"password doesn't match"});
       const payload = {
        id:user._id,
        role: user.userRole, 
    };
            let token = jwt.sign(payload,secret);
            res.send({
                token,
                user:{
                    id:user._id,
                    fullName:user.fullName,
                    email:user.email,
                    role:user.userRole
                }})
            
     } catch (error) {
        res.status(500).json({msg:error.message}) 

     }
};
exports.auth=(req,res)=>{
    res.send(req.user);
};
exports.deleteUser = async (req, res) => {
    try {
      const userId = req.params.userId;
      await User.findByIdAndDelete(userId);
  
      res.status(200).json({ msg: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };
  
