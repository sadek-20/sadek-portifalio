import React from 'react'
import Showcase from '../components/Showcase'
import Testimonials from '../components/Testimonials'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
    initial={{y:100}}
    animate={{y:0}}>
      <div className='mb-20'>
        <Showcase />
      </div>
        <Testimonials/>
    </motion.div>
  )
}

export default Home