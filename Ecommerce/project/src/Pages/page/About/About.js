// import React from 'react'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import Breadcrumb from '../../Asset/breadcrumb-01.jpg'
import AboutImg1 from "../../Asset/about-img-1.jpg"
import AboutImg2 from "../../Asset/about-img-2.jpg"
import Team1 from "../../Asset/team-1.jpg"
import Team2 from "../../Asset/team-2.jpg"
import Team3 from "../../Asset/team-3.jpg"
import Team4 from "../../Asset/team-4.jpg"
import Aboutbanner1 from "../../Asset/about-banner-1.jpg"
import Aboutbanner2 from "../../Asset/about-banner-2.jpg"
import "../About/About.css"
import { useNavigate } from 'react-router-dom'

function About() {

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
            <div className='flex'>
              <button onClick={backToHome}>Home</button>
              <div className='ms-3 me-3 mt-3'>
                <div className='w-[3vw] border-b-2 border-[#e2e2e2]'></div>
              </div>
              <span className='text-slate-400'>About Us</span>
            </div>

            {/* <i class="fa-solid fa-minus ps-3 pe-3"></i> */}
            <h1 className='text-4xl font-bold mt-4'>About Us</h1>
          </div>
        </div>

        <div className='container-4'>
          <div className='grid grid-col-1'>
            <div className='flex gap-5 relative'>
              <img src={AboutImg1} alt="" className='w-[550px]' />
              <img src={AboutImg2} alt="" className='w-[550px]' />
              <span className='absolute text-[180px] top-48 left-[290px] font-bold text-white'>nin<span className='ps-1'>ico</span> </span>
            </div>
            <div>
            </div>
            <div className='flex mt-8'>
              <div>
                <span className='text-gray-400'>About Us</span>
                <h1 className='text-2xl font-bold'>About Our Story</h1>
              </div>
            </div>
          </div>


          <div className='grid gris-col-3 mt-5'>
            <div className='flex gap-10'>

              <p className='w-[400px] text-stone-500 font-medium'>
                Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services without costly customization or add ons. Get orders to your customers in lots of ways by offering shipping, pickup, delivery, and even QR code ordering.
              </p>
              <p className='w-[400px] text-stone-500 font-medium'>
                Expand your reach and sell more using seamless integrations with Google, Instagram, Facebook, and more. Built- in SEO tools make it easy for shoppers to find your business on search engines. Get access to the entire suite of integrated Square solutions to help you run your business. Integration between Square Online and all Square point of sale systems makes inventory management easy. Subscribe to Square Marketing and easily send email promotions to your customers using the contact information
              </p>

              <ul className='w-[250px]'>
                <li className='hover:underline list-disc'>Orders go right to your restaurant point of sale, KDS, and kitchen</li>
                <li className='hover:underline list-disc mt-4'>Provide in-person pickup, delivery by professional couriers</li>
                <li className='hover:underline list-disc mt-4'>Offer in-person diners self-serve, contactless ordering via QR codes.</li>
              </ul>
            </div>
          </div>

          <div>
            <div className='text-center mt-10'>
              <h6 className='text-xl text-stone-500'>Team</h6>
              <h1 className='text-4xl font-bold'>Meet With Team</h1>
            </div>
            <div className=' pt-10'>

              <Swiper
                slidesPerView={4}
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
                    slidesPerView: 4,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwipers"
              >
                <SwiperSlide>
                  <div className='relative'>
                    <img src={Team1} alt="" className='rounded-md' />
                    <div className='text-white absolute top-[70%] ms-7'>
                      <h5 className='text-sm'>Founder</h5>
                      <h1 className='text-xl font-bold'>Rosalina D. Willson</h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='relative'>
                    <img src={Team2} alt="" className='rounded-md' />
                    <div className='text-white   absolute top-[70%] ms-7'>
                      <h5 className='text-sm'>CEO</h5>
                      <h1 className='text-xl font-bold'>Ukolilix X. Xilanorix</h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='relative'>
                    <img src={Team3} alt="" className='rounded-md' />
                    <div className='text-white   absolute top-[70%] ms-7'>
                      <h5 className='text-sm'>Designer</h5>
                      <h1 className='text-xl font-bold'>Alonso M. Miklonax</h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='relative'>
                    <img src={Team4} alt="" className='rounded-md' />
                    <div className='text-white   absolute top-[70%] ms-7'>
                      <h5 className='text-sm'>Developer</h5>
                      <h1 className='text-xl font-bold'>Miranda H. Halim</h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='relative'>
                    <img src={Team1} alt="" className='rounded-md' />
                    <div className='text-white   absolute top-[70%] ms-7'>
                      <h5 className='text-sm'>Founder</h5>
                      <h1 className='text-xl font-bold'>Rosalina D. Willson</h1>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='relative'>
                    <img src={Team2} alt="" className='rounded-md' />
                    <div className='text-white font-bold  absolute top-[70%] ms-7'>
                      <h5 className='text-sm'>CEO</h5>
                      <h1 className='text-xl'>Ukolilix X. Xilanorix</h1>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div>
            <div className='grid grid-col-2 mt-20'>
              <div className='flex gap-20 '>
                <img src={Aboutbanner1} alt="" className='w-[500px]' />
                <div className='block w-[500px]'>
                  <h6 className='text-stone-500'>Features #01</h6>
                  <h1 className='font-bold text-3xl mt-2'>Solutions that work together</h1>
                  <p className='text-stone-500 font-semibold mt-5'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                  <button className='border mt-10 ps-6 pe-6 pt-2 pb-2 font-semibold rounded-md hover:bg-rose-600 hover:text-white'>Get In Touch</button>
                </div>
              </div>

              <div className='flex gap-20 mt-10'>
                <div className='block w-[500px]'>
                  <h6 className='text-stone-500'>Features #02</h6>
                  <h1 className='font-bold text-3xl mt-2'>All kinds of payments securely</h1>
                  <p className='text-stone-500 font-semibold mt-5'>Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
                  <button className='border mt-10 ps-6 pe-6 pt-2 pb-2 font-semibold rounded-md hover:bg-rose-600 hover:text-white'>Contact With Us</button>
                </div>
                <img src={Aboutbanner2} alt="" className='w-[500px]' />
              </div>

            </div>
          </div>

        </div>


      </div>


    </div>

  )
}

export default About
