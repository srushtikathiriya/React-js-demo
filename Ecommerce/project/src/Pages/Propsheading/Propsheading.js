import React from 'react'
import Breadcrumb from '../Asset/breadcrumb-01.jpg'
import { useNavigate } from 'react-router-dom';

function Propsheading(props) {
    const navigate = useNavigate();
    const backToHome = () => {
      navigate("/");
    };
    return (
        <div>
            <div className='relative'>
                <img src={Breadcrumb} alt="" className='h-[200px]' />
                <div className='absolute top-14 left-20 breadcrumb-item-active'>
                    <div className='flex'>
                        <button onClick={backToHome}>Home</button>
                        <div className='ms-3 me-3 mt-3'>
                            <div className='w-[3vw] border-b-2 border-[#e2e2e2]'></div>
                        </div>
                        <span className='text-slate-400'>{props.title}</span>
                    </div>
                    <h1 className='text-4xl font-bold mt-4'>{props.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default Propsheading
