import React from 'react'
import {asset} from '../assets/asset'

function Hero() {
  return (
    <div className='w-fit m-auto'>
  {/* hero left side */}
  {/* <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
  <div className='tex-[#414141]'>

    <div className='flex items-center gap-2'>
<p className='w-8 md:w-11 h-[20px] bg-[#414141]'></p>
<p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
    </div>
<h1 className='text-3xl sm:py-3 lg:tex-5xl leading-relaxed'>Latest Arrival</h1>

<div className='flex items-center gap-2'>
<p className='font-semibold text-sm md:text-base'>Shop Now</p>
<p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
</div>
  </div>

  </div> */}

  {/* Hero right side */}

  <img src={asset.banner} alt="" className='w'/>
    </div>
  )
}

export default Hero