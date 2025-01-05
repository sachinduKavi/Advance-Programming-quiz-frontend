// import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './screens/MainPage'
import Home from './components/Pages/Home'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'




function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/mainpage' element={<MainPage/>}/>
          


        </Routes>
        
      </BrowserRouter>
      {/* <Home/> */}
      
      
    </>
  )
}
    // https://66eead92de4e9a441ed73561--iridescent-unicorn-f4897a.netlify.app/
export default App
