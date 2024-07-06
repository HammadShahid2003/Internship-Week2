import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes,Link } from 'react-router-dom'
import ErrorPage from './Components/errorpage.jsx'
import Contact from './Components/Contact.jsx'
import About from './Components/About.jsx'
import Home from './Components/Home.jsx'


function App() {
  

  return (
    <>
      <nav className='Navbar'>
        <ul className='Nav-links'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about" >About</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
        </ul>

      </nav>

   
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>


    </Routes> 


    </>
  )
}

export default App
