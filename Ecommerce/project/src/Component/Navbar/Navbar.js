import React from 'react'
import Style  from "../Navbar/Navbar.css"
import Logo from "../Asset/Logo.png"
import Langflag from "../Asset/lang-flag.png"
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
 
//get data using redux store
import { useSelector } from 'react-redux';

function Navbar() {

    const data = useSelector((state)=>state.cartreducer.carts)
    console.log(data,"data");
    const naviGetSignIn = useNavigate();
    const naviGetWishlist = useNavigate();


  return (
    <div>
      <div className='containers'>
                        <nav className='flex gap-3 justify-center items-center bg-slate-100 p-3'>

                            <div className='menu-bar'>
                            <i class="fa-solid fa-bars"></i>
                            </div>

                            {/* Logo */}
                            <div className='logo'>
                                <a href="#"><img src={Logo} alt="LogoImage" /></a>
                            </div>

                            {/* Searchbar */}
                            <div>
                                <div className='ms-6 serch'>
                                    <form action="">
                                        <div className='relative '>
                                            <button className='absolute top-[32%] left-[20px];'>
                                                <i class="fa-solid fa-magnifying-glass ps-5"></i>
                                            </button>
                                            <input type="text" placeholder=' Search products...' className='pt-3 pb-3 ps-10 xl:w-[500px] lg:w-[500px] sm:w-[300px] shadow-md text-slate-400 font-semibold bg-slate-200 rounded-md' />
                                        </div>
                                    </form>
                                </div>
                            </div>


                            <div className='flex flag-state'>

                            {/* Lang-flag */}
                            <div className='lang-flag'>
                                <div className=' border-2 ms-10 p-1 flex rounded-md'>
                                    <a href="#"><img src={Langflag} alt="langflag" /></a>
                                    <ul>
                                    <div className="dropdown">
                                            <button className="dropbtns">English<span><i class="fa-solid fa-angle-down  angle-downs text-gray-300"></i></span></button>
                                            <div className="dropdown-content">
                                                <a href="#">Arabic</a>
                                                <a href="#">Spanish</a>
                                                <a href="#">Mandarin</a>
                                            </div>
                                            </div>
                                    </ul>
                                </div>
                            </div>

                            {/* State */}
                            <div className='state gap-5'>
                                <div>
                                    <select name="" id="" className='p-3 ms-5 border rounded-md'>
                                        <option value="USD">USD</option>
                                        <option value="YEAN">YEAN</option>
                                        <option value="EURO">EURO</option>
                                    </select>
                                </div>
                            </div>
                            </div>

                            <div className='ms-5'>
                                {/* <div className=''> */}
                                    <ul className='flex p-2 text-gray-600 gap-7 relative'>
                                        <li className='relative'>
                                            {/* <a href="#" ><i class="fa-solid fa-cart-shopping fa-lg"></i><span className='absolute top-[-30%] right-[-20%] rounded-full bg-red-500 ps-1 pe-1 text-white text-xs'>0</span></a></li> */}
                                            <Link to="/cart">  
                                            <button><i class="fa-solid fa-cart-shopping fa-lg"></i>
                                            <span className='absolute top-[-30%] right-[-20%] rounded-full bg-red-500 ps-1 pe-1 text-white text-xs'>{data.length}</span></button>
                                            </Link>
                                            </li>
                                            
                                        <li><Link to="/signin"><i class="fa-regular fa-user fa-lg"></i></Link></li>
                                        <li><Link to="/wishlist"><i class="fa-regular fa-heart fa-lg" ></i><span className='absolute top-[5%] right-[1%] rounded-full bg-red-500 ps-1 pe-1 text-white text-xs'>0</span></Link></li>
                                    </ul>
                                {/* </div> */}
                            </div>
                        </nav>
                        </div>
    </div>
  )
}

export default Navbar
