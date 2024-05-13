
import React, { useRef, useState } from 'react';
import Propsheading from '../../Propsheading/Propsheading'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "../Shopdetails/Shopdetails.css"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Autoplay } from 'swiper/modules';
import { IoCartOutline } from "react-icons/io5";
import Product1 from '../../Asset/product-1.jpg'
import Product2 from '../../Asset/product-2.jpg'
import Product3 from '../../Asset/product-3.jpg'
import Product4 from '../../Asset/product-4.jpg'
import Product5 from '../../Asset/product-5.jpg'
import Product6 from '../../Asset/product-6.jpg'
import Product7 from '../../Asset/product-7.jpg'
import Product8 from '../../Asset/product-8.jpg'
import Product9 from '../../Asset/product-9.jpg'
import Product10 from '../../Asset/product-10.jpg'

import Product11 from '../../Asset/product-11.jpg'
import Product12 from '../../Asset/product-12.jpg'
import Product13 from '../../Asset/product-13.jpg'
import Product14 from '../../Asset/product-14.jpg'
import Product15 from '../../Asset/product-15.jpg'
import Product16 from '../../Asset/product-16.jpg'
import Product17 from '../../Asset/product-17.jpg'
import Product18 from '../../Asset/product-18.jpg'
import Product19 from '../../Asset/product-19.jpg'
import Product20 from '../../Asset/product-20.jpg'

function Shopdetails() {
    return (
        <div>
            <Propsheading title="Shop Details" />
            <div className='p-20'>

                <div className='flex justify-between'>
                    <div>
                        <span className='text-2xl font-bold'>Related Products</span>
                    </div>
                    <div className='flex gap-[20px]'>
                        <button className='bg-stone-300'><FaArrowLeftLong /></button>
                        <button><FaArrowRightLong /></button>
                    </div>
                </div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //   clickable: true,
                    // }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }}
                    modules={[Autoplay]}
                    className="mySwipers"
                >
                    <SwiperSlide>
                        <div className='buttons'>
                            <a href="#" className='burdges relative inline-block'>
                                <img src={Product1} alt="" />
                                <img className='Burges' src={Product2} alt="" />
                                <div className='icons'>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">sync_alt</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">visibility</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">favorite</span></a>
                                </div>
                            </a>
                            <h6 className='pb-2 pt-2 text-slate-400 text-sm hover:text-rose-600 cursor-pointer'>Miko Wooden Bluetooth Speaker</h6>
                            <h2 className='font-bold'>$31.00</h2>
                            <div className='btns mt-1'>
                                <button className='flex items-center'><IoCartOutline className='text-rose-600' /><a href="#" className='font-bold underline hover:text-rose-600'>Add To Cart</a></button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='buttons'>
                            <a href="#" className='burdges relative inline-block'>
                                <img src={Product3} alt="" />
                                <img className='Burges' src={Product4} alt="" />
                                <div className='icons'>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">sync_alt</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">visibility</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">favorite</span></a>
                                </div>
                            </a>
                            <h6 className='pb-2 pt-2 text-slate-400 text-sm hover:text-rose-600 cursor-pointer'>Gorgeous Wooden Gloves</h6>
                            <h2 className='font-bold'>$31.00</h2>

                            <div className='btns mt-1'>
                                <button className='flex items-center'><IoCartOutline className='text-rose-600' /><a href="#" className='font-bold underline hover:text-rose-600'>Add To Cart</a></button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='buttons'>
                            <a href="#" className='burdges relative inline-block'>
                                <img src={Product5} alt="" />
                                <img className='Burges' src={Product6} alt="" />
                                <div className='icons'>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">sync_alt</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">visibility</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">favorite</span></a>
                                </div>
                            </a>
                            <h6 className='pb-2 pt-2 text-slate-400 text-sm hover:text-rose-600 cursor-pointer'>Pinkol Enormous Granite Bottle</h6>
                            <h2 className='font-bold'>$31.00</h2>
                            <div className='btns mt-1'>
                                <button className='flex items-center'><IoCartOutline className='text-rose-600' /><a href="#" className='font-bold underline hover:text-rose-600'>Add To Cart</a></button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='buttons'>
                            <a href="#" className='burdges relative inline-block'>
                            <div className='absolute top-[10%] left-[15%]'>
                                <span className='bg-rose-600 text-white text-xs transition ease-in-out animate-pulse duration-75 scale-110 -translate-y-1 ps-1 pe-1 rounded-sm'>On Sale</span>
                            </div>
                                <img src={Product7} alt="" />
                                <img className='Burges' src={Product8} alt="" />
                                <div className='icons'>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">sync_alt</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">visibility</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">favorite</span></a>
                                </div>
                            </a>
                            <h6 className='pb-2 pt-2 text-slate-400 text-sm hover:text-rose-600 cursor-pointer'>Gorgeous Aluminum Table</h6>
                            <h2 className='font-bold'>$31.00</h2>
                            <div className='btns mt-1'>
                                <button className='flex items-center'><IoCartOutline className='text-rose-600' /><a href="#" className='font-bold underline hover:text-rose-600'>Add To Cart</a></button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='buttons'>

                            <a href="#" className='burdges relative inline-block'>
                                <img src={Product9} alt="" />
                                <img className='Burges' src={Product10} alt="" />
                                <div className='icons'>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">sync_alt</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">visibility</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">favorite</span></a>
                                </div>
                            </a>
                            <h6 className='pb-2 pt-2 text-slate-400 text-sm hover:text-rose-600 cursor-pointer'>Evo Lightweight Granite Shirt</h6>
                            <h2 className='font-bold'>$31.00</h2>
                            <div className='btns mt-1'>
                                <button className='flex items-center'><IoCartOutline className='text-rose-600' /><a href="#" className='font-bold underline hover:text-rose-600'>Add To Cart</a></button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='buttons'>
                            <a href="#" className='burdges relative inline-block'>
                                <img src={Product11} alt="" />
                                <img className='Burges' src={Product12} alt="" />
                                <div className='icons'>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">sync_alt</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">visibility</span></a>
                                    <a href="#" className='bg-white pt-4 ps-4 pe-4 pb-2 text-black rounded-md hover:bg-rose-600 hover:text-white'><span className="material-symbols-outlined">favorite</span></a>
                                </div>
                            </a>
                            <h6 className='pb-2 pt-2 text-slate-400 text-sm hover:text-rose-600 cursor-pointer'>CLCo. Incredible Paper Car</h6>
                            <h2 className='font-bold'>$31.00</h2>
                            <div className='btns mt-1'>
                                <button className='flex items-center'><IoCartOutline className='text-rose-600' /><a href="#" className='font-bold underline hover:text-rose-600'>Add To Cart</a></button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

export default Shopdetails
