import React from 'react'
import CssStyle  from "./footer.module.css"

const Footer = () => {
  return (
    <div className='bg-[#333] p-5 text-center font-sans'>
      <h3 className='mb-2 text-2xl'>Burger Heaven</h3>
      <p className='m-1 text-[14px]'>Delicious burgers, made fresh every day!</p>
      <p>&copy; 2024 Burger Haven. All rights reserved.</p>
    </div>
  )
}

export default Footer
