import React from 'react'
import Title from '../components/Title'
import { asset } from '../assets/asset';
import NewsLaterBox from '../components/NewsLaterBox'
function Contact() {

  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
<Title text1={'CONTACT'} text2={'US'}/>

      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={asset.contactUs} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
    <p className='font-semibold text-xl text-gray-600'>Our Store</p>
    <p className='text-gray-500'>456 wilstat <br /> Suite 350, Washington,us</p>
    <p className='text-gray-500'>tel:00 256 707 4154 21 <br />Email: petroshambirr@gmail.com </p>
    <p className='font-semibold text-xl text-gray-600'>careers at habesha e-commerce store</p>
    <p className='text-gray-500 '>learn more about our teams and job openings.</p>
    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs </button>
        </div>
      </div>
      <NewsLaterBox />
    </div>
  )
}



export default Contact