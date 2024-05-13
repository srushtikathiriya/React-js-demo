import React from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumb from "../../Asset/breadcrumb-01.jpg"
// import Secpart from '../../Component/Second-part/Secpart';
// import "../Second-part/Secpart.css"
import Product1 from "../../Asset/product-2.jpg"
import Product2 from "../../Asset/product-3.jpg"
import Product3 from "../../Asset/product-5.jpg"
import Product4 from "../../Asset/product-7.jpg"
import Product5 from "../../Asset/product-9.jpg"
import Product6 from "../../Asset/product-11.jpg"
import Product7 from "../../Asset/product-13.jpg"
import Product8 from "../../Asset/product-15.jpg"
import Product9 from "../../Asset/product-17.jpg"
import Product10 from "../../Asset/product-19.jpg"
import Product11 from "../../Asset/product-4.jpg"
import Product12 from "../../Asset/product-6.jpg"
import Product13 from "../../Asset/product-8.jpg"
import Product14 from "../../Asset/product-10.jpg"
import Product15 from "../../Asset/product-12.jpg"
import Product16 from "../../Asset/product-14.jpg"
import Product17 from "../../Asset/product-16.jpg"
import Product18 from "../../Asset/product-18.jpg"
import Product19 from "../../Asset/product-20.jpg"
import Product20 from "../../Asset/product-1.jpg"
import { TfiMenuAlt } from "react-icons/tfi";
import { BsGrid3X3 } from "react-icons/bs";
import Propsheading from '../../Propsheading/Propsheading'

// import Titleshape from "../Asset/title-shape-01.jpg"


