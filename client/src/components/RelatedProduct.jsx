import React, { useContext, useEffect, useState } from 'react'
import { ShopeContext } from '../contexte/ShopeContext'
import Title from './Title'
import ProductItem from './ProductsItem'
function RelatedProduct({category,subCategory}) {

  const{products}=useContext(ShopeContext);
  const [related,setRelated]=useState([]);
  useEffect(()=>{
if (products.length >0) {
  let productsCopy =products.slice();
  productsCopy = productsCopy.filter((item)=> category === item.category);
  productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory);
  setRelated(productsCopy.slice(0,5));
}
  },[products])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
<Title text1={'RELATED' } text2={'PRODUCT'}/>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
{
  related.map((item,index)=>(
    <ProductItem key={index} id={item._id} name={item.name} price={item.price} 
    // image={item.image}/>
       image={Array.isArray(item.image) ? item.image[0]:item.image}
       />
  ))
}
        </div>
    </div>
  )
}

export default RelatedProduct
