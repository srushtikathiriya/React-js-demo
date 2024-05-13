import React from 'react'
import Product1 from "../../Asset/product-1.jpg"
import Propsheading from '../../Propsheading/Propsheading';


function Wishlist() {
  
  return (
    <div>
              <Propsheading title="Wishlist"/>

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
