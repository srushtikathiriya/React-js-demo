import React from 'react'
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../Asset/breadcrumb-01.jpg'
import Product1 from "../../Asset/product-1.jpg"


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
          <div className='flex'>
            <button onClick={backToHome}>Home</button>
            <div className='ms-3 me-3 mt-3'>
              <div className='w-[3vw] border-b-2 border-[#e2e2e2]'></div>
            </div>
            <span className='text-slate-400'>Wishlist</span>
          </div>

          {/* <i class="fa-solid fa-minus ps-3 pe-3"></i> */}
          <h1 className='text-4xl font-bold mt-4'>Wishlist</h1>
        </div>
      </div>
      <div className='p-20'>
        <table className='w-full '>
          <thead>
            <tr>
              <th className='border pt-2 pb-2'>Images</th>
              <th className='border'>Courses</th>
              <th className='border'>Unit Price</th>
              <th className='border'>Quantity</th>
              <th className='border'>Total</th>
              <th className='border'>Add To Cart</th>
              <th className='border'>Remove</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            <tr className=''>
              <td className='border'>
                <div className='flex justify-center'>
                <img src={Product1} className='w-[150px] h-[180px]' />
              </div>
                </td>
              <td className='border'><a href='#' className='hover:text-rose-600 font-semibold'>Bradley Burgess 2</a></td>
              <td className='border'>$20</td>
              <td className='border'><input min="1" type="number" defaultValue="1" name="qty" className="border p-3 font-bold"
              /></td>
              <td className='border'>$20.00</td>
              <td className='border'><button className='bg-rose-600 text-white text-xs ps-5 pe-5 pt-3 pb-3 rounded-md font-bold'>Add To Cart</button></td>
              <td className='border'> Remove</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Wishlist
