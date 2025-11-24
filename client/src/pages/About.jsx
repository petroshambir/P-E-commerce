import React from 'react'
import Titel from '../components/Title'
import { asset } from '../assets/asset'
import NewsLaterBox from '../components/NewsLaterBox'
function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
<Titel text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>

    <img className='w-full md:max-w-[450px]' src={asset.hero} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex nulla ratione odit? At soluta laboriosam magni quo ipsam. Magnam, atque. Dolor fugiat sunt voluptatum neque maxime nihil deserunt explicabo!</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus distinctio, repellendus qui similique sit excepturi, facilis quidem ab possimus vitae voluptatem quis commodi quae soluta incidunt molestias earum! Animi, repellendus?</p>
    <b className='text-gray-800'>Our Mission</b>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo necessitatibus consequatur deserunt dolore ad ex mollitia quos nostrum laudantium optio, impedit eligendi cum deleniti harum illo repellat assumenda nam provident.</p>
        </div>

      </div>

    <div className='text-xl py-4'>
<Titel text1={'WHY'} text2={'CHOOSE US'}/>
    </div> 

    <div className='flex flex-col md:flex-row text-sm mb-20'>

    <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
<b>Quality assurance:</b>
<p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, nisi ex totam quia, incidunt enim assumenda excepturi ut necessitatibus voluptatum repellendus deserunt omnis reprehenderit quibusdam laudantium pariatur laboriosam facere quam.</p>
    </div>

        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, nisi ex totam quia, incidunt enim assumenda excepturi ut necessitatibus voluptatum repellendus deserunt omnis reprehenderit quibusdam laudantium pariatur laboriosam facere quam.</p>
        </div>

        <div className=' px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional custmer service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, nisi ex totam quia, incidunt enim assumenda excepturi ut necessitatibus voluptatum repellendus deserunt omnis reprehenderit quibusdam laudantium pariatur laboriosam facere quam.</p>
        </div>

    </div>
      <NewsLaterBox />
    </div>
  )
}

export default About