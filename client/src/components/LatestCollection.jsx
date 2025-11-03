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
    },[])
  return (
    <div className='my-10'>
    <div className='text-center py-8 text-3xl'>
        <Titel text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum error officia ipsum dolorem autem ab aspernatur iusto exercitationem eligendi, similique ullam, earum corporis laboriosam alias odio esse neque commodi. Reprehenderit?
        </p>
    </div>
    {/* Rendering product */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
           latestProduct.map((item,index)=>(
           <ProductsItem key={index} id={item._id}  name={item.name} image={item.image} price={item.price}/>
           ))
        }
      
    </div>
      </div>
  )
}

export default LatestCollection