import React from 'react'
import {asset} from '../assets/asset'
function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={asset.logoBella} alt="" className='mb-5 w-32'/>
           <p className='w-full md:2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consequuntur reiciendis molestiae aut repellendus temporibus placeat, ab, tenetur, ex molestias sapiente numquam fugit magnam maiores natus neque laboriosam. Repudiandae, tenetur.
            </p> 
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
           
           <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>about Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
           </ul>
        </div>

        <div> 
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>

            <li>+256-707-4154-21</li>
            <li>petroshambirr@gmail.com</li>
            </ul>

        </div>

        </div>

        <div>
    <hr />
    <p className='py-5 text-sm text-center'>Copyright 20205@ habesha.com - All Right REserved </p>
        </div>
    </div>
  )
}

export default Footer