import React from 'react';
import "../First-Part/Fpart.css";
import Cat1 from "../Asset/cat01.svg";
import Cat2 from "../Asset/cat02.svg";
import Cat3 from "../Asset/cat03.svg";
import Cat4 from "../Asset/cat04.svg";
import Cat5 from "../Asset/cat05.svg";
import Cat6 from "../Asset/cat06.svg";

function Fpart() {
    return (
        <div className=''>
            <div className='container-1'>
                <div className='categ text-start'>
                    <h1><span className='font-bold text-3xl'>Top</span>  <span className='text-rose-600 text-3xl font-thin'>Categories</span></h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 mt-10 text-center">
                    <div className='text-center relative'>
                        <span className='rounded-full bg-white text-xs text-rose-600 font-bold p-3 hover:text-white hover:bg-rose-600 absolute right-[0]'>20</span>
                        <img src={Cat1} alt="" className='rounded-full pt-10 pb-10 ps-12 pe-12 bg-stone-200 mx-auto' />
                        <a href="#" className='hover:underline block'>Driftwood<br />Table Decor</a>
                    </div>

                    <div className='text-center relative'>
                        <span className='rounded-full bg-white text-xs text-rose-600 font-bold p-3 hover:text-white hover:bg-rose-600 absolute right-0'>12</span>
                        <img src={Cat2} alt="" className='rounded-full p-10 bg-stone-200 mx-auto' />
                        <a href="#" className='hover:underline block'>Floor Driftwood<br />Sculpture</a>
                    </div>

                    <div className='text-center relative'>
                        <span className='rounded-full bg-white text-xs text-rose-600 font-bold p-3 hover:text-white hover:bg-rose-600 absolute right-0'>03</span>
                        <img src={Cat3} alt="" className='rounded-full p-10 bg-stone-200 mx-auto' />
                        <a href="#" className='hover:underline block'>Driftwood<br />Christmas Tree</a>
                    </div>

                    <div className='text-center relative'>
                        <span className='rounded-full bg-white text-xs text-rose-600 font-bold p-3 hover:text-white hover:bg-rose-600 absolute right-0'>09</span>
                        <img src={Cat4} alt="" className='rounded-full p-10 bg-stone-200 mx-auto' />
                        <a href="#" className='hover:underline block'>Wooden<br />Bluetooth Speaker</a>
                    </div>

                    <div className='text-center relative'>
                        <span className='rounded-full bg-white text-xs text-rose-600 font-bold p-3 hover:text-white hover:bg-rose-600 absolute right-0'>10</span>
                        <img src={Cat5} alt="" className='rounded-full pt-10 pb-10 ps-12 pe-12 bg-stone-200 mx-auto' />
                        <a href="#" className='hover:underline block'>Receivers<br />Amplifiers</a>
                    </div>

                    <div className='text-center relative'>
                        <span className='rounded-full bg-white text-xs text-rose-600 font-bold p-3 hover:text-white hover:bg-rose-600 absolute right-0'>05</span>
                        <img src={Cat6} alt="" className='rounded-full p-10 bg-stone-200 mx-auto' />
                        <a href="#" className='hover:underline block'>Appetizer<br />Plate Set</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fpart;
