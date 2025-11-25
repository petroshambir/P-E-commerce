import React, {  useContext, useEffect, useState } from 'react'
import { ShopeContext } from '../contexte/ShopeContext'
import Titel from './Title';
import ProductsItem from './ProductsItem';

function BestSeller() {
    const{products}= useContext(ShopeContext);
    const [bestSeller,setbestseller]=useState([]);
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestSeller))
        setbestseller(bestProduct.slice(0,10))
    },[products])
  return (
    <div className='my-10'>
<div className='text-center text-3xl py-8'>
<Titel text1={'Best'} text2={'Sellers'}/>
<p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 text-justify'>
Discover our best-selling collection, where customer favorites meet exceptional quality. These are the pieces that everyone is talking about—celebrated for their perfect blend of authentic craftsmanship, stunning design, and everyday comfort. When you choose a best seller, you're not just getting a beautiful garment; you're joining a community of satisfied customers who have made it a top choice. Don't just take our word for it; experience the quality that makes them so popular. Shop the trend and see why these items are in high demand!

</p>
</div>
<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 text-center'>
{
  bestSeller.map((item,index)=>(
 <ProductsItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
  ))
}
</div>
    </div>
  )
}

export default BestSeller