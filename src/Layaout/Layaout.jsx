import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPpal from '../Components/Header/HeaderPpal'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import './layaout.css'

function Layaout() {
  const token = localStorage.getItem('token');
  return (
    <div id='layout'>
      {token ? <Header /> : <HeaderPpal />}
      <section>
        <Outlet />
      </section>
      <Footer/>
    </div>
  )
}

export default Layaout