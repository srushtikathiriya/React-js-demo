import React from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from "../Asset/breadcrumb-01.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

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

                    <div className='grid grid-col-2 grid-rows-2 gap-5 m-10'>
                        <div className='flex'> 
                       <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div class="md:flex">
                                <div class="md:shrink-0">
                                    <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
                                </div>
                                <div class="p-8">
                                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                                    <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                                </div>
                            </div>
                        </div>

                        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div class="md:flex">
                                <div class="p-8">
                                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                                    <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                                </div>
                                <div class="md:shrink-0">
                                    <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
                                </div>
                            </div>
                        </div>
                        </div>

                        <div className='flex mt-5'>
                        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div class="md:flex">
                                <div class="md:shrink-0">
                                    <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
                                </div>
                                <div class="p-8">
                                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                                    <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                                </div>
                            </div>
                        </div>

                        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div class="md:flex">
                                <div class="md:shrink-0">
                                    <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture" />
                                </div>
                                <div class="p-8">
                                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
                                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                                    <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
                                </div>
                            </div>
                        </div>
                        </div>



                    </div>

                </div>

                <div>

                </div>

            </div>

        </div>
    )
}

export default Shoplocation
