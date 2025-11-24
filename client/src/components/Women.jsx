
import React, { useContext, useEffect, useState } from 'react'
import { ShopeContext } from '../contexte/ShopeContext'
import Titel from './Title';
import ProductsItem from './ProductsItem';

function Women() {

    const { products } = useContext(ShopeContext);
    // console.log(products)

    const [womenCloth, setwomenCloth] = useState([]);
    useEffect(() => {
        const filteredWomenProducts = products.filter(product =>
            product.category && product.category.toLowerCase() === 'women'
        );
        setwomenCloth(filteredWomenProducts);
        // setwomenCloth(products.slice(0, 30))
    }, [products])
  return (
    <>
          <div className='my-10 '>
              <div className='text-center py-8 text-3xl'>
                  <Titel text1={'WOMEN'} text2={'CLOTHES'} />
                  <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base  text-gray-600'>
                     Discover our exquisite women's collection,featuring authentic cultural designs for the modern woman. We offer versatile pieces made from sustainable fabrics, combining traditional patterns with modern silhouettes. Ideal for both formal ceremonies and making a stylish cultural statement in professional settings.
                  </p>
              </div>
              {/* Rendering product */}
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6 text-center'>
                  {
                      womenCloth.map((item, index) => (
                        <div>
                          <ProductsItem key={item._id} id={item._id} name={item.name} image={item.image} price={item.price} />

                          </div>
                      ))
                  }

              </div>
          </div>
    </>
  )
}

export default Women