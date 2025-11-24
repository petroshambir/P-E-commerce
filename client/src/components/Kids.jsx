
import React, { useContext, useEffect, useState } from 'react'
import { ShopeContext } from '../contexte/ShopeContext'
import Titel from './Title';
import ProductsItem from './ProductsItem';

function Kids() {

    const { products } = useContext(ShopeContext);
    // console.log(products)

    const [kidsCloth, setKidsCloth] = useState([]);
    useEffect(() => {
        const filteredKidsProducts = products.filter(product =>
            product.category && product.category.toLowerCase() === 'kids'
        );
        // setKidsCloth(products.slice(0, 30))
        setKidsCloth(filteredKidsProducts);
    }, [products])
  return (
    <>

          <div className='my-10'>
              <div className='text-center py-8 text-3xl'>
                  <Titel text1={'KIDS'} text2={'CLOTHES'} />
                  <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                     Introduce your children to their heritage with our charming cultural clothing line.Designed for comfort and play, each piece is made from soft, breathable fabrics with authentic traditional patterns. These durable outfits are perfect for passing down traditions to the next generation while letting kids be kids.
                  </p>
              </div>
              {/* Rendering product */}
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 text-center'>
                  {
                      kidsCloth.map((item, index) => (
                          <ProductsItem key={item._id} id={item._id} name={item.name} image={item.image} price={item.price} />
                      ))
                  }

              </div>
          </div>

    </>
  )
}

export default Kids