import React from 'react'
import { NavLink } from 'react-router-dom'
import asset from '../assets/asset'

function SideBar() {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink to='/add' className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'>
                <img src={asset.add} alt="" className='w-12 rounded-4xl'/>
                <p className='hidden md:block'>Add items</p>
            </NavLink>

              <NavLink to='/list' className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'>
                  <img src={asset.orderlist} alt="" className='w-12 rounded-4xl' />
                  <p className='hidden md:block'>List items</p>
              </NavLink>

              <NavLink to='/orders' className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'>
                  <img src={asset.parcel} alt="" className='w-12 rounded-4xl' />
                  <p className='hidden md:block'>Orders</p>
              </NavLink>
        </div>
    </div>
  )
}

export default SideBar