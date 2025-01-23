import React from 'react'
import testimonials from '../assets/testimonials.json'

const Testimonials = () => {
  return (
    <div>
      <div className='text-center text-3xl text-gray-600 font-medium'>
        <h1>My Happy Clients</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 w-full bg-white'>
          {
            testimonials.map((client =>(
              <div key={client.id} className='rounded-3xl shadow-md p-10'>
                <div className='flex items-center'>
                  <img src={client.img} alt={client.name} className='w-12 h-12 rounded-full object-cover' />
                  <p className='ml-5 space-y-0 font-bold text-base'>
                    <a href={client.link}> {client.name} </a>
                    <p className='text-gray-400 font-normal text-sm mt-4'> {client.nickname} </p>
                  </p>
                </div>
                <div>
                  <p> {client.desc} </p>
                </div>
             </div>
            )))
          }
      </div>
    </div>
  )
}

export default Testimonials