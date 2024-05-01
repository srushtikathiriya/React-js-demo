import React from 'react'
import { useNavigate } from 'react-router-dom';
import Commingsoon from "../Asset/comming-soon-1.jpg"
import { CiMail } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

function Comingsoon() {
    const navigate = useNavigate();
    const backToHome = () => {
      navigate("/");
    }
  return (
    <div>
      <div className='relative'>
          <img src={Commingsoon} alt="" className='w-full h-[80%]' />
          <div className='absolute top-16 left-[45%]'>
              <span className='text-white text-4xl font-bold'>ninico</span>
          </div>
          <div className='absolute bottom-14 left-[25%] text-white text-center'>
            <h6 className='text-xl'>Coming Soon!</h6>
            <h1 className='text-6xl font-bold'>We are Coming Soon</h1>
          <div className='flex mt-10 justify-between'>
          <div className='block'>
                <h1 className='text-5xl font-bold'>-132</h1>
                <h4 className='font-semibold'>Days</h4>
            </div>
            <div className='block'>
                <h1 className='text-5xl font-bold'>-16</h1>
                <h4 className='font-semibold'>Hour</h4>
            </div>
            <div className='block'>
                <h1 className='text-5xl font-bold'>-53</h1>
                <h4 className='font-semibold'>Minute</h4>
            </div>
            <div className='block'>
                <h1 className='text-5xl font-bold'>-50</h1>
                <h4 className='font-semibold'>Second</h4>
            </div>
          </div>
          </div>
    </div>

    <div className='m-3 flex justify-around'>
            <span className='flex items-center gap-4'>
                <CiMail className=' text-xl'/>  
                <span className='text-stone-500'>Email address</span>    
            </span>
            <button className='text-white bg-rose-600 p-5 font-bold flex gap-4 items-center'>Subscribe Now <FaArrowRightLong /></button>
    </div>
    </div>
  )
}

export default Comingsoon
 