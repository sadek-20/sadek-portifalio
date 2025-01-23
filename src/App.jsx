import React from 'react'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Index from './components/Index'

function App() {
  return (
    <BrowserRouter>
      <div className='max-w-4xl mx-auto p-2'>
        <Header/>
        <Index/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App