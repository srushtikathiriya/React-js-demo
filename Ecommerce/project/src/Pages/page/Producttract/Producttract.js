import React from 'react'
import Breadcrumb from '../../Asset/breadcrumb-01.jpg'
import Track from "../../Asset/track-bg.jpg"
import { useNavigate } from 'react-router-dom';
import { CiDeliveryTruck } from "react-icons/ci";
import { FaAddressCard } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Propsheading from '../../Propsheading/Propsheading';


function Producttract() {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };
    return (
        <div className=''>
            <div>
            <Propsheading title="Tract"/>


                <div class="max-w-md  mx-auto bg-stone-100 rounded-xl shadow-md overflow-hidden m-20 md:max-w-2xl">
                    <div>
                        <div class="md:shrink-0">
                            <img class=" w-full object-cover md:h-full md:w-full" src={Track} alt="Modern building architecture" />
                        </div>
                        <div class="p-8">
                            <div class="flex">
                                <h1 className=''>
                                    <CiDeliveryTruck className='font-bold text-5xl bg-white rounded-md p-2' />
                                </h1>
                                <div className='block ms-5'>
                                    <span className='font-bold text-lg'>Track Your Order</span>
                                    <p className='text-stone-500'>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className=''>
                                    <span><FaAddressCard className='relative top-11 left-10  text-xl' /></span>
                                    <input placeholder='Order ID' className="w-full mt-1 pl-20 p-4 rounded-lg" />
                                </div>
                                <div className=''>
                                    <span><MdOutlineMail className='relative top-10 left-10  text-xl' /></span>
                                    <input placeholder='Billing email' className="w-full pl-20 p-4 rounded-lg" />
                                </div>
                            </div>
                            <button className='w-full bg-rose-600 text-white font-bold justify-center mt-3 flex items-center p-4 rounded-lg text-center gap-4'>Track Now<FaArrowRightLong className='' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producttract;