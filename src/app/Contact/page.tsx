import React from 'react'
import Header from '../Header/page'
import Footer from '../Footer/page'
import Style from "./contact.module.css"

const Contact = () => {
  return (
    <div>
      <Header/>
      <div className='text-center m-10'>
        <h2 className='m-10 text-3xl font-bold'>Get in Touch</h2>
        <p className='text-2xl text-[rgb(255,165,0)]'>Email: support@burgerwebsite.com</p>
        <p className='text-2xl text-[rgb(255,165,0)]'>Phone: +123 456 7890</p>
        <p className='text-2xl text-[rgb(255,165,0)]'>Address: 123 Burger St, Food Town</p>
      </div>
      <br />
      <br /><br /> <br /> <br />
      <Footer/>
    </div>
  )
}

export default Contact
