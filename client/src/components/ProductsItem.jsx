import React, { useContext, useState } from 'react'
import { ShopeContext } from '../contexte/ShopeContext'
import { Link } from 'react-router-dom';

function ProductsItem({ id, image, name, price }) {

    const { currency } = useContext(ShopeContext);
    const [imgError, setImgError] = useState(false)

    const fallbackImage = '/images/placeholder-product.jpg'

const displayImage = Array.isArray(image) ? image[0]:image;
    return (

        <div>
            <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
                <div className='overflow-hidden' aria-label={`view details for ${name}`}>


                    <img className='hover:scale-110 transition ease-in-out' src={imgError ? fallbackImage: displayImage} alt="" loading='lazy' />



                </div>

                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <p className='text-sm font-medium'>{currency}{price}</p>
            </Link>
        </div>
    )
}


export default ProductsItem