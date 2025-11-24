
import React, { useContext, useEffect, useState } from 'react'
import { ShopeContext } from '../contexte/ShopeContext'
import Titel from './Title';
import ProductsItem from './ProductsItem';

function Men() {

    const { products } = useContext(ShopeContext);
    // console.log(products)

    const [menCloth, setMenCloth] = useState([]);
    useEffect(() => {
        const filteredMenProducts = products.filter(product =>
            product.category && product.category.toLowerCase() === 'men')
        setMenCloth(filteredMenProducts);
        // setMenCloth(products.slice(0, 30))
    }, [products])
  return (
    <>
          <div className='my-10'>
              <div className='text-center py-8 text-3xl'>
                  <Titel text1={'MEN'} text2={'CLOTHES'} />
                  <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                     Discover sophistication in every thread with our men's heritage wear.Each garment combines traditional craftsmanship with contemporary designs, using premium fabrics for unmatched comfort. Whether for special occasions or elevating your daily wardrobe, find pieces that honor tradition while embracing modern style.
                  </p>
              </div>
              {/* Rendering product */}
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 text-center'>
                  {
                      menCloth.map((item, index) => (
                          <ProductsItem key={item._id} id={item._id} name={item.name} image={item.image} price={item.price} />
                      ))
                  }

              </div>
          </div>
          
    </>
  )
}

export default Men