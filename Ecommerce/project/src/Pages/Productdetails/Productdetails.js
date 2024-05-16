import React from 'react'
import Propsheading from '../Propsheading/Propsheading'
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Data from "../../Component/Second-part/Data"
import { useParams } from 'react-router-dom';
import {ADD,WISHLIST_ADD} from "../../Redux/Action/Action";
import {useDispatch } from 'react-redux';



function Productdetails()   {
    const{ id } = useParams();
    // const product = ProductData[(id)];
    const product = Data.find((item) => item.id === id);// Find product by ID
    const dispatch = useDispatch();
    const send = (e)=>{
        // console.log(e,"eeeee");
        dispatch(ADD(e));
    }
    const wishlistsend = (e)=>{
        // console.log(e,"eeeee");
        dispatch(WISHLIST_ADD(e));
    }
    return (
        <div>
            <div>
                <Propsheading title="Shop Details" />
            </div>
            <div className='p-20'>

                <div className='grid grid-cols-1  md:grid-cols-5 gap-20'>

                    <div className='col-span-2'>
                        <img src={product.FirstImg} alt="" />
                    </div>
                    <div className='col-span-3'>
                        <div className='flex'>
                            <div>
                                <span className='bg-rose-200 text-sm font-bold text-rose-600 ps-2 pe-2'>Dress</span>
                            </div>
                            <div className='flex ps-5'>
                                <div className='flex pt-1'>
                                    <a href="#"><FaStar className='text-[#ffcd00]' /></a>
                                    <a href="#"><FaStar className='text-[#ffcd00]' /></a>
                                    <a href="#"><FaStar className='text-[#ffcd00]' /></a>
                                </div>
                                <a href="#"><span className='text-sm text-[#777] hover:text-rose-600 font-semibold ps-2'>10 Reviews</span></a>
                            </div>
                        </div>

                        <div className='mt-2 flex items-center gap-3'>
                            <h1 className='font-bold text-2xl'>{product.name}</h1>
                            <span className='border text-xs text-rose-600 font-bold ps-2 pe-2 pt-1 pb-1'>In Stock</span>
                        </div>
                        <div className='flex items-center'>
                            <h5 className='text-xl font-bold text-[#cfcfcf]'>$9.35</h5>
                            <h1 className='text-rose-600 font-bold text-3xl ms-3'>{product.price}</h1>
                        </div>
                        <div>
                            <p className='text-lg font-normal text-[#777]'>Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is acompletely modern design and you feel comfortable to put on this hijab.Buy it at the best price.</p>
                        </div>

                        <div className='flex flex-wrap mt-5 gap-5'>
                            <input min="1" type="number" defaultValue="1" name="qty" className="border p-3 font-bold" />
                            <button className='text-white bg-rose-600 hover:bg-black ps-10 pe-10 rounded-md' onClick={()=>send(product)}>Add To Cart</button>
                            <button className='hover:text-white border hover:bg-rose-600 p-5 rounded-md ' onClick={()=>wishlistsend(product)}><CiHeart className='text-xl font-semibold'/></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productdetails
