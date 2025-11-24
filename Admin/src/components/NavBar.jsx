import React from 'react'
import asset from '../assets/asset'

function NavBar({setToken}) {

  return (
    <div className='flex items-center py-2 px-[4%] justify-between '>
      <img src={asset.logo} alt="" className='w-[max(10%,80px)]' />

      <img src={asset.logout} alt="" className='w-[max(5%,40px)] rounded-2xl' onClick={()=>setToken("")}/>
    
    </div>

  )
}

export default NavBar