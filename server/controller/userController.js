
import cookieParser from 
"cookie-parser";
import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import userModel from '../module/userModel.js'

const creatToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
const loginUser =async (req,res)=>{
try {
    const {email,password}=req.body;
    const user = await userModel.findOne({email});

    if (!user) {
        return res.json({success:false,message:"user doesn't exists"})
    }
    const isMach = await bcrypt.compare(password,user.password);
    if (isMach) {
       const token = creatToken(user._id) 
       res.json({success:true,token})
    }else{
        res.json({success:false,message:"invalid credentials"})
    }

} catch (error) {
    res.json({success:false,message:error.message})
}
}

const registerUser = async (req,res)=>{

    //   const { firstName, lastName, email, password } = req.body;
    // mezakaker kab nay nati zhazkiwo nay baelay !!!!

    //   if ((!firstName, !lastName, !email, !password)) {
    //     return res.json({
    //       success: false,
    //       message: "plase fill all requre filds",
    //     });
    //   }
    try {

const { name, email, password } = req.body;

const isExistUser = await userModel.findOne({email})
if (isExistUser) {
    return res.json({success:false,message:'user alrady existed'})
}

if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "please enter valid email" });
}

if (password.length < 8) {
  return res.json({ success: false, message: "please enter strong password" });
}

const salt = await bcrypt.genSalt(10);
const hashedpassword = await bcrypt.hash(password,salt)

const newUser =new userModel({
    name,email,password:hashedpassword
})

const user = await newUser.save()
const token = creatToken(user._id);

res.json({success:true,token})
    } catch (error) {
       return res.json({success:false, message:error.message}) 
    }

}

const adminLogin = async (req,res)=>{
try {
    const{email,password}=req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
        const token = jwt.sign(email + password, process.env.JWT_SECRET);
        res.json({success:true,token})
    }else{
        res.json({success:false,message:"ivalid credential"})
    }
} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}


export {loginUser,registerUser,adminLogin}