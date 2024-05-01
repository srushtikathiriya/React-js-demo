import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination } from 'swiper/modules';
import "../LastPart/Lastpart.css"
import Instagram1 from "../Asset/instagram-01.jpg"
import Instagram2 from "../Asset/instagram-02.jpg"
import Instagram3 from "../Asset/instagram-03.jpg"
import Instagram4 from "../Asset/instagram-04.jpg"
import Instagram5 from "../Asset/instagram-05.jpg"
import Instagram6 from "../Asset/instagram-06.jpg"
function Lastpart() {
  return (
    <div>
      <div className='containers-2 bg-stone-100'>

      <div className='text-center'>
                 <h6 className='text-2xl text-rose-600'>Follow On</h6>
                 <h1 className='text-4xl font-bold'><i class="fa-brands fa-instagram pe-3"></i>ninico-shop</h1>
      </div>


      <div className=' pt-10'>

        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
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
        modules={[Autoplay,Pagination]}
        className="mySwipers"
        >
        <SwiperSlide>
          <div>
            <img src={Instagram1} alt="" className='rounded-md'/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Instagram2} alt="" className='rounded-md' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Instagram3} alt="" className='rounded-md' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Instagram4} alt="" className='rounded-md' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Instagram5} alt="" className='rounded-md' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Instagram6} alt="" className='rounded-md' />
          </div>
        </SwiperSlide>
      </Swiper>


      </div>

    </div>
        </div>
  )
}
export default Lastpart;