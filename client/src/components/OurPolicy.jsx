import React from 'react'
import { asset } from '../assets/asset'

function OurPolicy() {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
          {/* <img src={asset.e-icon} alt="" className='w-12 m-auto mb-5' /> */}
          <p className='font-semibold'>Easy Exchange policy</p>
          <p className='text-gray-400'>we offer hassle free exchange policy</p>
        </div>

      <div>
        {/* <img src={asset.e-icon} alt="" className='w-12 m-auto mb-5' /> */}
        <p className='font-semibold'>7 Days Return policy</p>
        <p className='text-gray-400'>we provid 7 Days free return policy</p>
      </div>

      <div>
        {/* <img src={asset.e-icon} alt="" className='w-12 m-auto mb-5' /> */}
        <p className='font-semibold'>Best customer support</p>
        <p className='text-gray-400'>we provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy