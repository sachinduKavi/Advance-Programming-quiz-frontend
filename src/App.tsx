// import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './screens/MainPage'
import Home from './components/Pages/Home'
import Dashboard from './components/Pages/Dashboard'
import About from './components/Pages/About'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mainpage' element={<MainPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>

        </Routes>
        
      </BrowserRouter>
      {/* <Home/> */}
      
      
    </>
  )
}
    // https://66eead92de4e9a441ed73561--iridescent-unicorn-f4897a.netlify.app/
export default App
