import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { ShopeContext } from '../contexte/ShopeContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Loggin() {

  const [currentState, setCurrentState] = useState('Login');
  const { navigate, setToken, token } = useContext(ShopeContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [email, setEmail] = useState('')
  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const respons = await axios.post(`/api/user/register`,{ name, email, password })
        
        

        if(respons.data.success){
          setToken(respons.data.token)
          localStorage.setItem('token', respons.data.token)
         
        }else{
          toast.error(respons.data.message)
        }
      } else {
        const respons = await axios.post(`/api/user/login`,{email, password})
        if (respons.data.success) {
          setToken(respons.data.token)
          localStorage.setItem('token',respons.data.token)
        }else{
          toast.error(respons.data.message)
        }
console.log(respons.data)
      }
    } catch (error) {
console.log(error)
toast.error.message
    }
  }

  useEffect(()=>{
if (token) {
  navigate('/')
}
  },[token])
  return (

    <form onSubmit={onSubmitHandle} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl '>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === "Login" ? "" : <input onChange={(e) => setName(e.target.value)} value={name} type="text"  className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}


      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email"  className='w-full px-3 py-2 border border-gray-800' placeholder='email' required />

      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"  className='w-full px-3 py-2 border border-gray-800' placeholder='password' required />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forget your password</p>
        {
          currentState === "Login" ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Creat account</p> : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Loggin