import React, { useState } from 'react'
import { HiMenuAlt1 , HiOutlineX } from "react-icons/hi";
import { Link } from 'react-router-dom';
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex items-center justify-between pt-2'>
      <Link to={'/'} className="font-bold text-2xl">SADIIQ</Link>
      <div className='hidden md:flex items-center gap-6 font-medium text-grey-600'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link> 
        <div className='bg-blue-600 text-white hover:translate-y-1 duration-100 px-3 py-1 rounded-lg'>
       <Link to={'/contact'}>Contact</Link>
       </div>
      </div>
      <div className={`fixed top-0 z-50 bg-white w-60 h-screen
    shadow-2xl ${
      open ? "right-0" : "right-[-100%]"
    } md:hidden flex flex-col space-y-10 font-medium text-gray-600
    pt-20 p-7 duration-100 border-l border-t border-b rounded-tl-lg rounded-bl-2xl`}>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link> 
        <div className='bg-blue-600 text-white hover:translate-y-1 duration-100 px-3 py-1 rounded-lg'>
       <Link to={'/contact'}>Contact</Link>
       </div>
      </div>
      <div className='text-3xl md:hidden z-50' onClick={()=>{setOpen(!open)}}>
        { open ? (<HiOutlineX className='h-7 cursor-pointer ' />) :
        (<HiMenuAlt1 className='h-7 cursor-pointer ' />)}
      </div>
    </div>
  )
}

export default Header