import React from 'react'
import Breadcrumb from "../Asset/breadcrumb-01.jpg"
import Product1 from "../Asset/product-2.jpg"
import Product2 from "../Asset/product-3.jpg"
import Product3 from "../Asset/product-5.jpg"
import Product4 from "../Asset/product-7.jpg"
import Product5 from "../Asset/product-9.jpg"
import Product6 from "../Asset/product-11.jpg"
import Product7 from "../Asset/product-13.jpg"
import Product8 from "../Asset/product-15.jpg"
import Product9 from "../Asset/product-17.jpg"
import Product10 from "../Asset/product-19.jpg"
import Product11 from "../Asset/product-4.jpg"
import Product12 from "../Asset/product-6.jpg"
import Product13 from "../Asset/product-8.jpg"
import Product14 from "../Asset/product-10.jpg"
import Product15 from "../Asset/product-12.jpg"
import Product16 from "../Asset/product-14.jpg"
import Product17 from "../Asset/product-16.jpg"
import Product18 from "../Asset/product-18.jpg"
import Product19 from "../Asset/product-20.jpg"
import Product20 from "../Asset/product-1.jpg"
import Navbar from '../../Component/Navbar/Navbar'
import Secpart from '../../Component/Second-part/Secpart'
import { useNavigate } from 'react-router-dom'

function Shop() {

  const navigate = useNavigate();
  const backToHome = () => {
      navigate("/");
  };

  return (
    <div>
      <div className=''>
        <div className='relative'>
          <img src={Breadcrumb} alt="" className='h-[200px]' />
          <div className='absolute top-14 left-20 breadcrumb-item-active'>
          <button onClick={backToHome}>Home</button>
            <i class="fa-solid fa-minus ps-3 pe-3"></i>
            <span className='text-slate-400'>Shop</span>
            <h1 className='text-4xl font-bold mt-4'>Shop</h1>
          </div>
        </div>


        <div className='flex justify-between p-20'>
          <div>
            <span className='font-bold text-2xl'>10</span> <span className='text-slate-400 text-2xl'>Item On List</span>
          </div>
          <div className='flex items-center'>
            <div>
              <select name="" id="" className='p-3 ms-5 border rounded-md w-[140px]'>
                <option value="Sort by(default)">Sort by(default)</option>
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div>

            <div>
              <select name="" id="" className='p-3 ms-5 border rounded-md w-[140px]'>
                <option value="All">All</option>
                <option value="10 per page">10 per page</option>
                <option value="20 per page">20 per page</option>
                <option value="30 per page">30 per page</option>

              </select>
            </div>

            <div className='ms-5 flex items-center'>
              <button className='font-thin '><i class="fa-solid fa-list-ul text-base"></i></button>
              <button className='ms-3 font-thin'><span class="material-symbols-outlined font-thin">
                grid_on
              </span></button>
            </div>

          </div>
        </div>

        <div>
          <Secpart/>
        </div>
      </div>
    </div>
  )
}

export default Shop
