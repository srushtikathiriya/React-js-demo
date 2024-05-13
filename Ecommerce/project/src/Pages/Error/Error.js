import React from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from '../Asset/breadcrumb-01.jpg'
import Propsheading from '../Propsheading/Propsheading';


function Error() {
    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };
    return (
        <div>
        <Propsheading title="Error"/>

            <div className='flex justify-center mt-10 p-10'>
                <div>
                    <span class="material-symbols-outlined text-[250px] font-light text-gray-300 justify-center flex">
                        report
                    </span>
                    <h1 className='text-5xl font-bold'>404. Page not found</h1>
                    <p className='text-stone-500 pt-10 text-center'>Sorry, we couldn't find the page you where looking for. We suggest that
                        <br /> you return to homepage.</p>
                    <div className='flex justify-center mt-10'>
                        <button className='bg-rose-600 text-white ps-10 pe-10 pt-3 flex  items-center  pb-3 rounded-md hover:text-black text-xs font-bold' onClick={() => {
                            navigate("/")
                        }}>
                            <span class="material-symbols-outlined pe-4">
                                keyboard_backspace</span>Back To Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
