import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Header/Navbar'
import Main from '../Components/Main/Main'
import Modal from '../Components/Modal/Modal'
import ScriptBundle from '../Script/ScriptBundle'

function Home() {
  return (
    <div>
        <Navbar />
        <Main />
        <Modal />
        <ScriptBundle />
        <Footer />
    </div>
  )
}

export default Home