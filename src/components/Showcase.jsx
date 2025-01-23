import React from 'react'
import { BsGithub, BsWhatsapp } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import image from '../assets/SYD-ABA-2-cropped.jpg'

const Showcase = () => {
    const phoneNumber = '+252619171300';
    const whatsAppUrl = `https://wa.me/${phoneNumber}`;
    
    const handleRedirect = () => {
        window.location.href = whatsAppUrl;
    }

  return (
    <div className='flex flex-col-reverse sm:flex-row mt-24 items-center justify-between'>
        <div className='space-y-6 items-center sm:text-left'>
            <h2 className='font-bold text-gray-800 text-3xl'> Abdulahi Ally </h2>
            <p className='font-medium text-gray-600'>I am a passionate web developer with a talent for creating innovative, user-friendly websites. <br/> My work reflects a commitment to excellence, continuous learning, and impactful digital experiences.</p>
            <div className='flex space-x-4 text-center justify-center sm:justify-start'>
             <h2 className=' cursor-pointer text-2xl transition-all hover:text-blue-500  '><Link to={'//github.com/sadek-20'}>   <BsGithub/>  </Link></h2>
             <h2 className=' cursor-pointer text-2xl transition-all hover:text-green-500  '><Link to={'#'} onClick={handleRedirect}>   <BsWhatsapp/>  </Link></h2>
            </div>
            <button className="bg-blue-600 text-white p-2 hover:-translate-y-1 duration-100 rounded-lg mb-50 flex items-center justify-center">
            <a href="resume.pdf" download={true}>
              Download Resume
            </a>
            </button>
        </div>
        <div className='w-80 mb-10 sm:m-0 '>
            <img src={image} alt="Abdulahi Ally" className='rounded-full object-cover' />
        </div>
    </div>
  )
}

export default Showcase