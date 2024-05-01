import React from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from "../../Asset/breadcrumb-01.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import Location1 from "../../Asset/location-1.jpg"
import Location2 from "../../Asset/location-2.jpg"
import Location3 from "../../Asset/location-3.jpg"
import Location4 from "../../Asset/location-4.jpg"

function Shoplocation() {

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };

    return (
        <div>
            <div>

                <div className='relative'>
                    <img src={Breadcrumb} alt="" className='h-[200px]' />
                    <div className='absolute top-14 left-20 breadcrumb-item-active'>
                        <button onClick={backToHome}>Home</button>
                        <i class="fa-solid fa-minus ps-3 pe-3"></i>
                        <span className='text-slate-400'>Shop Location</span>
                        <h1 className='text-4xl font-bold mt-4'>Shop Location</h1>
                    </div>
                </div>

                <div>
                    <div className='flex justify-center mt-10'>
                        <div className='flex'>
                            <input type="text" placeholder='Search here' className='border p-3' />
                            <button className='bg-rose-600 text-white text-sm font-bold gap-4 flex pt-3 pb-3 ps-5 pe-5'>Find Nearby Store <FaArrowRightLong /></button>
                        </div>
                    </div>

                    <div className='grid grid-col-2  gap-3 m-10'>
                        <div className='flex flex-wrap'>
                            <div class="max-w-md mx-auto bg-white rounded-xl border overflow-hidden md:max-w-2xl">
                                <div class="md:flex">
                                    <div class="p-5">
                                            <h1 className="text-2xl font-bold">Baldwin Hills Crenshaw Plaza</h1>
                                            <address className="text-stone-500 mt-5">
                                                <i className="fa-solid fa-location-dot pe-2"></i>
                                                <span className="hover:text-rose-600">
                                                24/26 Strait Bargate, Boston, <br /><span className="ps-5">PE21, United Kingdom</span>
                                                </span>
                                                <br />
                                            </address>
                                            <div className="text-stone-500 mt-3">
                                                <i className="fa-solid fa-phone-flip"></i>
                                                <a href="tel:+098 (905) 786 897 8" className="ps-2">+098 (905) 786 897 8</a><br />
                                                <a href="tel:6 - 146 - 389 - 5748" className="ps-6">6 - 146 - 389 - 5748</a>
                                            </div>
                                            <div className="text-stone-500 flex mt-3">
                                                <i className="fa-regular fa-clock pt-1"></i>
                                                <h1 className="ps-3">Store Hours:<br />
                                                    10 am - 10 pm EST, 7 days a week</h1>
                                            </div>
                                    </div>
                                    <div class="md:shrink-0">
                                        <img class="h-48 w-full object-cover md:h-full md:w-56" src={Location1} alt="Modern building architecture" />
                                    </div>
                                </div>
                            </div>

                            <div class="max-w-md mx-auto bg-white rounded-xl border overflow-hidden md:max-w-2xl">
                                <div class="md:flex">
                                    <div class="p-5">
                                    <h1 className="text-2xl font-bold">Ninico Hills Crenshaw Plaza</h1>
                                            <address className="text-stone-500 mt-5">
                                                <i className="fa-solid fa-location-dot pe-2"></i>
                                                <span className="hover:text-rose-600">
                                                36/26 Strait Bargate, Boston, <br /><span className="ps-5">PE21, United Kingdom</span>
                                                </span>
                                                <br />
                                            </address>
                                            <div className="text-stone-500 mt-3">
                                                <i className="fa-solid fa-phone-flip"></i>
                                                <a href="tel:+098 (905) 786 897 8" className="ps-2">+098 112 786 897 8</a><br />
                                                <a href="tel:6 - 146 - 389 - 5748" className="ps-6">697 - 146 - 963 - 57</a>
                                            </div>
                                            <div className="text-stone-500 flex mt-3">
                                                <i className="fa-regular fa-clock pt-1"></i>
                                                <h1 className="ps-3">Store Hours:<br />
                                                am - 10 pm EST, 5 days a week</h1>
                                            </div>
                                    </div>
                                    <div class="md:shrink-0">
                                        <img class="h-48 w-full object-cover md:h-full md:w-56" src={Location2} alt="Modern building architecture" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex mt-5 flex-wrap'>
                            <div class="max-w-md mx-auto bg-white rounded-xl border overflow-hidden md:max-w-2xl">
                                <div class="md:flex">
                                    <div class="p-5">
                                    <h1 className="text-2xl font-bold">Vegas BGM Crenshaw Plaza</h1>
                                            <address className="text-stone-500 mt-5">
                                                <i className="fa-solid fa-location-dot pe-2"></i>
                                                <span className="hover:text-rose-600">
                                                40/26 Strait Bargate, Vegas, PE21, <br /><span className="ps-5">United Kingdom</span>
                                                </span>
                                                <br />
                                            </address>
                                            <div className="text-stone-500 mt-3">
                                                <i className="fa-solid fa-phone-flip"></i>
                                                <a href="tel:+098 (905) 786 897 8" className="ps-2">+098 (905) 786 897 8</a><br />
                                                <a href="tel:6 - 146 - 389 - 5748" className="ps-6">648 85952 -555</a>
                                            </div>
                                            <div className="text-stone-500 flex mt-3">
                                                <i className="fa-regular fa-clock pt-1"></i>
                                                <h1 className="ps-3">Store Hours:<br />
                                                10 am - 10 pm EST, 7 days a week</h1>
                                            </div>
                                    </div>
                                    <div class="md:shrink-0">
                                        <img class="h-48 w-full object-cover md:h-full md:w-56" src={Location3} alt="Modern building architecture" />
                                    </div>
                                </div>
                            </div>

                            <div class="max-w-md mx-auto bg-white rounded-xl overflow-hidden border md:max-w-2xl">
                                <div class="md:flex">
                                    <div class="p-5">
                                    <h1 className="text-2xl font-bold">Bargate Cine Crenshaw Plaza</h1>
                                            <address className="text-stone-500 mt-5">
                                                <i className="fa-solid fa-location-dot pe-2"></i>
                                                <span className="hover:text-rose-600">
                                                38/26 Strait Bargate, Point, PE21, <br /><span className="ps-5">United Kingdom</span>
                                                </span>
                                                <br />
                                            </address>
                                            <div className="text-stone-500 mt-3">
                                                <i className="fa-solid fa-phone-flip"></i>
                                                <a href="tel:+098 (905) 786 897 8" className="ps-2">+098 (905) 786 897 8</a><br />
                                                <a href="tel:6 - 146 - 389 - 5748" className="ps-6">6 - 146 - 389 - 5748</a>
                                            </div>
                                            <div className="text-stone-500 flex mt-3">
                                                <i className="fa-regular fa-clock pt-1"></i>
                                                <h1 className="ps-3">Store Hours:<br />
                                                10 am - 10 pm EST, 7 days a week</h1>
                                            </div>
                                    </div>
                                    <div class="md:shrink-0">
                                        <img class="h-48 w-full object-cover md:h-full md:w-56" src={Location4} alt="Modern building architecture" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30768381.894401647!2d60.90089334437962!3d19.716626063286768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1714543848942!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Shoplocation
