import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopeContext } from '../contexte/ShopeContext';
import { asset} from '../assets/asset';
import RelatedProduct from '../components/RelatedProduct';

function Product() {

  const { ProductId }=useParams();

  const { products, currency,addCart} = useContext(ShopeContext); 

const[productData,setProductData]=useState(false);
const [image,setImage]=useState('');
const [size,setSize]=useState('')

const fetchProductData = async ()=>{
  products.map((item)=>{
    if (item._id === ProductId) {
      // const fixedItem = {
      //   ...item,image:Array.isArray(item.image) ? item.image : item.image.split(',')
      // };
      let imageArray = [];
      if (Array.isArray(item.image)) {
        imageArray = item.image;
      } else if (typeof item.image === 'string') {
        imageArray = item.image.split(',').map(img => img.trim());
      }
      if (imageArray.length === 0) {
        imageArray = ['https://via.placeholder.com/500'];
      }
      const fixedItem = {
        ...item,
        image: imageArray
      };
  setProductData(fixedItem)
  
  setImage(fixedItem.image[0])
  return null;
}
  })
}
useEffect(()=>{
  fetchProductData()
}, [ProductId,products])

  // useEffect(() => {
  //   console.log('Product Images:', productData.image);
  //   console.log('Current Image:', image);
  // }, [productData, image]);

  return productData ?(
    
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      {/* product Data */}
<div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

{/* product Images */}
    <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
      <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
    {
              productData.image ?.map((item,index)=>(
                <img src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' onError={(e) => { e.target.src = 'https://via.placeholder.com/300'; }} onClick={()=>setImage(item)}/>
      ))
    }

          
      </div> 
          <div className='w-full sm:w-[45%] '>
            <img src={image} alt="" className='w-full h-auto' onError={(e) => { e.target.src = 'https://via.placeholder.com/500'; }} />
          </div>

      {/* product info */}

      <div className='flex-1'>
      <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
      <div className='flex items-center gap-1 mt-2'>
              <img src={asset.star} alt="" className="w-10" onError={(e) => { e.target.src = 'https://via.placeholder.com/40'; }} />
              <img src={asset.star} alt="" className="w-10" onError={(e) => { e.target.src = 'https://via.placeholder.com/40'; }} />
              <img src={asset.star} alt="" className="w-10" onError={(e) => { e.target.src = 'https://via.placeholder.com/40'; }} />
              <img src={asset.star} alt="" className="w-10" onError={(e) => { e.target.src = 'https://via.placeholder.com/40'; }} />
              <img src={asset.starr} alt="" className="w-10" onError={(e) => { e.target.src = 'https://via.placeholder.com/40'; }} /> 
     <p className='pl-2'>(123)</p>
      </div>

      <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
  <div className='flex flex-col gap-4 my-8'>
    <p>Select Size</p>

    <div className='flex gap-2'>
    {
                  productData.size ?.map((item,index)=>(
        <button key={index} className={`border p-3 bg-gray-100 ${item === size ?'bg-orange-500':''}`} onClick={()=>setSize(item)}> {item}</button>
      ))
    }
    </div>
    <button onClick={()=>addCart(productData._id,size)} className='bg-black text-white px-3 text-sm active:bg-gray-700'>ADD TO CART</button>
    <hr className='mt-8 sm:w-4/5' />
    <div className='tet-sm text-gray-500 mt-5 flex flex-col gap-1'>
      <p>100% Original product.</p>
      <p>Cash on delivery is available on this product.</p>
      <p>Easy return and  exchange policy within 7 days.</p>
    </div>
              
  </div>
         
      </div>
    </div>
    
</div>
      {/* Description & Review section */}

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>

        <div className='flex flex-col gap-4 border px-6 text-sm text-gray-500 mt-3'>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio dicta velit dolorem iste, placeat numquam fuga doloremque molestias quod neque eligendi, ab facere! Quae, eligendi quas nobis deleniti ipsam sint?</p>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, asperiores vel? Minima dolore, reiciendis assumenda obcaecati, qui debitis corporis autem commodi repellendus suscipit fugit architecto facere, consequatur nulla aliquid natus.</p>
        </div>
      </div>

{/* display relative product */}
<RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ): <div className='opacity-0'></div>
}

export default Product
