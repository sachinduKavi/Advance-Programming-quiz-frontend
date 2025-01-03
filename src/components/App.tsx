// import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './screens/MainPage'
import Home from './components/Pages/Home'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mainpage' element={<MainPage/>}/>
          


        </Routes>
        
      </BrowserRouter>
      {/* <Home/> */}
      
      
    </>
  )
}
    // https://66eead92de4e9a441ed73561--iridescent-unicorn-f4897a.netlify.app/
export default App
