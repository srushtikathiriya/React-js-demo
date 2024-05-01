import React from 'react'
import Blog1 from "../Asset/blog-in-01.jpg";
import Blog2 from "../Asset/blog-in-02.jpg";
import Blog3 from "../Asset/blog-in-03.jpg";

function Aside() {
  return (
    <div>
       <div className='absolute right-0 top-0'>
            <div className='w-[350px] border-2 rounded-md pt-10 ps-5 pe-5 pb-5 absolute right-0'>
              <span className='text-2xl font-bold'>Search</span>
              <div className='mt-5'>
                <input type="text" placeholder='SEARCH POST' className='w-[300px] bg-stone-200 text-sm text-bold rounded-md ps-5 pe-5 pt-4 pb-4' /><i class="fa-solid fa-magnifying-glass absolute right-12 bottom-9"></i>
              </div>
            </div>

            <div className='w-[350px] border-2 rounded-md pt-10 ps-5 pe-5 pb-5 absolute top-[10%] right-0'>
              <span className='text-2xl font-bold'>Category</span>
              <div className='mt-5'>
                <div className='flex justify-between items-center font-semibold hover:text-rose-600 text-stone-400 text-sm rounded-md w-[300px] ps-5 pt-4 pb-4 border'>
                  <a href='#'> CHEMISTRY</a>
                  <a href="#" className='pe-5'>03</a>
                </div>
              </div>

              <div className='mt-5'>
                <div className='flex justify-between items-center font-semibold hover:text-rose-600  text-stone-400 text-sm rounded-md w-[300px] ps-5 pt-4 pb-4 border'>
                  <a href='#'>FORENSIC SCIENCE</a>
                  <a href="#" className='pe-5'>07</a>
                </div>
              </div>

              <div className='mt-5'>
                <div className='flex justify-between items-center font-semibold hover:text-rose-600 text-stone-400 text-sm rounded-md w-[300px] ps-5 pt-4 pb-4 border'>
                  <a href='#'>GEMOLOGICAL</a>
                  <a href="#" className='pe-5'>09</a>
                </div>
              </div>

              <div className='mt-5'>
                <div className='flex justify-between items-center font-semibold hover:text-rose-600 text-stone-400 text-sm rounded-md w-[300px] ps-5 pt-4 pb-4 border'>
                  <a href='#'>COVID ANALYSIS</a>
                  <a href="#" className='pe-5'>01</a>
                </div>
              </div>

              <div className='mt-5'>
                <div className='flex justify-between items-center font-semibold hover:text-rose-600 text-stone-400 text-sm rounded-md w-[300px] ps-5 pt-4 pb-4 border'>
                  <a href='#'>BECTERIOLOGY</a>
                  <a href="#" className='pe-5'>00</a>
                </div>
              </div>

              <div className='mt-5'>
                <div className='flex justify-between items-center font-semibold hover:text-rose-600 text-stone-400 text-sm rounded-md w-[300px] ps-5 pt-4 pb-4 border'>
                  <a href='#'>ANGIOSPERM</a>
                  <a href="#" className='pe-5'>26</a>
                </div>
              </div>

            </div>

            <div className='w-[350px] border-2 rounded-md pt-10 ps-5 pe-5 pb-5 absolute top-[120%] right-0'>
              <span className='text-2xl font-bold'>Recent Post</span>

              <div className='mt-5'>
                <div className='flex justify-between items-center font-semibold  text-sm w-[300px]'>
                  <div className='flex gap-5 items-center'>
                    <img src={Blog1} alt="" className='w-[100px] h-[100px]' />
                    <div className='block'>
                    <span className='text-gray-400 mb-3'>4 March. 2022</span><br/>
                    <a href="#" className='hover:text-rose-600 text-base'>Don't Underestimate Tree for Furniture</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                <div className='flex justify-between items-center font-semibold  text-sm w-[300px]'>
                  <div className='flex gap-5 items-center'>
                    <img src={Blog2} alt="" className='w-[100px] h-[100px]' />
                    <div className='block'>
                    <span className='text-gray-400 mb-3'>12 February. 2022</span><br/>
                    <a href="#" className='hover:text-rose-600 text-base'>Equipping Researchers in the Developing World</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                <div className='flex justify-between items-center font-semibold  text-sm w-[300px]'>
                  <div className='flex gap-5 items-center'>
                    <img src={Blog3} alt="" className='w-[100px] h-[100px]' />
                    <div className='block'>
                    <span className='text-gray-400 mb-3'>14 January. 2022</span><br/>
                    <a href="#" className='hover:text-rose-600 text-base'>Things to do before shopping</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                <div className='flex justify-between items-center font-semibold  text-sm w-[300px]'>
                  <div className='flex gap-5 items-center'>
                    <img src={Blog1} alt="" className='w-[100px] h-[100px]' />
                    <div className='block'>
                    <span className='text-gray-400 mb-3'>18 March. 2021</span><br/>
                    <a href="#" className='hover:text-rose-600 text-base'>Research And Verify of a Quality Product</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-[350px] border-2 rounded-md pt-10 ps-5 pe-5 pb-5 absolute top-[105%] right-0'>
              <span className='text-2xl font-bold'>Popular Tag</span>
              <div className='mt-5'>
                <div className='flex  text-stone-500 text-sm rounded-md gap-3'>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>FURNITURE</button>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>TABLE</button>
                </div>
              </div>

              <div className='mt-3'>
                <div className='flex  text-stone-500 text-sm rounded-md gap-3'>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>CHAIR</button>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>CLOTHS</button>
                </div>
              </div>

              <div className='mt-3'>
                <div className='flex  text-stone-500 text-sm rounded-md gap-3'>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>TOY</button>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>SUIT</button>
                </div>
              </div>

              <div className='mt-3'>
                <div className='flex  text-stone-500 text-sm rounded-md gap-3'>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>T-SHIRT</button>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>DRESS</button>
                </div>
              </div>

              <div className='mt-3'>
                <div className='flex  text-stone-500 text-sm rounded-md gap-3'>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>WOODEN</button>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>CLOCK</button>
                </div>
              </div>

              <div className='mt-3'>
                <div className='flex  text-stone-500 text-sm rounded-md gap-3'>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>CRAFT</button>
                 <button className='text-xs hover:bg-rose-600 hover:text-white border-2 font-bold ps-5 pt-2 pb-2 pe-5'>GIFT</button>
                </div>
              </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Aside
