import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import About from './About'
import Contacts from './Contacts'
import { AnimatePresence } from 'framer-motion'

const Index = () => {
    const Location = useLocation();
  return (
    <div>
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/about'} element={<About/>} />
          <Route path={'/contact'} element={<Contacts/>} />
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default Index