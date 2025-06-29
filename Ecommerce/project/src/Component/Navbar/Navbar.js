import React, { useState } from 'react'
import Style from "../Navbar/Navbar.css"
import Logo from "../Asset/Logo.png"
import Langflag from "../Asset/lang-flag.png"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

//get data using redux store
import { useSelector } from 'react-redux';
import MobileDrawer from '../MobileDrawer/MobileDrawer';

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const data = useSelector((state) => state.cartreducer.carts)
    const wishlists = useSelector((state) => state.wishlistreducer.wishlist)
    // console.log(data,"data");
    const navigate = useNavigate();


    return (
        <div>
            <div className='containers'>
                {/* Mobile Navbar: 1200px થી નાની સ્ક્રીન માટે */}
                <nav className="flex items-center justify-between w-full px-4 py-2 bg-white shadow xl:hidden">
                    {/* Left: Menu icon */}
                    <div>
                        <button onClick={() => setMobileMenuOpen(true)}>
                            <i className="fa-solid fa-bars text-2xl"></i>
                        </button>
                    </div>

                    {/* Center: Logo */}
                    <div>
                        <a href="#"><img src={Logo} alt="LogoImage" className="h-10" /></a>
                    </div>

                    {/* Right: Icons (wishlist icon hidden) */}
                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-shopping fa-lg"></i>
                                <span className="absolute -top-2 -right-3 rounded-full bg-red-500 px-1 text-white text-xs">{data.length}</span>
                            </Link>
                        </div>
                        <Link to="/signin">
                            <i className="fa-regular fa-user fa-lg"></i>
                        </Link>
                    </div>
                </nav>

                {/* Desktop/Navbar: 1200px થી મોટી સ્ક્રીન માટે */}
                <nav className="hidden xl:flex w-full max-w-7xl mx-auto gap-3 justify-between items-center py-3 px-6 bg-white">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="#"><img src={Logo} alt="LogoImage" className="h-10" /></a>
                    </div>

                    {/* Searchbar */}
                    <div className="flex-1 mx-8 flex justify-center">
                        <form className="w-full flex justify-center">
                            <div className="relative w-full max-w-full sm:max-w-xs md:max-w-md lg:max-w-2xl">
                                <button className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full py-2 pl-10 pr-4 rounded bg-gray-100 focus:outline-none text-gray-600 font-semibold shadow"
                                />
                            </div>
                        </form>
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

                    {/* Icons (wishlist icon visible) */}
                    <ul className="flex items-center gap-6 text-gray-600 relative ml-6">
                        <li className="relative">
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-shopping fa-lg " ></i>
                                <span className="absolute -top-2 -right-3 rounded-full bg-red-500 px-1 text-white text-xs">{data.length}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/signin">
                                <i className="fa-regular fa-user fa-lg"></i>
                            </Link>
                        </li>
                        <li className="relative">
                            <Link to="/wishlist">
                                <i className="fa-regular fa-heart fa-lg"></i>
                                <span className="absolute -top-2 -right-3 rounded-full bg-red-500 px-1 text-white text-xs">{wishlists.length}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <MobileDrawer mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
    )
}

export default Navbar
