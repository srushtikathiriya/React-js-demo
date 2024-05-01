import React from 'react'
import Style1 from "../Header/Header.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Banners1 from "../Asset/banner-1.jpg"
import Banners2 from "../Asset/banner-2.jpg"
import Banners3 from "../Asset/banner-3.jpg"
import Banner1 from "../Asset/banner-slider-01.jpg"
import Banner2 from "../Asset/banner-slider-02.jpg"


function Header() {
    return (
        <>
            <div>
                {/* Header start */}
                <header>
                    <div className='main-container'>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper">
                            <SwiperSlide>
                                <div className="card relative ">
                                    <img src={Banners1} alt="" />
                                    <h1 className=" absolute top-4 lg:top-16 sm:top-10 p-6">
                                        <span className='text-rose-600 text-xl'>
                                            Accessories
                                        </span>
                                        <p className='font-bold sm:text-xl lg:text-5xl '>Up To <span className='font-bold lg:text-5xl sm:text-xl text-rose-600' >40% off</span>  latest <br/> creations
                                        </p>
                                        <button className='border bg-white mt-5 text-sm flex ps-5 pe-5 pt-3 pb-3'>Shop Now <span className="material-symbols-outlined">
                                            arrow_right_alt
                                        </span></button>
                                    </h1>
                                </div>


                            </SwiperSlide>

                            <SwiperSlide>

                                <div className="card relative ">
                                    <img src={Banners2} alt="" />
                                    <h1 className="heading absolute  top-4 lg:top-16 sm:top-10 p-6">
                                        <span className='text-rose-600 text-xl'>
                                            Accessories
                                        </span>
                                        <p className='font-bold sm:text-xl lg:text-5xl'>Up To <span className='font-bold sm:text-xl lg:text-5xl text-rose-600 ' >35% off</span>  latest <br/> creations
                                        </p>
                                        <button className='border bg-white mt-5 text-sm flex ps-5 pe-5 pt-3 pb-3'>Shop Now <span className="material-symbols-outlined">
                                            arrow_right_alt
                                        </span></button>
                                    </h1>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className=" relative ">
                                    <img src={Banners3} alt="" />
                                    <h1 className="heading absolute  top-4 lg:top-16 sm:top-10 p-6">
                                        <span className='text-rose-600 text-xl'>
                                            Accessories
                                        </span>
                                        <p className='font-bold sm:text-xl lg:text-4xl xl:text-5xl'>Up To <span className='font-bold sm:text-xl lg:text-5xl text-rose-600' >45% off</span>  latest<br/> creations
                                        </p>
                                        <button className='border bg-white mt-5 text-sm flex ps-5 pe-5 pt-3 pb-3'>Shop Now <span className="material-symbols-outlined">
                                            arrow_right_alt
                                        </span></button>
                                    </h1>
                                </div>

                            </SwiperSlide>
                        </Swiper>

                        <div className="I-col-I">
                                <div className="col-card-2">
                                    <div className='col'>
                                    <div className="card-1 relative">
                                        <div className="card-1-head absolute top-6 left-6">
                                            <h3 className='text-rose-600 font-semibold'> Hand made </h3>
                                            <h1 className='font-bold text-xl'>New Modern Stylist<br /> Crafts</h1>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="I-col-II">
                                        <div className="col-card-3">
                                            <div className="card-2 relative">
                                                <div className="card-2-head absolute top-6 left-6">
                                                    <h3 className='text-rose-600 font-semibold'> Popular </h3>
                                                    <h1 className='font-bold text-xl'>Energy with our newest collection</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       

                    </div>

                </header>
            </div>

        </>
    )
}

export default Header