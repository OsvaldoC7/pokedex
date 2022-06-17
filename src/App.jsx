import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'
import Topbar from './components/Topbar'
import Home from './views/Home'
import Pokemon from './views/Pokemon'
import Types from './views/Types'

export default function App() {
  return (
    <div className='w-full h-screen'>
      <BrowserRouter>
        <Topbar />
        <div className='w-full h-screen px-4 md:px-8 lg:px-16'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/types' element={<Types />} />
            <Route path='/pokemon' element={<Pokemon />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
