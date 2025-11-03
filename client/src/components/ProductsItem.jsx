import React, { useContext } from 'react'
import { ShopeContext } from '../contexte/ShopeContext'
import { Link } from 'react-router-dom';

function ProductsItem({id,image,name,price}) {
  
const {currency}=useContext(ShopeContext);

    return (

    <div>
<Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
<div className='overflow-hidden'>
    <img className='hover:scale-110 transition ease-in-out' src={image} alt="" />
</div>

<p className='pt-3 pb-1 text-sm'>{name}</p>
<p className='text-sm font-medium'>{currency}{price}</p>
</Link>
    </div>
  )
}

export default ProductsItem