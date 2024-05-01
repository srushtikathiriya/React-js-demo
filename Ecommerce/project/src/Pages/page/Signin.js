import React from 'react'
import Breadcrumb from '../Asset/breadcrumb-01.jpg'
import Track from "../Asset/track-bg.jpg"
import { useNavigate } from 'react-router-dom';
import { AiOutlineMail } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import Loginbg from "../Asset/login-bg.jpg"
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import Signinbg from "../Asset/sign-bg.jpg"

function Signin() {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };
    return (
        <div className=''>
            <div>
                <div className='relative'>
                    <img src={Breadcrumb} alt="" className='h-[200px]' />
                    <div className='absolute top-14 left-20 breadcrumb-item-active'>
                        <button onClick={backToHome}>Home</button>
                        <i class="fa-solid fa-minus ps-3 pe-3"></i>
                        <span className='text-slate-400'>Sign In</span>
                        <h1 className='text-4xl font-bold mt-4'>Sign In</h1>
                    </div>
                </div>

                <div className='flex gap-5 p-20'>
                    <div class="max-w-md  mx-auto bg-stone-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div>
                            <div class="md:shrink-0">
                                <img class=" w-full object-cover md:h-full md:w-full" src={Loginbg} alt="Modern building architecture" />
                            </div>
                            <div class="p-8">
                                <div class="flex">
                                    <h1 className=''>
                                        <IoLockClosedOutline className='font-bold text-4xl text-rose-600 bg-white rounded-md p-2' />
                                    </h1>
                                    <div className='block ms-5'>
                                        <span className='font-semibold text-lg'>Login Here</span>
                                        <p className='text-stone-500 text-sm'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <div className=''>
                                        <span><FaRegUser className='relative top-11 left-10  text-xl' /></span>
                                        <input type='email' placeholder='Username/email address' className="w-full mt-1 pl-20 p-4 rounded-lg" />
                                    </div>
                                    <div className=''>
                                        <span><IoKeyOutline className='relative top-10 left-10  text-xl' /></span>
                                        <input type='password' placeholder='Password' className="w-full pl-20 p-4 rounded-lg" />
                                    </div>
                                    <div className='flex justify-between mt-3'>
                                        <div className='flex gap-2'>
                                            <input type='checkbox' className="p-4 rounded-lg bg-white border-0" />
                                            <label>Remember me</label>
                                        </div>
                                        <div>
                                            <span className='underline'>Forget Password</span>
                                        </div>
                                    </div>
                                </div>
                                <button className='w-full bg-rose-600 text-white font-bold justify-center mt-3 flex items-center p-4 rounded-lg text-center gap-4'>Login Now<FaArrowRightLong className='' /></button>
                            </div>
                        </div>
                    </div>


                    <div class="max-w-md  mx-auto bg-stone-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div>
                            <div class="md:shrink-0">
                                <img class=" w-full object-cover md:h-full md:w-full" src={Signinbg} alt="Modern building architecture" />
                            </div>
                            <div class="p-8">
                                <div class="flex">
                                    <h1 className=''>
                                        <IoLockClosedOutline className='font-bold text-4xl text-rose-600 bg-white rounded-md p-2' />
                                    </h1>
                                    <div className='block ms-5'>
                                        <span className='font-semibold text-lg'>Sign Up</span>
                                        <p className='text-stone-500 text-sm'>Your personal data will be used to support your experience throughout this website, to manage access to your account.</p>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <div className=''>
                                        <span><AiOutlineMail  className='relative top-11 left-10  text-xl' /></span>
                                        <input type='email' placeholder='Email address' className="w-full mt-1 pl-20 p-4 rounded-lg" />
                                    </div>
                                    <div className=''>
                                        <span><IoKeyOutline className='relative top-10 left-10  text-xl' /></span>
                                        <input type='password' placeholder='Password' className="w-full pl-20 p-4 rounded-lg" />
                                    </div>
                                
                                        <div className='mt-3'>
                                            <span className='underline'>Already Have Account?</span>
                                        </div>
                                    
                                </div>
                                <button className='w-full bg-orange-50 text-black hover:bg-black  hover:text-white font-bold justify-center mt-3 flex items-center p-4 rounded-lg text-center gap-4'>Register Now<FaArrowRightLong className='' /></button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Signin;