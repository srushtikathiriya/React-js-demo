import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Catagoriess from "../Catagories/Catagories.css"

function Catagories() {
    const [isDataVisible, setIsDataVisible] = useState(false);

    const toggleDataVisibility = () => {
        setIsDataVisible(!isDataVisible);
    };

    return (
        <div>
            <div className="asid-wrapper">
                <aside className="aside-bar">
                    {/* aside logo  */}

                    <div className="aside-logo">
                        <button className='flex justify-center items-center' onClick={toggleDataVisibility}>
                            <a href="#" className='text-white'><span><i class="fa-solid fa-bars "></i></span></a>
                            <p className="logo-text">Catagories</p>
                        </button>
                    </div>

                    <div className="sidebar">
                        {isDataVisible && (
                            <>
                                <Link to="/shop">
                                    <span class="material-symbols-outlined">person</span>
                                    <h3>Candles</h3>
                                </Link>

                                {/* <Link to="/shop">
                                    <span class="material-symbols-outlined">deceased</span>
                                    <h3>Handmade</h3>
                                    <span class="material-symbols-outlined text-gray-400 hover:text-pink-600">arrow_right_alt</span>
                                </Link> */}

                                <div className='dropdown1'>
                                    <ul className='dropbtn2'>
                                        <li><Link to="/">
                                            <span class="material-symbols-outlined">deceased</span>
                                            <h3>Handmade </h3>                 
                                            <span class="material-symbols-outlined text-gray-400 hover:text-pink-600">arrow_right_alt</span></Link>
                                            </li>
                                    </ul>
                                    <div className='dropdown-content1 ml-5 bg-white'>
                                        <ul className='w-[15rem] my-3'>
                                            <li> <a href="#">Chair</a> </li>
                                            <li> <a href="#">Table</a> </li>
                                            <li> <a href="#">Furniture</a> </li>
                                            <li> <a href="#">Clock</a> </li>
                                            <li> <a href="#">Gifts</a> </li>
                                            <li> <a href="#">Crafts</a> </li>
                                        </ul>
                                    </div>

                                </div>

                                <Link to="/shop">
                                    <i class="fa-solid fa-shoe-prints"></i>
                                    <h3>Gifts Sets</h3>
                                </Link>

                                <Link to="/shop">
                                    <span class="material-symbols-outlined">sentiment_satisfied</span>
                                    <h3>Plastic Gifts</h3>
                                </Link>

                                <Link to="/shop">
                                    <span class="material-symbols-outlined">sports_soccer</span>
                                    <h3>Handy Cream</h3>
                                </Link>

                                <Link to="/shop">
                                    <i class="fa-solid fa-crown"></i>
                                    <h3>Cosmetics</h3>
                                </Link>

                                <Link to="/shop">
                                    <span class="material-symbols-outlined">featured_seasonal_and_gifts</span>
                                    <h3>Silk Accessories</h3>
                                </Link>

                                <div className='bg-stone-100 aside-footer'>
                                    <ul>
                                        <li>
                                            <a href="#" className='value'><span>Value of the Day</span></a>
                                        </li>
                                        <li>
                                            <a href="#" className='offer'><span>Top 100 Offers</span></a>

                                        </li>
                                        <li>
                                            <a href="#" className='arrivels'><span>New Arrivels</span></a>

                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                    {/* </div> */}

                </aside>
            </div>
        </div>
    )
}

export default Catagories;
