// import React from 'react'
import Navbar2 from "./Navbar2.css"
import {Link} from "react-router-dom"
import Catagories from "../Catagories/Catagories"

function Asidebar() {
    return (
        <div className='main-menu-area mt-5'>
                  <div className='containers-1 mx-auto px-5'>
                    <Catagories/>
                    <div className='row flex items-center justify-between'>
                      <div className='flex'>
                        <div className='flex items-center ml-3'>
                          <div className='main-manu'>
                            <div className='dropdown1'>                                 
                                <ul className='dropbtn1'>
                                  <li><Link to="/">Home
                                <i class="fa-solid fa-angle-down ml-1"></i></Link></li>
                                </ul>
                              <div className='dropdown-content1 ml-5 bg-white'>
                                <ul className='w-[15rem] my-3'>
                                  <li><Link to="/">Wooden Home</Link></li>
                                  <li> <a href="#">Fashion Home</a> </li>
                                  <li> <a href="#">Furniture Home</a> </li>
                                  <li> <a href="#">Cosmetics Home</a> </li>
                                  <li> <a href="#">Food Grocery</a> </li>
                                </ul>
                              </div>

                            </div>
                            <div className='dropdown1'>
                              <ul className='dropbtn1'>
                                <li><Link to="/shop" >           
                                Shop
                                <i class="fa-solid fa-angle-down ml-1"></i>
                                </Link></li>
                              </ul>
                              

                              <div className='dropdown-content1 ml-5 bg-white'>
                                <ul className='w-[15rem] my-3'>
                                  <li><Link to="/shop" >Shop</Link></li>
                                  <li><Link to="/shop2" >Shop 2</Link> </li>
                                  <li> <a href="#">Shop Details</a> </li>
                                  <li> <a href="#">Shop Details 2</a> </li>
                                  <li><Link to="/shoplocation" >Shop Location</Link></li>
                                  <li><Link to="/cart">Cart</Link> </li>
                                  <li> <Link to="/signin">Sign In</Link> </li>
                                  <li><Link to="/checkout">Checkout</Link> </li>
                                  <li> <Link to="/wishlist">Wishlist</Link> </li>
                                  <li> <Link to="/producttract">Product Track</Link> </li>
                                  {/* <li>  <Link to="*">404 / Error</Link> </li> */}
                                </ul>
                              </div>
                            </div>
                            <div className='dropdown1'>
                               <ul className='dropbtn1'>
                                <li><Link to="/pages" >           
                                Pages
                                <i class="fa-solid fa-angle-down ml-1"></i>
                                </Link></li>
                              </ul>
                              <div className='dropdown-content1 ml-5 bg-white'>
                                <div className='flex'>
                                  <ul className='w-[15rem] my-3'>
                                    <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE LAYOUT</h1> </li>
                                    <li> <Link to="/shop">Shop Filters V1</Link> </li>
                                    <li>  <Link to="/shop">Shop Filters V2</Link> </li>
                                    <li> <a href="#">Shop Sidebar</a> </li>
                                    <li> <a href="#">Shop Right Sidebar</a> </li>
                                    <li> <a href="#">Shop List View</a> </li>
                                  </ul>
        
                                  <ul className='w-[15rem] my-3'>
                                    <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE LAYOUT</h1> </li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/cart">Cart</Link> </li>
                                    <li><Link to="/checkout">Checkout</Link> </li>
                                    <li> <Link to="/signin">Sign In</Link> </li>
                                    <li> <Link to="/login">Log In</Link> </li>
                                  </ul>
        
                         <ul className='w-[15rem] my-3'>
                                    <li className='ml-4 mb-3 text-sm font-bold'> <h1 className='hover:text-red-500'>PAGE TYPE</h1> </li>
                                    <li> <Link to="/producttract">Product Track</Link> </li>
                                    <li> <Link to="/wishlist">Wishlist</Link> </li>
                                    <li> <Link to="*">404 / Error</Link> </li>
                                    <li><Link to="/comingsoon">Coming Soon</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className='dropdown1'>
                              <ul className='dropbtn1'>
                                <li><Link to="/blog">Blog
                                <i class="fa-solid fa-angle-down ml-1"></i></Link></li>
                              </ul>
                              <div className='dropdown-content1 ml-5 bg-white'>
                                <ul className='w-[15rem] my-3'>
                                  <li> <Link to="/blog">Blog</Link> </li>
                                  <li> <Link to="/blogdetail">Blog Details</Link> </li>
                                </ul>
                              </div>
                            </div>
                            <div className='dropdown1'>
                              <ul className='dropbtn1'>
                                <li><Link to="/contact">Contact</Link></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='menu-contact '>
                        <ul className='flex items-center'>
                          <li className='mr-5'>
                            <a href="#" className='hover:text-red-500'>
                              <i class="fa-solid fa-phone-flip mr-2 text-red-600"></i>
                              908. 408. 501. 89
                            </a>
                          </li>
                          <li>
                            <a href="#" className='hover:text-red-500'>
                              <i class="fa-solid fa-location-dot mr-2 text-red-600"></i>
                              Find Store
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
    )
}

export default Asidebar
