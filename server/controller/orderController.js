import orderModel from '../module/orderModel.js'
import userModel from '../module/userModel.js'
import Stripe from 'stripe'
import razorPay from 'razorpay'

const currency = 'USD';
const deliveryCharge = 10;

const stripe = new Stripe(process.env.STRIP_SECRET_KEY)

const razorPayInstance = new razorPay({
  key_id:process.env.RAZORPAY_KEY_ID,  
  key_secret :process.env.RAZORPAY_KEY_SECRET,
})

const placeOrder = async (req,res)=>{
try {

  const token = req.headers.token;
    if (!token) {
        return res.json({ success: false, message: "Token required" });
    }
    
    // Decode token to get userId
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    const userId = payload.userId || payload.id;
    
    if (!userId) {
        return res.json({ success: false, message: "User ID not found in token" });
    }


    const {items,amount,address}=req.body;

    const orderData = {
        userId,
        items,
        address:address,
        amount,
        paymentMethod:"COD",
        payment:false,
        date:Date.now()
    }

    const newOrder = new orderModel(orderData)
    await newOrder.save();
    await userModel.findByIdAndUpdate(userId,{cartData:{}})

    res.json({success:true,message:"order placed"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}

const placeOrderStripe = async (req,res) =>{
try {
    
    const token = req.headers.token;
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    const userId = payload.userId || payload.id;
    
      const {items,amount,address}=req.body;
      const{origin}= req.headers;
      
    const orderData = {
        userId,
        items,
        address:address,
        amount,
        paymentMethod:"Stripe",
        payment:false,
        date:Date.now()
    }
    const newOrder = new orderModel(orderData)
    await newOrder.save()

    const line_items = items.map((item)=>({
        price_data:{
            currency:currency,
            product_data:{
               name:String(item.name)
            },
            unit_amount:Math.round (item.price * 100)
        },
        quantity:item.quantity
    }))
    line_items.push({
          price_data:{
            currency:currency,
            product_data:{
               name:'Delivery charges'
            },
            unit_amount:deliveryCharge * 100
        },
        quantity:1,
    })
    const session = await stripe.checkout.sessions.create({
        success_url:`${origin}/verify?success =true&orderId=${newOrder._id}`,
        cancel_url:`${origin}/verify?success =false&orderId=${newOrder._id}`,
        line_items,
        mode:'payment',
    })
    res.json({success:true,session_url:session.url})
} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}

const verifyStripe = async (req,res)=>{
    const{orderId,success,userId}=req.body
    try {
        if (success === 'true') {
            await orderModel.findByIdAndUpdate(orderId,{payment:true})
            await userModel.findByIdAndUpdate(userId,{cartData:{}})
            res.json({success:true});
        }else{
            await orderModel.findByIdAndDelete(orderId)
            res.json({success:false})
        }
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}

const placeOrderRazorPay = async (req,res)=>{
try {
       const token = req.headers.token;
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    const userId = payload.userId || payload.id;
          const {items,amount,address}=req.body;
    
      
    const orderData = {
        userId,
        items,
        addres:address,
        amount,
        paymentMethod:"Razorpay",
        payment:false,
        date:Date.now()
    }
    const newOrder = new orderModel(orderData)
    await newOrder.save()
    const option = {
        amount:amount * 100,
        currency:currency.toUpperCase(),
        // receipt:newOrder._id.tostring(),
        receipt:newOrder._id.toString(), 
    }

await razorPayInstance.orders.create(option,(error,order)=>{
if (error) {
    console.log(error)
    return res.json({success:false,message:error.message})
}
res.json({success:true,order})
})
} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}
const verifyRazorpay= async (req,res)=>{
try {
    const{userId,razorPay_order_id}=req.body;
    const orderInfo = await razorPayInstance.orders.fetch(razorPay_order_id)
    if (orderInfo.status === 'paid') {
       await orderModel.findByIdAndUpdate(orderInfo.receipt,{payment:true});
       await userModel.findByIdAndUpdate(userId,{cartData:{}})
       res.json({success:true,message:"payment successful"})
    }else{
       res.json({success:false,message:'payment failed'})
    }

} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}
const allOrders = async (req,res) =>{
try {
    const orders = await orderModel.find({})
    res.json({success:true,orders})

} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}

const  userOrder = async (req,res)=>{
    try {
    const token = req.headers.token;
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    const userId = payload.userId || payload.id;
    
    console.log('UserOrders - User ID:', userId);
    
    const orders = await orderModel.find({userId})
    console.log('UserOrders - Found orders:', orders);
    
    res.json({success:true, orders})
} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}

// try {
//     const {userId}=req.body;
//     const orders = await orderModel.find({userId})
//     res.json({success:true,orders})
// } catch (error) {
//     console.log(error)
//     res.json({success:false,message:error.message})
// }

}

const updateStatus = async (req,res) =>{
try {
    const{orderId,status}=req.body;
    await orderModel.findByIdAndUpdate(orderId,{status})
    res.json({success:true,message:"status Updated"})
} catch (error) {
    
}
}

export{verifyRazorpay,verifyStripe,placeOrder,placeOrderStripe,placeOrderRazorPay,allOrders,userOrder,updateStatus}