function Shop2() {

    const navigate = useNavigate();
    const backToHome = () => {
        navigate("/");
    };
    return (
        <div>
            <div className=''>
                <div className='relative'>
                    <div>
                        <Propsheading title="Shop"/>
                    
                        <div>

                            <div className='flex p-20 relative'>
                                <div>
                                    <span className='font-bold text-2xl'>10</span> <span className='text-slate-400 text-2xl'>Item On List</span>
                                </div>
                                <div className='flex items-center'>
                                    <div>
                                        <select name="" id="" className='p-3 ms-5 border rounded-md w-[140px]'>
                                            <option value="Sort by(default)">Sort by(default)</option>
                                            <option value="Newest">Newest</option>
                                            <option value="Oldest">Oldest</option>
                                        </select>
                                    </div>

                                    <div>
                                        <select name="" id="" className='p-3 ms-5 border rounded-md w-[140px]'>
                                            <option value="All">All</option>
                                            <option value="10 per page">10 per page</option>
                                            <option value="20 per page">20 per page</option>
                                            <option value="30 per page">30 per page</option>
                                        </select>
                                    </div>

                                    <div className='ms-5 flex items-center'>
                                        <button className='font-thin'><TfiMenuAlt /></button>
                                        <button className='ms-3 font-thin text-rose-600'><BsGrid3X3 /></button>
                                    </div>
                                </div>
                            </div>

                            {/* <div className='w-[200px]'>
                                <h1 className='font-bold'>Catagories</h1>
                                <div className='text-stone-500'>
                                    <div className='mt-10 gap-3  flex'>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" >Kids</label>
                                    </div>
                                    <div className=' gap-3  flex'>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" >Kids</label>
                                    </div>
                                    <div className=' gap-3  flex'>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" >Kids</label>
                                    </div>
                                    <div className=' gap-3  flex'>
                                        <input type="checkbox" name="" id="" />
                                        <label htmlFor="" >Kids</label>
                                    </div>
                                </div>

                            </div> */}

                            {/* </div> */}


                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white pt-1 pb-5 ps-20 pe-20 mt-5 w-[1000px]'>

                                <div className='button'>
                                    <a href="#" className='burdges relative inline-block'>
                                        <img src={Product20} alt="" />
                                        <img className='Burges' src={Product1} alt="" />
                                        <div className='icon'>
                                            <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                            <a href="#"><span className="material-symbols-outlined">sync_alt</span></a>
                                            <a href="#"><span className="material-symbols-outlined">visibility</span></a>
                                            <a href="#"><span className="material-symbols-outlined">favorite</span></a>
                                        </div>
                                    </a>
                                    <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Bradley Burgess 2</h6>
                                    <h2 className='font-bold'>$20.00</h2>
                                    <div className='btn mt-6 mb-6'>
                                        <div className='flex gap-[2px] items-center'>
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
                                <div className='button'>
                                    <a href="#" className='burdges relative inline-block'>
                                        <img src={Product2} alt="" />
                                        <img className='Burges' src={Product11} alt="" />
                                        <div className='icon'>
                                            <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                            <a href="#"><span className="material-symbols-outlined">sync_alt</span></a>
                                            <a href="#"><span className="material-symbols-outlined">visibility</span></a>
                                            <a href="#"><span className="material-symbols-outlined">favorite</span></a>
                                        </div>
                                    </a>
                                    <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Allie Sharp</h6>
                                    <h2 className='font-bold'>$30.00</h2>

                                    <div className='btn mt-6 mb-6'>
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
                                <div className='button'>
                                    <a href="#" className='burdges relative inline-block'>
                                        <img src={Product3} alt="" />
                                        <img className='Burges' src={Product12} alt="" />
                                        <div className='icon'>
                                            <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                            <a href="#"><span className="material-symbols-outlined">sync_alt</span></a>
                                            <a href="#"><span className="material-symbols-outlined">visibility</span></a>
                                            <a href="#"><span className="material-symbols-outlined">favorite</span></a>
                                        </div>
                                    </a>
                                    <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Nathaniel Baldwin</h6>
                                    <h2 className='font-bold'>$40.00</h2>
                                    <div className='btn mt-6 mb-6'>
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
                                <div className='button'>
                                    <a href="#" className='burdges relative inline-block'>
                                        <img src={Product4} alt="" />
                                        <img className='Burges' src={Product13} alt="" />
                                        <div className='icon'>
                                            <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                            <a href="#"><span className="material-symbols-outlined">sync_alt</span></a>
                                            <a href="#"><span className="material-symbols-outlined">visibility</span></a>
                                            <a href="#"><span className="material-symbols-outlined">favorite</span></a>
                                        </div>
                                    </a>
                                    <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Effie Rios</h6>
                                    <h2 className='font-bold'>$40.00</h2>
                                    <div className='btn mt-6 mb-6'>
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
                                <div className='button'>

                                    <a href="#" className='burdges relative inline-block'>
                                        <img src={Product5} alt="" />
                                        <img className='Burges' src={Product14} alt="" />
                                        <div className='icon'>
                                            <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                            <a href="#"><span className="material-symbols-outlined">sync_alt</span></a>
                                            <a href="#"><span className="material-symbols-outlined">visibility</span></a>
                                            <a href="#"><span className="material-symbols-outlined">favorite</span></a>
                                        </div>
                                    </a>
                                    <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Carolyn Goodwin</h6>
                                    <h2 className='font-bold'>$50.00</h2>
                                    <div className='btn mt-6 mb-6'>
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

                                <div className='button'>
                                    <a href="#" className='burdges relative inline-block'>
                                        <img src={Product6} alt="" />
                                        <img className='Burges' src={Product15} alt="" />
                                        <div className='icon'>
                                            <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                            <a href="#"><span className="material-symbols-outlined">sync_alt</span></a>
                                            <a href="#"><span className="material-symbols-outlined">visibility</span></a>
                                            <a href="#"><span className="material-symbols-outlined">favorite</span></a>
                                        </div>
                                    </a>
                                    <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Evelyn Patton</h6>
                                    <h2 className='font-bold'>$60.00</h2>
                                    <div className='btn mt-6 mb-6'>
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
                                <div className='button'>
                                    <a href="#" className='burdges relative inline-block'>
                                        <img src={Product7} alt="" />
                                        <img className='Burges' src={Product16} alt="" />
                                        <div className='icon'>
                                            <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                            <a href="#"><span className="material-symbols-outlined">sync_alt</span></a>
                                            <a href="#"><span className="material-symbols-outlined">visibility</span></a>
                                            <a href="#"><span className="material-symbols-outlined">favorite</span></a>
                                        </div>
                                    </a>
                                    <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Sally Ray</h6>
                                    <h2 className='font-bold'>$70.00</h2>
                                    <div className='btn mt-6 mb-6'>
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
                                <div className='button'>
                                    <a href="#" className='burdges relative inline-block'>

                                        <img src={Product8} alt="" />
                                        <img className='Burges' src={Product17} alt="" />
                                        <div className='icon'>
                                            <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                            <a href="#"><span className="material-symbols-outlined">sync_alt</span></a>
                                            <a href="#"><span className="material-symbols-outlined">visibility</span></a>
                                            <a href="#"><span className="material-symbols-outlined">favorite</span></a>
                                        </div>
                                    </a>

                                    <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Ora Bowman</h6>
                                    <h2 className='font-bold'>$80.00</h2>
                                    <div className='btn mt-6 mb-6'>
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
                                <div className='button'>

                                    <a href="#" className='burdges relative inline-block'>
                                        <img src={Product9} alt="" />
                                        <img className='Burges' src={Product18} alt="" />
                                        <div className='icon'>
                                            <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                            <a href="#"><span className="material-symbols-outlined">sync_alt</span></a>
                                            <a href="#"><span className="material-symbols-outlined">visibility</span></a>
                                            <a href="#"><span className="material-symbols-outlined">favorite</span></a>
                                        </div>
                                    </a>
                                    <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Frederick Valdez</h6>
                                    <h2 className='font-bold'>$90.00</h2>
                                    <div className='btn mt-6 mb-6'>
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
                                <div className='button'>
                                    <div className=''>
                                        <a href="#" className='burdges relative inline-block'>
                                            <img src={Product10} alt="" />
                                            <img className='Burges' src={Product19} alt="" />
                                            <div className='icon'>
                                                <a href="#"><i className="fa-solid fa-basket-shopping"></i></a>
                                                <a href="#"><span className="material-symbols-outlined">sync_alt</span></a>
                                                <a href="#"><span className="material-symbols-outlined">visibility</span></a>
                                                <a href="#"><span className="material-symbols-outlined">favorite</span></a>
                                            </div>
                                        </a>

                                        <h6 className='pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer'>Terry Byrd</h6>
                                        <h2 className='font-bold'>$100.00</h2>
                                        <div className='btn mt-6 mb-6'>
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
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop2
