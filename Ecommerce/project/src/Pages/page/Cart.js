import React from 'react'
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../Asset/breadcrumb-01.jpg'


function Cart() {
    const navigate = useNavigate();
    const backToHome = () => {
      navigate("/");
    }

    return (
      <div>
        <div className='relative'>

        <div className='relative'>
          <img src={Breadcrumb} alt="" className='h-[200px]' />
          <div className='absolute top-14 left-20'>
            <button onClick={backToHome}>Home</button>

            <i class="fa-solid fa-minus ps-3 pe-3"></i>
            <span className='text-slate-400'>Cart</span>
            <h1 className='text-4xl font-bold mt-4'>Cart</h1>
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
        <div className='flex justify-between mt-10'>
                <div className='gap-3 flex'>
                    <input type="text" placeholder='Coupon Code' className='border p-2 rounded-lg'/>
                    <button className='bg-rose-600 rounded-lg text-white text-sm font-bold pt-3 pb-3 ps-5 pe-5'>Apply Coupon</button>
                </div>
                <div>
                <button className='bg-rose-600 rounded-lg text-white text-sm font-bold pt-3 pb-3 ps-5 pe-5'>Update Cart</button>
                </div>
        </div>
            <div className=''>
                <div>
                <div className='absolute right-0 w-[30%]'>
                        <h1 className='text-2xl font-semibold'>Cart Totals</h1>
                        <div className='border flex justify-between p-3 mt-3 text-sm'>
                            <span>Subtotal</span>
                            <span>$0.00</span>
                        </div>
                        <div className='border flex justify-between p-3 text-sm'>
                            <span>Total</span>
                            <span>$0.00</span>
                        </div>
                        <div className='mt-5'>
                                <button className='bg-rose-600 rounded-lg text-white p-4 text-sm font-bold'>Proceed to  Checkout</button>
                        </div>
                </div>
                </div>
            </div>
        </div>
    
        </div>


      </div>
    )
  }

  export default Cart
