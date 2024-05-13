import React from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../Asset/breadcrumb-01.jpg';
import Propsheading from '../../Propsheading/Propsheading';
import ProductData from '../../../Component/Second-part/Data';
import { useSelector } from 'react-redux';


function Cart() {
  const data = useSelector((state)=>state.cartreducer.carts)
  console.log(data);
  return (
    <div>
      <div className=''>
        <Propsheading title="Cart" />

        <div>
          <div className='p-20'>
            <table className='w-full'>
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
              <tbody>
              {data.length ? 
              data.map((product, index) => {
                const {FirstImg , price,name ,id} = product.value;
                <tr key={id}>
                  <td className='border'>
                    <div className='flex justify-center'>
                      <img src={FirstImg} className='w-[150px] h-[180px]' />
                    </div>
                 </td>
                  <td className='border'><a href='#' className='hover:text-rose-600 font-semibold'>{name}</a></td>
                  <td className='border'>{ price}</td>
                  <td className='border'><input min="1" type="number" defaultValue="1" name="qty" className="border p-3 font-bold"
                  /></td>
                  <td className='border'>{price}</td>
                  <td className='border'><button className='bg-rose-600 text-white text-xs ps-5 pe-5 pt-3 pb-3 rounded-md font-bold'>Add To Cart</button></td>
                  <td className='border'><button>Remove</button></td>
                </tr>
})
: <h1 className='font-bold text-2xl'>Cart is empty....!</h1>}
              </tbody>
              {/* You might need to add rows for each item in the cart */}
            </table>
            <div className='grid grid-cols-1 grid-rows-1 gap-2 mt-10'>
              <div className='grid grid-rows-1 '>
                <div className='flex justify-between'>
                  <div className='flex gap-2'>
                    <input type="text" placeholder='Coupon Code' className='border p-2 rounded-lg' />
                    <button className='bg-rose-600 rounded-lg text-white text-sm font-bold pt-3 pb-3 ps-5 pe-5'>Apply Coupon</button>
                  </div>
                  <button className='bg-rose-600 rounded-lg text-white block text-sm font-bold pt-3 pb-3 ps-7 pe-7'>Update Cart</button>
                </div>
              </div>
              <div className='grid-cols-1 grid-rows-1 grid '>
                <div className=' flex justify-end'>
                  <div className='w-[50%]'>
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
                      <button className='bg-rose-600 rounded-lg text-white p-4 text-sm font-bold'>Proceed to Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
