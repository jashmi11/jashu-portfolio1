import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Jashu from './Components/Jashu/Jashu'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Jashu/>
      <About/>
      <Service/>
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App

