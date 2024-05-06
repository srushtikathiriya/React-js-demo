import React from 'react'
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../Asset/breadcrumb-01.jpg';
import { FaFolder } from "react-icons/fa";
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

function Checkout() {
    const navigate = useNavigate();
    const navigates = useNavigate();

    const backToHome = () => {
        navigate("/");
    }

    const backToCheckout = () => {
        navigate("/checkout");
    }

    return (
        <div>
            <div className='relative'>
                <img src={Breadcrumb} alt="" className='h-[200px]' />
                <div className='absolute top-14 left-20'>
                    <div className='flex'>
                        <button onClick={backToHome}>Home</button>
                        <div className='ms-3 me-3 mt-3'>
                            <div className='w-[3vw] border-b-2 border-[#e2e2e2]'></div>
                        </div>
                        <span className='text-slate-400'>Checkout</span>
                    </div>
                    <h1 className='text-4xl font-bold mt-4'>Checkout</h1>
                </div>
            </div>

            <div className='p-20'>
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='bg-stone-200 p-3 border-t-4 border-rose-300 w-full'>
                        <span className='text-black text-sm flex items-center '><FaFolder className='text-gray-500 ms-3 me-3' />Returning customer? <a href='#' className='text-gray-400 hover:text-black'> Click here to login</a></span>
                    </div>
                    <div className='bg-stone-200 p-3 border-t-4 border-rose-300 w-full'>
                        <span className='text-black text-sm flex items-center'><FaFolder className='text-gray-500 ms-3 me-3' />Have a coupon? <a href='#' className='text-gray-400 hover:text-black'>Click here to enter your code</a></span>
                    </div>
                </div>
            </div>
            <div className='ps-20 pe-20'>
                <div className='grid sm:grid-cols-1 xl:grid-cols-2 gap-8'>
                    <div>

                        <div className='mt-10'>
                            <span className='text-2xl font-base'>Billing Details</span>
                            <hr className='mt-3' />
                            <form action="#" className='mt-5'>
                                <div className=''>
                                    <label htmlFor="#" className='text-xl text-stone-500'>Country
                                        <span className='text-rose-600 ps-2'>*</span>
                                    </label>
                                    <select name="" id="" required className='border p-3 rounded-lg mt-2 w-full text-xl'>
                                        <option value="United States">United States</option>
                                        <option value="ALgeria">ALgeria</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Givenchyy">Givenchyy</option>
                                        <option value="England">England</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                    </select>
                                </div>

                                <div className='mt-5 flex justify-between gap-2'>
                                    <div>
                                        <label htmlFor="#" className='text-xl text-stone-500'>First Name
                                            <span className='text-rose-600 ps-2'>*</span>
                                        </label><br />
                                        <input type="text" name="" id="" className='border rounded-md p-3 outline-red-600' />
                                    </div>
                                    <div>
                                        <label htmlFor="#" className='text-xl text-stone-500'>Last Name
                                            <span className='text-rose-600 ps-2'>*</span>
                                        </label><br />
                                        <input type="text" name="" id="" required className='border rounded-md p-3 outline-red-600' />
                                    </div>
                                </div>

                                <div className='mt-5'>
                                    <div>
                                        <label htmlFor="#" className='text-xl text-stone-500'>Company Name</label>
                                        <input type="text" name="" id="" className='border p-3 w-full outline-red-600' />
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <div>
                                        <label htmlFor="#" className='text-xl text-stone-500'>Address
                                            <span className='text-rose-600 ps-2'>*</span>
                                        </label>
                                        <input type="text" name="" id="" required placeholder='Street address' className='border p-3 text-stone-500 w-full font-normal text-xl mt-2 outline-red-600' />
                                        <input type="text" name="" id="" placeholder='Apartment,suite,unit etc.(optional) outline-red-600' className='border mt-8 p-3 text-stone-500 w-full font-normal text-xl outline-red-600' />
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <div>
                                        <label htmlFor="#" className='text-xl text-stone-500'>Town / City
                                            <span className='text-rose-600 ps-2'>*</span>
                                        </label>
                                        <input type="text" name="" id="" required placeholder='Town / City' className='border p-3 text-stone-500 w-full font-normal text-xl mt-2 outline-red-600' />
                                    </div>
                                </div>
                                <div className='mt-5 flex justify-between gap-3'>
                                    <div>
                                        <label htmlFor="#" className='text-xl text-stone-500'>State / County
                                            <span className='text-rose-600 ps-2'>*</span>
                                        </label><br />
                                        <input type="email" required name="" id="" className='border rounded-md p-3  outline-red-600' />
                                    </div>
                                    <div>
                                        <label htmlFor="#" className='text-xl text-stone-500'>Postcode / Zip
                                            <span className='text-rose-600 ps-2'>*</span>
                                        </label><br />
                                        <input type="text" name="" placeholder='Postcode/Zip' required id="" className='border outline-red-600 rounded-md p-3' />
                                    </div>
                                </div>
                                <div className='mt-5 flex justify-between gap-3'>
                                    <div>
                                        <label htmlFor="#" className='text-xl text-stone-500'>Email Address
                                            <span className='text-rose-600 ps-2'>*</span>
                                        </label><br />
                                        <input type="email" required name="" id="" className='border rounded-md p-3 outline-red-600' />
                                    </div>
                                    <div>
                                        <label htmlFor="#" className='text-xl text-stone-500'>Phone
                                            <span className='text-rose-600 ps-2'>*</span>
                                        </label><br />
                                        <input type="text" name="" placeholder='Postcode/Zip' required id="" className='border rounded-md p-3 outline-red-600' />
                                    </div>
                                </div>
                                <div className='mt-5 flex gap-3'>
                                    <input type="checkbox" />
                                    <label htmlFor="#" className='text-xl text-stone-500 '>Create an account?</label>
                                </div>
                                <div className='mt-5 flex gap-3'>
                                    <label htmlFor="#" className='text-2xl text-stone-500 '>Ship to a different address?</label>
                                    <input type="checkbox" className='ms-3 mt-1' />
                                </div>
                                <div className='mt-5'>
                                    <label htmlFor="#" className='text-xl text-stone-500 '>Order Notes</label>
                                    <textarea name="" id="" placeholder='Notes about your order,e.g.special notes for delivery.' cols="30" rows="10" className=' w-full h-[100px] border outline-red-500' />
                                </div>
                            </form>
                        </div>

                    </div>



                    <div className="">
                        <div className='mt-10 border-4 border-rose-200 p-7'>
                            <span className='text-2xl font-base'>Your order</span>
                            <hr className='mt-3' />
                            <div>
                                <table className='w-full'>
                                    <thead>
                                        <tr className=''>
                                            <th className='pt-5 pb-5 border-b text-stone-500 font-normal'>Product</th>
                                            <th className='pt-5 pb-5 border-b text-stone-500 font-normal'>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border-b text-stone-500 text-md'>
                                            <td className='pt-5 pb-5'>Vestibulum suscipit × 1</td>
                                            <td>$165.00</td>
                                        </tr>
                                        <tr className='border-b text-stone-500 text-md'>
                                            <td className='pt-5 pb-5'>Vestibulum dictum magna × 1</td>
                                            <td>$50.00</td>
                                        </tr>
                                        <tr className='border-b text-stone-500 text-md'>
                                            <td className='pt-5 pb-5'>Cart Subtotal</td>
                                            <td>$215.00</td>
                                        </tr>
                                        <tr className='border-b text-stone-500 text-md'>
                                            <td className='pt-5 pb-5'>Shipping</td>
                                            <td>
                                                <ul>
                                                    <li><input type="radio" name="" id="" />
                                                        <label htmlFor="#">Flat Rate: $7.00</label><br /></li>
                                                    <li><input type="radio" name="" id="" />
                                                        <label htmlFor="#">Free Shipping:</label></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr className='border-b text-stone-500 text-md'>
                                            <td className='pt-5 pb-5'>Order Total</td>
                                            <td className='text-xl font-semibold'>$215.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className='mt-20 flex justify-between'>
                                <button onClick={backToCheckout} className='font-semibold'>Direct Bank Transfer</button>
                                <button onClick={backToCheckout} className='font-semibold'><GoDash /></button>
                            </div>
                            <div className='mt-10 font-medium text-lg'>
                                <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</p>
                            </div>
                            <div className='mt-20 flex justify-between'>
                                <button onClick={backToCheckout} className='font-semibold'>Cheque Payment</button>
                                <button onClick={backToCheckout} className='font-semibold'><FaPlus /></button>
                            </div>
                            <div className='mt-5 flex justify-between'>
                                <button className='font-semibold'>PayPal</button>
                                <button className='font-semibold'><FaPlus /></button>
                            </div>
                            <div className='mt-5 flex justify-between'>
                                <button className='font-semibold bg-rose-600 text-white w-full text-sm p-3 rounded-md'>Place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
