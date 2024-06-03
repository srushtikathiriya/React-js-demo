import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLockClosedOutline, IoKeyOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import Lottie from "lottie-react";
import Loginanim from "../Assect/Animation - 1716362067004.json";
import { ArrowRight } from 'lucide-react'

import Swal from 'sweetalert2';

// Toasty alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function showAlert() {
  toast.success('Successfully loggin', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

function show_Error_Alert() {
  toast.error("Please fill all fields", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

function show_Error() {
  toast.error("Please fill correct details", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const getEmail = localStorage.getItem("Email");
  // const getPassword = localStorage.getItem("Password");

  
  function onLoginFun(e) {
    e.preventDefault();
    const crudUsers = JSON.parse(localStorage.getItem("users"));
    const loginuser = crudUsers.find(loginuser => loginuser.email === email && loginuser.password === password)
    if (!email && !password) {
      show_Error_Alert();
    } 

    if(loginuser){
      // showAlert()
      alert("successfully registered");

      navigate('/home');
    }

    if(!loginuser){
      show_Error()
      // alert("fill cureedrypt");
    }


    // else if (email !== getEmail && password !== getPassword) {
    //   show_Error();
    // } 
    // else {
    //   showAlert();
    // }
  } 

  return (
    <div className="m-5 flex justify-center items-center">
      <div>
        <ToastContainer />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-stone-200 shadow-md overflow-hidden h-[500px] order-1 lg:order-2">
            <Lottie animationData={Loginanim} loop={true} className="w-full h-full object-cover" />
          </div>
          <div className='bg-slate-500 shadow-md overflow-hidden order-2 lg:order-1 p-8 flex items-center'>
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Sign in</h2>
              <p className="mt-2 text-sm text-white">
                Don&apos;t have an account?{' '}
                <a
                  href="#"
                  title=""
                  className="font-bold text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </a>
              </p>
              <form action="#" method="POST" className="mt-8" onSubmit={onLoginFun}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="" className="text-base font-medium text-white">
                      {' '}
                      Email address{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent text-white px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="" className="text-base font-medium text-white">
                        {' '}
                        Password{' '}
                      </label>
                      <a
                        href="#"
                        title=""
                        className="text-sm font-semibold text-white hover:underline"
                      >
                        {' '}
                        Forgot password?{' '}
                      </a>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border text-white border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type='submit'
                      className="w-full bg-orange-100 text-black hover:bg-rose-600 hover:text-white font-bold justify-center flex items-center p-4 rounded-lg text-center gap-4"
                    >
                      Login <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
