import Reach, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './screens/MainPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </>
  )
}
    // https://66eead92de4e9a441ed73561--iridescent-unicorn-f4897a.netlify.app/
export default App
