import React, { useContext, useEffect, useState } from 'react'
import { ShopeContext } from '../contexte/ShopeContext'
import { asset } from '../assets/asset';
import { useLocation } from 'react-router-dom';

function SearchBar() {

    const { search, setSearch, showSearch, setShowSearch }=useContext(ShopeContext);
const [visble,setVisble]=useState(false);
const location = useLocation();

useEffect(()=>{
if (location.pathname.includes('collection') && setShowSearch) {
    setVisble(true);
}else{
    setVisble(false)
}
},[location])

  return showSearch ?(
      <div className='border-t border-b my-4 bg-gray-100 text-center'>

<div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
<input type="text" placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e)=>setSearch(e.target.value)}/>
<img src={asset.search} alt="" className='w-4'/>
</div>
<img src={asset.cross} alt="" className='inline w-3 cursor-pointer' onClick={()=>setShowSearch(false)}/>
    </div>
  ):null
}

export default SearchBar