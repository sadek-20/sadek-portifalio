import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { BsTelephone } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser';
const Contacts = () => {
    const form = useRef();
    const [send , setSend] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_juok226', 'template_qovbnkl', form.current, {
          publicKey: '7ZC-zCbifooXXPd1A',
        })
        .then(
          () => {
            setSend(true);
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <motion.div className='mt-20 flex flex-wrap sm:flex-nowrap items-center space-x-5 justify-around p-10 sm:px-8 lg:px-8 '
    initial={{ opacity: 0 , y: 100}}
    animate={{ opacity: 1, y: 0}}
    >
        <motion.div className='space-y-7'
        initial={{ opacity: 0 , x: -100}}
        animate={{ opacity: 1, x: 0}}
        >
            <h1 className='font-semibold text-4xl'>Contact Info</h1>
            <p className='text-gray-400'>let connect here send me massages i will answer you as soon as possible </p>
            <div className='text:md flex text-gray-500 space-x-2 items-center '>
                <BsTelephone className='text-blue-500'/>
                <p>Phone: +252619171300</p>
            </div> 
            <div className='text:md flex text-gray-500 space-x-2 items-center '>
                <MdEmail className='text-blue-500' />
                <p>Email: saqavic1234@gmail.com</p>
            </div> 
            <div className='text:md flex text-gray-500 space-x-2 items-center'>
                <FaLocationDot className='text-blue-500' />
                <p>Location: Mogadishu,Somalia</p>
            </div> 
        </motion.div>
        
        <motion.form action="" 
        ref={form}
        onSubmit={sendEmail}
        className='w-full max-w-md space-y-6'>
            <input type="text" name="name" placeholder="Your Name" className='rounded-sm p-3 w-full border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-100'
        initial={{ x: 100}}
        animate={{ x: 0}}
            />
             <input type="email" name="email" placeholder="Email" className='rounded-sm p-3 w-full border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-100'
            />
            <textarea type="text" name="message" placeholder="Massage" className='rounded-sm p-8 w-full border border-gray-200 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-100'
            > </textarea>
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md items-center justify-center w-full text-lg'
            >Send massage</button>
            {
                send && (
                    <div className="bg-green-500 p-4 rounded-md text-white" role='alert'>
                        <span className=''>
                            Massage sent successfully. I'll get back to you shortly.  
                        </span>
                        thanks for your reaction.
                    </div>
                )
            }
        </motion.form>
    </motion.div>
  )
}

export default Contacts