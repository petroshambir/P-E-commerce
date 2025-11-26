
import {v2 as cloudinary} from 'cloudinary'
import { json } from 'express';
import productModel from '../module/productModel.js';
//add product
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET_KEY,
// });
const addProduct = async(req,res)=>{
 try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      size,
      bestseller,
    } = req.body;

    // const image1= req.files.image1 && req.files.image1[0];
    // const image2 = req.files.image2 && req.files.image2[0];
    // const image3 = req.files.image3 && req.files.image3[0];
    // const image4 = req.files.image4 && req.files.image4[0];

    // const images = [image1, image2, image3, image4].filter((item)=>item !== undefined);

    // let imagesUrl = await Promise.all(
    //     images.map(async (item)=>{
    //         let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
    //         return result.secure_url
    //     })
    // )
     const images = [];
    if (req.files) {
      if (req.files.image1 && req.files.image1[0]) images.push(req.files.image1[0]);
      if (req.files.image2 && req.files.image2[0]) images.push(req.files.image2[0]);
      if (req.files.image3 && req.files.image3[0]) images.push(req.files.image3[0]);
      if (req.files.image4 && req.files.image4[0]) images.push(req.files.image4[0]);
    }

    let imagesUrl = [];
    if (images.length > 0) {
      imagesUrl = await Promise.all(
        images.map(async (item) => {
          let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
          return result.secure_url;
        })
      );
    }
 let parsedSize = [];
 if (size && size !== "undefined") {
   try {
     parsedSize = JSON.parse(size);
   } catch (error) {
     console.log("Size parsing error, using empty array");
     parsedSize = [];
   }
 }
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory: subCategory,
      bestSeller: bestseller === "true" ? true : false,
      size: parsedSize,
      image: imagesUrl,
      date: Date.now(),
    };
    console.log(productData)
const product =new productModel(productData);
await product.save()

    res.json({success:true,message:"product Added"})

 } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
 }
}

//list product

const listProduct = async (req,res)=>{
try {
    const products = await productModel.find({});
    res.json({success:true,products});

} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})

}
}

//remove product

const removeProduct = async(req,res)=>{
try {
    await productModel.findByIdAndDelete(req.body.id)
    res.json({success:true,message:"product Remove"})
} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}

//single product info

const singlProduct = async(req,res)=>{
try {
    const{productId}=req.body;
    const product = await productModel.findById(productId)

    res.json({success:true,product})
} catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
}
}

export{listProduct,addProduct,removeProduct,singlProduct}