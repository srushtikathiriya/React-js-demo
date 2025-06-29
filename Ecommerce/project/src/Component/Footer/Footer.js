import React from 'react'
import Logo from "../Asset/Logo.png"
import Fapp from '../Asset/f-app.jpg'
import Fgoogle from '../Asset/f-google.jpg'
import Fbrand from "../Asset/f-brand-icon-01.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Style from "../Footer/Footer.css"

function Footer() {
    return (


        // footer start
        <footer className='bg-stone-100'>

            <div className='footer-container  '>
                <div className=''>
                    <div className='grids grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 border-b-2 pb-10'>
                            {/* logo */}
                            <div className='Logo'>
                                <a href="#">
                                    <img src={Logo} alt="Logo.png" />
                                </a>
                                <p className='pt-10 text-wrap  pe-5  text-stone-500'>Elegant pink origami design three dimensional view and decoration co-exist. Great for adding a decorative touch to any room's decor.</p>
                            </div>
                       

                        {/* Information */}

                        <div className='Info'>
                            <a href="#" className='font-bold underline'>Information</a>
                            <ul className='info text-stone-500'>
                                <li><a href="#">Custom Service</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Ordering Tracking</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Events</a></li>
                            </ul>
                        </div>

                        {/* My Account */}
                        <div className='Account '>
                            <a href="#" className='font-bold underline'>My Account</a>
                            <ul className='account text-stone-500'>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Discount</a></li>
                                <li><a href="#">Custom Service</a></li>
                                <li><a href="#">Terms Condition</a></li>
                            </ul>
                        </div>

                        {/* social network */}
                        <div className='Social'>
                            <a href="#" className='font-bold underline'>Social Network</a>
                            <ul className='social text-stone-500'>
                                <li><a href="#"><span className='text-black pe-5'><i class="fa-brands fa-facebook-f"></i></span> Facebook</a></li>

                                <li><a href="#"><span className='text-black pe-5'><i class="fa-brands fa-dribbble"></i></span>Dribbble</a></li>

                                <li><a href="#"><span className='text-black pe-5'><i class="fa-brands fa-twitter"></i></span> Twitter</a></li>

                                <li><a href="#"><span className='text-black pe-5'><i class="fa-brands fa-behance"></i></span> Behance</a></li>
                                
                                <li><a href="#"><span className='text-black pe-5'><i class="fa-brands fa-youtube"></i></span> Youtube</a></li>
                            </ul>
                        </div>

                        {/* Newsletter */}

                        <div className='sletter'>
                            <a href="#" className='font-bold underline'>Get Newsletter</a>
                            <h3 className='social text-stone-500 text-xl pb-5'>Get on the list and get 10% off your first order!</h3>
                            <form action="">
                                <input type="text" placeholder='Enter Email address' className='text-sm p-5 w-64' />
                            </form>
                            <button className='bg-rose-600 pt-4 pb-4 ps-6 pe-6 text-white mt-3 rounded-md '>Subscribe Now <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                        </div>
                    {/* </div> */}

                    {/* footer number */}

                    <div className='bg-stone-100'>
                        <div className='flex justify-between  items-centes p-5 flex-wrap'>
                            <div className='Time'>
                                <div className='time'>
                                    <a href="#" className='pt-3 text-2xl  rounded-full p-5 bg-white'><i class="fa-solid fa-phone-flip"></i></a>
                                    <div className='number ps-5 pt-2'>
                                        <span className='font-bold text-xl'>980. 029. 666. 99</span>
                                        <p className='text-stone-500'>Working 8:00 - 22:00</p>
                                    </div>
                                </div>
                            </div>
                            <div className='app flex flex-wrap md:pt-5'>
                                <div className='pe-5 sm:pb-3'>
                                    <span className='font-bold'>Download App on Mobile</span>
                                    <p className='text-stone-500'>15% discount on your first purchase</p>
                                </div>
                                <div className='flex'>
                                    <a href="#" className='pe-2'><img src={Fgoogle} alt="" /></a>
                                    <a href="#"><img src={Fapp} alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* footer copyright */}

                    <div className='bg-stone-200'>
                        <div className='flex justify-between flex-wrap p-5'>
                            <div>
                                <div className="footer-copyright__content sm:pb-3">
                                    <span>Copyright 2024 <a href="#" className='font-bold'>©Ninico</a>. All rights reserved. Developed by
                                        <a href="#" className='font-bold'> AliThemes</a>.</span>
                                </div>
                            </div>
                            <div className='App flex flex-wrap lg:pt-0 md:pt-5'>
                                <div>
                                    <div className="footer-copyright__brand text-right">
                                        <img src={Fbrand} alt="footer-brand" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* footer end */}
        </footer>
    )
}

export default Footer;