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
import Productdet1 from '../../Asset/product-det-1.png'
import Productdet2 from '../../Asset/product-det-2.png'
import Productdet3 from '../../Asset/product-det-3.png'
import Productdet4 from '../../Asset/product-det-4.png'
import { GrCart } from "react-icons/gr";
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaBehance } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Shopdetails() {
    return (
        <div>
            <Propsheading title="Shop Details" />
            <div className='p-20'>


                <div className='grid grid-cols-1 sm:grid-cols-3
                 md:grid-cols-5 mb-10'>
                    <div className='grid cols-span-1 md:col-span-2'>
                        <div className='flex lg:justify-center'>
                            <div>
                                <img src={Product1} alt="" className='h-[80px] w-[70px] mb-5 me-5' />
                                <img src={Product2} alt="" className='h-[80px] w-[70px] mb-5 me-5' />
                                <img src={Product3} alt="" className='h-[80px] w-[70px]' />
                            </div>
                            <div>
                                <img src={Product1} alt="" className='h-[350px] w-[300px]' />
                            </div>
                        </div>
                    </div>
                    <div className='grid col-span-1 md:col-span-2'>
                        <div className='flex lg:justify-center'>
                            <div>
                                <span className='bg-rose-200 text-sm font-bold text-rose-600 ps-2 pe-2'>Dress</span>
                            </div>
                            <div className='flex ps-5'>
                                <div className='flex pt-1'>
                                    <a href="#"><FaStar className='text-[#ffcd00]' /></a>
                                    <a href="#"><FaStar className='text-[#ffcd00]' /></a>
                                    <a href="#"><FaStar className='text-[#ffcd00]' /></a>
                                </div>
                                <a href="#"><span className='text-sm text-[#777] hover:text-rose-600 font-semibold ps-2'>10 Reviews</span></a>
                            </div>
                        </div>

                        <div className='mt-2 flex items-center gap-3'>
                            <h1 className='font-bold text-2xl'>Wide Cotton Tunic Dress</h1>
                            <span className='border text-xs text-rose-600 font-bold ps-2 pe-2 pt-1 pb-1'>In Stock</span>
                        </div>
                        <div className='flex items-center'>
                            <h5 className='text-xl font-bold text-[#cfcfcf]'>$9.35</h5>
                            <h1 className='text-rose-600 font-bold text-4xl ms-3'>$7.25</h1>
                        </div>
                        <div className='mt-8'>
                            <p className='text-lg font-normal text-[#777] font-["__Jost_e948d5","__Jost_Fallback_e948d5"]'>Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a<br />completely modern design and you feel comfortable to put on this hijab.<br />Buy it at the best price.</p>
                        </div>

                        <div className='flex flex-wrap mt-5 gap-5'>
                            <button className='border flex justify-center items-center p-5 gap-3'>
                                <FaMinus className='text-stone-300' />
                                <span>1</span>
                                <FaPlus className='text-stone-300' />
                            </button>
                            <button className='text-white flex justify-center items-center gap-2 bg-rose-600 hover:bg-black ps-10 pe-10 rounded-md'><GrCart />
                                Add To Cart</button>
                            <button className='hover:text-white border hover:bg-rose-600 ps-5 pe-5 rounded-md '><CiHeart className='text-xl font-semibold' /></button>
                        </div>
                        <div className='mt-10'>
                            <div className='flex gap-[2px]'>
                                <button className='rounded-full h-[15px] w-[15px] bg-sky-500'></button>
                                <button className='rounded-full h-[15px] w-[15px] bg-rose-500'></button>
                                <button className='rounded-full h-[15px] w-[15px] bg-orange-500'></button>
                                <button className='rounded-full h-[15px] w-[15px] bg-indigo-500'></button>
                            </div>
                        </div>
                        <div className='mt-10 '>
                            <div className='flex gap-2'>
                                <p className='font-bold'>SKU:</p>
                                <span className='text-[#777]'>BO1D0MX8SJ</span>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <p className='font-bold'>Categories:</p>
                                <div className='flex gap-2'>
                                    <span className='text-[#777] hover:text-rose-600 cursor-pointer'>T-Shirts,</span>
                                    <span className='text-[#777] hover:text-rose-600 cursor-pointer'>Tops,</span>
                                    <span className='text-[#777] hover:text-rose-600 cursor-pointer'>Womens</span>
                                </div>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <p className='font-bold'>Tags:</p>
                                <div className='flex gap-2'>
                                    <span className='text-[#777] hover:text-rose-600 cursor-pointer'>fashion,</span>
                                    <span className='text-[#777] hover:text-rose-600 cursor-pointer'>t-shirts,</span>
                                    <span className='text-[#777] hover:text-rose-600 cursor-pointer'>Women</span>
                                </div>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <p className='font-bold'>Share:</p>
                                <div className='flex gap-2 items-center'>
                                    <span className='text-[#777] hover:text-rose-600 cursor-pointer'><FaFacebookF /></span>
                                    <span className='text-[#777] hover:text-rose-600 cursor-pointer'><IoLogoTwitter /></span>
                                    <span className='text-[#777] hover:text-rose-600 cursor-pointer'><FaBehance /></span>
                                    <span className='text-[#777] hover:text-rose-600 cursor-pointer'><FaYoutube /></span>
                                    <span className='text-[#777] hover:text-rose-600 cursor-pointer'><FaLinkedin /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid col-span-1 h-[500px]'>
                            <div className='border ps-5 pe-5 font-["__Jost_e948d5","__Jost_Fallback_e948d5"] text-[#777] text-base rounded-md flex justify-center items-center gap-5'>
                                <img src={Productdet1} alt="" />
                                <p>Free Shipping apply to all orders over $100</p>
                            </div>
                            <div className='border ps-5 pe-5 font-["__Jost_e948d5","__Jost_Fallback_e948d5"] text-[#777] text-base rounded-md flex justify-center items-center gap-5 mt-5'>
                                <img src={Productdet2} alt="" />
                                <p>Guranteed 100% Organic from natural farmas</p>
                            </div>
                            <div className='border ps-5 pe-5 font-["__Jost_e948d5","__Jost_Fallback_e948d5"] text-[#777] text-base rounded-md flex justify-center items-center gap-5 mt-5'>
                                <img src={Productdet3} alt="" />
                                <p>1 Day Returns if you change your mind</p>
                            </div>
                            <div className='border ps-5 pe-5 font-["__Jost_e948d5","__Jost_Fallback_e948d5"] text-[#777] text-base rounded-md flex justify-center items-center gap-5 mt-5'>
                                <img src={Productdet4} alt="" />
                                <p>Covid-19 Info: We keep delivering.</p>
                            </div>
                    </div>
                </div>

                <div className='flex justify-center flex-wrap'>
                    <ul className='flex justify-center gap-20 font-semibold text-base'>
                        <li className=''>Description</li>
                        <li className='text-[#777]'>Additional information</li>
                        <li className='text-[#777]'>Reviews (2)</li>
                    </ul>
                </div>
                <hr className='mb-10 mt-10' />

                <div>
                    <p className='mt-5 text-[#777] text-[16px] font-["__Jost_e948d5","__Jost_Fallback_e948d5"]' style={{ lineHeight: "26px" }}>In marketing a product is an object or system made available for consumer use it is anything that can be offered to a market to satisfy the desire or need of a customer. In retailing, products are often referred to as merchandise, and in manufacturing, products are bought as raw materials and then sold as finished goods. A service is also regarded to as a type of product. Commodities are usually raw materials such as metals and agricultural products, but a commodity can also be anything widely available in the open market. In project management, products are the formal definition of the project deliverables that make up contribute to delivering the objectives of the project.</p>

                    <p className='mt-5 text-[#777] text-[16px] font-["__Jost_e948d5","__Jost_Fallback_e948d5"]' style={{ lineHeight: "26px" }}>A product can be classified as tangible or intangible. A tangible product is a physical object that can be perceived by touch such as a building, vehicle, gadget, or clothing. An intangible product is a product that can only be perceived indirectly such as an insurance policy. Services can be broadly classified under intangible products which can be durable or non durable. A product line is "a group of products that are closely related, either because they function in a similar manner, are sold to the same customer groups, are marketed through the same types of outlets, or fall within given price ranges."Many businesses offer a range of product lines which may be unique to a single organisation or may be common across the business's industry. In 2002 the US Census compiled revenue figures for the finance and insurance industry by various product lines such as "accident, health and medical insurance premiums" and "income from secured consumer loans.</p>
                </div>
                <hr className='mb-20 mt-20' />
                <div className='flex justify-between mb-5'>
                    <div>
                        <span className='text-2xl font-bold'>Related Products</span>
                    </div>
                    <div className='flex gap-[20px]'>
                        <button className='bg-[#f3f4f7] p-5 rounded-md hover:text-white hover:bg-rose-600'><FaArrowLeftLong /></button>
                        <button className='bg-[#f3f4f7] p-5 rounded-md hover:text-white hover:bg-rose-600'><FaArrowRightLong /></button>
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
