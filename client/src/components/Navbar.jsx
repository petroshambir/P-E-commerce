import React, { useContext, useState } from 'react'
import { asset } from '../assets/asset';
import { Link, NavLink } from 'react-router-dom';
import { ShopeContext } from '../contexte/ShopeContext';
function Navbar() {
    const [visbel, setvisbel] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItem} = useContext(ShopeContext);

    const logout = () => {
        navigate('login')
        localStorage.removeItem('token');
        setToken('');
        setCartItem({})
    }
    return (
        <div className='flex items-center justify-between p-5 font-medium'>
            <img src={asset.logoBella} alt="" className='w-32' />

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <li>HOME</li>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
                </NavLink>

                <NavLink to='/Collections' className='flex flex-col items-center gap-1'>
                    <li>Collection</li>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
                </NavLink>

                <NavLink to='/About' className='flex flex-col items-center gap-1'>
                    <li>About</li>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
                </NavLink>

                <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
                    <li>Contact</li>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700  hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>

                <img onClick={() => setShowSearch(true)} src={asset.search} alt="" className='w-5 cursor-pointer' />

                <div className='group relative'>

                        <img onClick={()=>token ? null : navigate('/login')} className='w-5 cursor-pointer' src={asset.login} alt="" />
                        {token &&
                        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-blue-400'>
                                <p className='cursor-pointer hover:text-black'>My Profile</p>
                                <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Order</p>
                                <p onClick={logout} className='cursor-pointer hover:text-black'>Log Out</p>
                            </div>
                        </div>
                        }
                
                   
                </div>

                <Link to='/Cart' className='relative'>
                    <img src={asset.cart} alt="" className='w-5 min-w-5' />

                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setvisbel(true)} src={asset.menu} alt="" className='w-5 sm:hidden cursor-ponter' />


            </div>

            {/* small divice menu */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visbel ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setvisbel(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img src={asset.close} alt="" className='h-4 rotate-180' />

                        <p>close</p>
                    </div>
                    <NavLink onClick={() => setvisbel(false)} className='py-2 pl-6 ' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setvisbel(false)} className='py-2 pl-6 ' to='/About'>About</NavLink>
                    <NavLink onClick={() => setvisbel(false)} className='py-2 pl-6 ' to='/Collections'>Collection</NavLink>
                    <NavLink onClick={() => setvisbel(false)} className='py-2 pl-6 ' to='/Contact'>Contact</NavLink>
                </div>


            </div>


        </div>
    )
}

export default Navbar