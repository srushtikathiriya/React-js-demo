import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import Lottie from "lottie-react";
import Registeranim from "../Assect/Animation - 1716356894099.json";

import { useFormik } from "formik";
import * as Yup from "yup";

const signupSchema = Yup.object({
  fname: Yup.string().required("First name is a required field"),
  email: Yup.string().email("Invalid email").required("Email is a required field"),
  password: Yup.string()
    .min(3, "Too short!")
    .max(20, "Too long")
    .required("Password is a required field"),
});

function Register() {
  const navigate = useNavigate();

  const {values,handleSubmit,handleChange,errors,touched} = useFormik({
    initialValues: {
      fname: "",
      email: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      const newUser = {
        firstname: values.fname,
        email: values.email,
        password: values.password,
      };
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Successfully registered")
      navigate("/login");
    },
  });

  return (
    <div className="m-3 flex justify-center items-center">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-stone-100 shadow-md overflow-hidden h-auto flex justify-center items-center">
            <Lottie animationData={Registeranim} loop={true} className="w-full max-w-md" />
          </div>
          <div className='bg-slate-500 shadow-md overflow-hidden order-2 lg:order-1 p-8 flex items-center'>
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">Sign up</h2>
              <p className="mt-2 text-sm text-white">
                Already have an account?{' '}
                <a
                  href="/login"
                  title=""
                  className="font-bold text-black  transition-all duration-200 hover:underline"
                >
                  Sign in
                </a>
              </p>
              <form className="mt-8" onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="fname" className="text-base font-medium text-white">
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        id="fname"
                        name="fname"
                        placeholder="First name"
                        onChange={handleChange}
                        value={values.fname}
                      />
                      {touched.fname && errors.fname ? (
                        <p className="text-red-500 text-sm">{errors.fname}</p>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-base font-medium text-white">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-white  placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={values.email}
                      />
                      {touched.email && errors.email ? (
                        <p className="text-red-500 text-sm">{errors.email}</p>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="text-base font-medium text-white">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm text-white  placeholder:text-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={values.password}
                      />
                      {touched.password && errors.password ? (
                        <p className="text-red-500 text-sm">{errors.password}</p>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
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
