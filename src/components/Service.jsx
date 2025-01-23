import React from 'react'
import services from '../assets/services.json';
import { BiDesktop, BiMobileAlt } from 'react-icons/bi';
const Service = () => {
  return (
    <div className='mt-16 '>
        <div className='text-center text-3xl mt-16 text-gray-500 font-semibold'>
            <h1>What i offer you..🚀</h1>
        </div>
        <div>
            <div className='grid h-max grid-cols-1 md:grid-cols-2 gap-10 mt-10 bg-white'>
                {services.map((service, index) => (
                    <div key={index} className='m-5 rounded-xl shadow-md p-10'>
                        <div className='flex space-y-5 items-center justify-center flex-col'>
                            { service.name === "Mobile App Development" ?( <BiMobileAlt className='rounded-full w-12 h-12 object-cover text-blue-500'/>):
                                (<BiDesktop className='rounded-full w-12 h-12 object-cover text-blue-500' />)}
                            <h1 className='text-gray-500 ml-5 text-md '>{service.name}</h1>
                        </div>
                        <div className='text-gray-600 p-4 text-lg text-wrap'>
                            <p>{service.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}

export default Service