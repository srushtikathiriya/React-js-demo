import React, { useState } from 'react';
import '../Second-part/Secpart.css';
import { Link } from 'react-router-dom';
import ProductData from '../Second-part/Data';
import { useDispatch, useSelector } from "react-redux";
import { ADD, WISHLIST_ADD } from "../../Redux/Action/Action"
import Productdetails from '../../Pages/Productdetails/Productdetails';

// Alert 
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function showAlert() {
    toast.success('This Item Added To Cart', {
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
    toast.error('Item already in Cart List. Please review and checkout promptly.', {
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

// Wishlist
function showAlerts_Success() {
    toast.success('Your item has been added to the Wish list!', {
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

function showAlerts_Error() {
    toast.error('Item already in Wish List. Please review and checkout promptly.',
    {
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


function Secpart() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.cartreducer.carts)
    const wishlists = useSelector((state)=>state.wishlistreducer.wishlist)
    
    const send = (product) => {
        // console.log(e,"eeeee");
        dispatch(ADD(product));
        // showAlert();
        let find = data.findIndex(item => item.id === product.id);
        find === -1 ? showAlert() : show_Error_Alert();
    }

    const wishlistsend = (product) => {
        // console.log(e,"eeeee");
        dispatch(WISHLIST_ADD(product));
        // showAlerts ();
        let find =  wishlists.findIndex(item => item.id === product.id);
        find === -1 ?showAlerts_Success() : showAlerts_Error() ;
    }


    return (
        <div className="container2 bg-stone-50">
            <div className="flex flex-wrap justify-between">
                <div className="title-shape">
                    <h1 className="font-bold text-2xl">
                        Popular
                        <span className="font-normal text-2xl text-rose-600">Products</span>
                    </h1>
                </div>
                <div className="flex items-center">
                    <ul className="flex sm:flex-wrap gap-10">
                        <li className="text-rose-600 underline font-bold">
                            <a href="#">All</a>
                        </li>
                        <li className="font-bold">
                            <a href="#">Popular</a>
                        </li>
                        <li className="font-bold">
                            <a href="#">On Sale</a>
                        </li>
                        <li className="font-bold">
                            <a href="#">Best Rated</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white mt-5">
                {ProductData.map((product, index) => (
                    <div key={index} className="button">
                        <div className="burdges relative block">
                            <Link to={`/productdetails/${product.id}`} >
                                <img src={product.FirstImg} alt="Image-1" />
                                <img className="Burges" src={product.SecondeImg} alt="" />
                            </Link>
                            <div className="icon">
                                <a href="#">
                                    <button onClick={() => send(product)}><i className="fa-solid fa-basket-shopping"></i></button>
                                </a>
                                <a href="#">
                                    <button ><span className="material-symbols-outlined">sync_alt</span></button>
                                </a>
                                <a href="#">
                                    <button><span className="material-symbols-outlined">visibility</span></button>
                                </a>
                                <a href="#">
                                    <button onClick={() => wishlistsend(product)}><span className="material-symbols-outlined">favorite</span></button>
                                </a>
                            </div>
                            <h6 className="pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer">
                                {product.name}
                            </h6>
                            <h2 className="font-bold">{product.price}</h2>
                            <div className="btn mt-6 mb-6">
                                <div className="flex justify-between items-center">
                                    <div className='flex gap-[2px]'>
                                        <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                        <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                    </div>
                                    <div className='flex items-center'>
                                        <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                        <button><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                        <span className='text-xs'>(81)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
}

export default Secpart;
