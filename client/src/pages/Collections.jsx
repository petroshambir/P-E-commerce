import React, { useContext, useEffect, useState } from 'react'
import { ShopeContext } from '../contexte/ShopeContext'
import { asset } from '../assets/asset';
import Titel from '../components/Title';
import ProductsItem from '../components/ProductsItem';

function Collections() {
  const {products}=useContext(ShopeContext);
  const [ShowFilter,setShowFilter]=useState(false)
  const [filterProducts,setFilterProducts]=useState([]);
  const [category,setCategory]=useState([]);
  const [subcategorey, setsubcategorey]=useState([])

  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
setCategory(prev=>prev.filter(item=>item !== e.target.value))
    }else{
setCategory(prev=>[...prev,e.target.value])
    }
  };

  const toggleSubCategory = (e) => {
    if (subcategorey.includes(e.target.value)) {
      setsubcategorey(prev => prev.filter(item => item !== e.target.value))
    } else {
      setsubcategorey(prev => [...prev,e.target.value])
    }
  };

  

  const applyFilter =()=>{
    let productsCopy=products.slice();

   if (category.length > 0) {
    productsCopy = productsCopy.filter(item=>category.includes(item.category));
   }
    if (subcategorey.length > 0) {
      productsCopy = productsCopy.filter(item => subcategorey.includes(item.subcategorey));
    }
 
    
   setFilterProducts(productsCopy)
  }

useEffect(()=>{
  console.log(subcategorey)
},[subcategorey])

  useEffect(() => {
    console.log(category)
  }, [category])

  useEffect(()=>{
setFilterProducts(products)
},[]);

useEffect(()=>{
applyFilter();
},[category,subcategorey])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 '>
{/* filter Option */}
<div className='min-w-60'>
  <p onClick={()=>setShowFilter(!ShowFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
     {/* <img className={`h-3 sm:hidden ${ShowFilter ? 'rotate-90':''}`} src={asset.dropdown_icon} alt="" />  */}
          <span className={`h-3 sm:hidden ${ShowFilter ? 'rotate-90' : ''}`}>ico</span>
  </p>

  {/* category filter */}
  <div className={`border border-gray-300 pl-5 py-3 mt-6 ${ShowFilter ?"":"hidden"} sm:block`}>

<p className='mb-3 text-sm font-medium'>CATEGORIES</p>

<div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
<p className='flex gap-2'> 
  <input type="checkbox" name="" id="" className='w-3' value={'men'} onChange={toggleCategory}/>Men
</p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" id="" className='w-3' value={'women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" id="" className='w-3' value={'kids'} onChange={toggleCategory}/>Kids
            </p>
</div>
  </div>

{/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${ShowFilter ? "" : "hidden"} sm:block`}>

          <p className='mb-3 text-sm font-medium'>TYPE</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" name="" id="" className='w-3' value={'Topwear'} onChange={toggleSubCategory}/>TopWear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" id="" className='w-3' value={'BottomWea'} onChange={toggleSubCategory}/>BottomWear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" name="" id="" className='w-3' value={'WinterWear'} onChange={toggleSubCategory}/>WinterWear
            </p>
          </div>
        </div>

</div>

{/* Right side */}
 
  <div className='flex-1'>
    <div className='flex justify-between text-base sm:text-2xl mb-4'>
<Titel text1={'ALL'} text2={'CoLLECTIONS'}/>

{/* product sort */}

<select name="" id="" className='border-2 border-gray-300 text-sm px-2'>
<option value="relavent">Sort by : Relavent</option>
<option value="low-high">Sort by : Low to High</option>
<option value="high-low">Sort by : High to Low</option>
</select>
    </div>

    {/* map product */}
     <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
{
  filterProducts.map((item,index)=>(
<ProductsItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
  ))
}
     </div>
  </div>
    </div>
  )
}

export default Collections