import { useState } from 'react'
// import {Input} from './components/Input'
import { Questions } from './components/Questions'
import { Footer } from './components/Footer/Footer.jsx'
import './App.css'

function App() {

  return (
    <div className="App">
      {/* <Input /> */}
      <Questions />
      <Footer />
    </div>
  )
}

export default App
