import React from 'react'

function NewsLaterBox() {
    const onSubmitHandller = (e)=>{
        e.preventDefault()
    }
  return (
    <div className='text-center'>
<p className='text-2xl font-medium text-gray-800'>subscribe now & get 20% off</p>

<p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, sit obcaecati et, culpa, necessitatibus perferendis totam error hic ipsum quas inventore? Cumque debitis eius culpa nemo a illum ducimus dolore!</p>

<form onClick={onSubmitHandller} className='w-full sm:1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
    <input className='w-full sm:flex-1 outline-none' type="email"placeholder='Enter your email'  required name="" id="" />
    <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
</form>
    </div>
  )
}

export default NewsLaterBox