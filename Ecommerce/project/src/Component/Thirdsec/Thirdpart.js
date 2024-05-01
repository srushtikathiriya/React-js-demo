import React, { useState, useEffect } from 'react'
import "./Thirdpart.css"
import Pots from "../Asset/floded-01.png"

function Thirdpart() {
    
    return (
        <div>
            <div className='container  bg-stone-200'>
                <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5'>
                    <div className='relative'>
                        <div className='absolute bg-rose-500 right-[40%] top-[20%] rounded-full pt-4 pb-4 ps-6 pe-6 text-white font-bold text-center transition ease-in-out animate-pulse duration-75 scale-110 -translate-y-1 '>
                            <span className=' text-xs '>From</span>
                            <h1 className='text-2xl'>$49</h1>
                        </div>
                        <img src={Pots} alt="" />
                    </div>
                    <div className='mt-10 flex flex-wrap'>
                        <span className='text-rose-600 font-bold text-xl'>$49.00</span>
                        <span className='line-through text-zinc-400 font-bold text-xl'>$59.00</span>
                        <h1 className='text-4xl xl:text-start font-bold pt-2'>Pro2 Abstract Folded Pots</h1>
                        <p className='text-zinc-400 text-lg font-semibold pt-3'>Elegant pink origami design three-dimensional view and decoration co-exist. Great for adding a decorative touch to any room's decor. Wonderful accent piece for coffee tables or side tables.</p>
                        <div className="progress-bar-container mt-5">
                            <div className="progress-bar "></div>
                        </div>
                        <div className='flex flex-wrap gap-5 text-center mt-5'>
                            <div className='bg-white pt-3 rounded-md'>
                                <span>
                                    <span className='font-bold text-4xl'>-125</span>
                                    <p className='text-slate-400'>Days</p>
                                </span>
                            </div>
                            <div className='bg-white p-3 rounded-md'>
                                <span>
                                    <span className='font-bold text-4xl'>-16</span>
                                    <p className='text-slate-400'>Hour</p>
                                </span>
                            </div>
                            <div className='bg-white p-3 rounded-md'>
                                <span>
                                    <span className='font-bold text-4xl'>-55</span>
                                    <p className='text-slate-400'>Minute</p>
                                </span>
                            </div>
                            <div className='bg-white p-3 rounded-md'>
                                <span>
                                    <span className='font-bold text-4xl'>-35</span>
                                    <p className='text-slate-400'>Second</p>
                                </span>
                            </div>
                            <div className='pt-3'>
                                <p className='text-lg text-gray-400'>Remains until the<br/>
                                    end of the offer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Thirdpart
