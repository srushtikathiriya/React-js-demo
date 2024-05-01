import React from 'react'
import "../Nav/Nav.css"

function Nav() {
  return (
    <div>
      <div className='bg-yellow-50 containers1'>
        <div className='flex flex-wrap'>
         <p className='font-semibold'>Welcome to our international shop! Enjoy free shipping on orders $100 up.</p>
         <a href="#" className='font-semibold text-xl underline text-rose-600 Shop-now'>Shop Now <span className='shop-arrow'><i class="fa-solid fa-arrow-right"></i></span> </a>
        </div>
      </div>
    </div>
  )
}

export default Nav
