import React, { useContext, useEffect, useState } from 'react'
import { ShopeContext } from '../contexte/ShopeContext'
import Titel from './Title';
import ProductsItem from './ProductsItem';

function LatestCollection() {

    const {products}= useContext(ShopeContext);
    // console.log(products)

    const [latestProduct,setLatestProduct]=useState([]);
    useEffect(()=>{
setLatestProduct(products.slice(0,10))
    },[products])
  return (
    <div className='my-10'>
    <div className='text-center py-8 text-3xl'>
        <Titel text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 text-justify'>
    Discover our new collection of cultural clothing, where timeless tradition meets contemporary elegance. Each piece is a narrative, meticulously crafted by skilled artisans using natural, premium fabrics. This collection is designed to honor the profound stories and identity of our heritage, allowing you to carry a piece of history into your modern lifestyle. More than just attire, these garments are a wearable connection to a rich cultural legacy, making them perfect for everyday wear that is both meaningful and stylish.
        </p>
    </div>
    {/* Rendering product */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 text-center  '>
        {
         
           latestProduct.map((item,index)=>(
             <div>
           <ProductsItem key={item._id} id={item._id}  name={item.name} image={item.image} price={item.price} />
           <span></span>
             </div>
           ))
         
        }
      
    </div>
      </div>
  )
}

export default LatestCollection