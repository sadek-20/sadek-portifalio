import React from 'react'
import sanka from '../assets/SYD-ABA-3.jpg';
import { DiJavascript, DiReact } from 'react-icons/di';
import { RiHtml5Fill, RiTailwindCssFill } from 'react-icons/ri';
import { BiCode, BiFootball } from 'react-icons/bi';
import { FaCreativeCommons, FaNodeJs } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { GiSelfLove } from 'react-icons/gi';
import { FiFilm } from 'react-icons/fi';
import { MdNature } from 'react-icons/md';
import { TbSwimming } from 'react-icons/tb';
import Service from './Service';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
    <motion.div className='sm:grid grid-col-1 md:grid grid-cols-2 mt-24'
    initial={{ x: -100 ,opacity: 0 }}
    animate={{ x: 0 ,opacity: 1 }}
    >
        <div className='flex items-center flex-wrap relative justify-center h-max '>
          <div className='w-3/4 h-3/4 rounded-3xl relative shadow-slate-400 overflow-hidden'>
            <img src={sanka} alt="" className='h-full w-full object-contain rounded-3xl'/>
          </div>
        </div>
        <div className='p-5 md:p-0 md:text-left text-center'>
            <h1 className='font-semibold text-3xl'>About Me</h1>
            <p className='text-lg pt-4'>
                My name is Abdulahi Ally. I am a full-stack developer and UI/UX designer from Mogadisho, Somalia.<br/>I have a passion for creating visually appealing and user-friendly websites.<br />I can be your next developer.
            </p>
            <div className='mt-5'>
                <h2 className='text-2xl text-gray-500'>Tools</h2>
                <div className='flex items-center flex-wrap w-full'>
                    <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                        <DiJavascript/> Java script
                    </div>
                    <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                        <RiHtml5Fill/> HTML
                    </div>
                    <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                        <DiReact/> React
                    </div>
                    <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                        <FaNodeJs/> nodeJs
                    </div>
                    <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                        <RiTailwindCssFill/> TailwindCss
                    </div>
                    <div className='m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                        <SiRedux/> Redux
                    </div>
                </div>

            </div>
            <div className='mt-2'>
                <h2 className='font-semibold text-gray-500 text-2xl'>Intrests</h2>
                <div className='flex items-center flex-wrap w-full '>
                    <div className='m-3 flex items-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                        <BiCode/> Coding
                    </div>
                    <div className='m-3 flex items-center rounded-xl bg-gray-300 w-28  justify-center h-7 text-lg'>
                        <GiSelfLove/> Discipline
                    </div>
                    <div className='m-3 flex items-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                        <BiFootball/> Football
                    </div>
                    <div className='m-3 flex items-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                        <FiFilm/> Movies
                    </div>
                    <div className='m-3 flex items-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                        <MdNature/> Natural
                    </div>
                    <div className='m-3 flex items-center rounded-xl bg-gray-300 w-28 justify-center h-7 text-lg'>
                        <TbSwimming/> Swimming
                    </div>
                </div>
            </div>
           
        </div>
    </motion.div>
     <Service/>
     </>
  )
}

export default About