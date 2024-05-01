import React from 'react'
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../Asset/breadcrumb-01.jpg'


function Wishlist() {
    const navigate = useNavigate();
    const backToHome = () => {
      navigate("/");
    }

    return (
      <div>
        <div className='relative'>
          <img src={Breadcrumb} alt="" className='h-[200px]' />
          <div className='absolute top-14 left-20 breadcrumb-item-active'>
            <button onClick={backToHome}>Home</button>

            <i class="fa-solid fa-minus ps-3 pe-3"></i>
            <span className='text-slate-400'>Wishlist</span>
            <h1 className='text-4xl font-bold mt-4'>Wishlist</h1>
          </div>
        </div>
        <div className='p-20'>
            <table className='w-full '>
                <thead>
                  <tr>
                    <th className='border p-2'>Images</th>
                    <th className='border'>Courses</th>
                    <th className='border'>Unit Price</th>
                    <th className='border'>Quantity</th>
                    <th className='border'>Total</th>
                    <th className='border'>Add To Cart</th>
                    <th className='border'>Remove</th>
                  </tr>
                </thead>
            </table>
        </div>
      </div>
    )
  }

  export default Wishlist
