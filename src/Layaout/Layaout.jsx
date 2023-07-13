import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/HeaderPpal'
import Footer from '../Components/Footer/Footer'
import './layaout.css'

function Layaout() {
  return (
    <div id='layout'>
      <Header/>
      <section>
        <Outlet />
      </section>
      <Footer/>
    </div>
  )
}

export default Layaout