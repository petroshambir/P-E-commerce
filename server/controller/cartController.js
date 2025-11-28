
import userModel from "../module/userModel.js";
import validator from "validator";
// const { isEthereumAddress } = validator;




const addToCart = async (req,res)=>{
try {
    const{userId,itemId,size}=req.body
    const userData =await userModel.findById(userId)
    if(!userData){
        return res.json({success:false,message:"user not found"})
    }
    let cartData = await userData.cartData || {};
     
    if (cartData[itemId]) {
        if (cartData[itemId][size]) {
            cartData[itemId][size]+=1
        }else{
            cartData[itemId][size]=1
        }
        
    }else{
       cartData[itemId] = {};
       cartData[itemId][size] = 1; 
    }

    await userModel.findByIdAndUpdate(userId,{cartData})
   res.json({success:true,message:"Added to cart"})

} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}


const updateCart = async (req,res)=>{
try {
    const{userId,itemId,size,quantity}=req.body
    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData;
    cartData[itemId][size]=quantity
    await userModel.findByIdAndUpdate(userId,{cartData})
res.json({success:true,message:"Cart updated"})
} catch (error) {
  console.log(error)
  res.json({success:false,message:error.message})  
  
}
}

const getUserCart= async (req,res)=>{
try {
    const {userId} = req.body;
    const userData = await userModel.findById(userId)
    // let cartData = await userData.cartData;
    // res.json({success:true,cartData:user.cartData})
      if (!userData) {
            return res.json({success: false, message: "User not found"});
        }
        
        res.json({success:true, cartData: userData.cartData || {}})
} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}

export{addToCart,updateCart,getUserCart}