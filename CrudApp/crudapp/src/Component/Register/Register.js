import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import Lottie from "lottie-react";
import Registeranim from "../Assect/Animation - 1716356894099.json";

// Toasty alert
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function showAlert() {
  toast.success('Successfully registered', {
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

function showErrorAlert() {
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

function Register() {
  const navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [gender, setGender] = useState("");

  function onRegisterSubmit(e) {
    e.preventDefault();
    if (!fname || !email || !password) {
      showErrorAlert();
    } else {
      const newUser = {
        firstname: fname,
        email: email,
        password: password,
      };
      const users = JSON.parse(localStorage.getItem("users")) || [];  // Retrieve existing users from localStorage
      users.push(newUser);   // Add the new user to the array      
      localStorage.setItem("users", JSON.stringify(users));    //Store the updated array back in localStorage
      showAlert();
      navigate("/login");
    }
  }

  // const backToHome = () => {
  //   navigate('/login');
  // };

  return (
    <div className="m-3 flex justify-center items-center">
      <div>
        <ToastContainer />
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-stone-100 shadow-md overflow-hidden h-auto flex justify-center items-center">
            <Lottie animationData={Registeranim} loop={true} className="w-full max-w-md" />
          </div>
          <div className='bg-slate-500 shadow-md overflow-hidden order-2 lg:order-1 p-8 flex items-center'>
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Sign in</h2>
              <p className="mt-2 text-sm text-white">
                Don&apos;t have an account?{' '}
                <a
                  href="#"
                  title=""
                  className="font-bold text-black  transition-all duration-200 hover:underline"
                >
                  Create a free account
                </a>
              </p>
              <form action="#" method="POST" className="mt-8" onSubmit={onRegisterSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="" className="text-base font-medium text-white">
                      {' '}
                      First Name{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="First name"
                        onChange={(e) => setFname(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="" className="text-base font-medium text-white">
                      {' '}
                      Email address{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-white  placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center">
                      <label htmlFor="" className="text-base font-medium text-white">
                        {' '}
                        Password{' '}
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-white  placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
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
                      Register <FaArrowRightLong />
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

export default Register;
