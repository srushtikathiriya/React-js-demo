import React from 'react'
import Breadcrumb from '../../Asset/breadcrumb-01.jpg'
import { useNavigate } from 'react-router-dom';
import "../Blog/Blog.css"
import Blog1 from "../../Asset/blog-in-01.jpg";
import Blog2 from "../../Asset/blog-in-02.jpg";
import Blog3 from "../../Asset/blog-in-03.jpg";
import Blog4 from "../../Asset/blog-in-04.jpg";
import Blog5 from "../../Asset/blog-in-05.jpg";
import Comment1 from "../../Asset/comment-1.png";
import Comment2 from "../../Asset/comment-2.png";
import Aside from '../Aside';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaReplyAll } from "react-icons/fa";


function Blog() {

  const navigate = useNavigate();
  const Navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  // const backToBlogdetails = () => {
  //   Navigate("/blogdetail");
  // };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className=''>
      <div>
        <div className='relative'>
          <img src={Breadcrumb} alt="" className='h-[200px]' />
          <div className='absolute top-14 left-20 breadcrumb-item-active'>
            <div className='flex'>
              <button onClick={backToHome}>Home</button>
              <div className='ms-3 me-3 mt-3'>
                <div className='w-[3vw] border-b-2 border-[#e2e2e2]'></div>
              </div>
              <span className='text-slate-400'>Blog Details</span>
            </div>
            <h1 className='text-4xl font-bold mt-4'>Blog Details</h1>
          </div>
        </div>

        <div className='containers-3 mx-auto p-4 md:p-0 md:px-8'>

          <div className='grid grid-cols-4 md:grid-cols-6 md:flex-nowrap sm:flex-wrap gap-20'>
            <div className='col-span-4'>
              <div className=''>
                <img src={Blog1} alt="" className=' rounded-md h-[350px]' />
                <div className='mt-5 flex gap-20'>
                  <span className='flex items-center'><span class="material-symbols-outlined pe-3 text-rose-600 font-thin text-3xl">
                    person
                  </span>ALEXTINA</span>
                  <span className='flex items-center'><span class="material-symbols-outlined pe-3 text-rose-600 font-thin text-3xl">
                    schedule
                  </span>Dec 28,2022</span>
                  <span className='flex items-center'><span class="material-symbols-outlined pe-3 text-rose-600 font-thin text-3xl">
                    chat_bubble
                  </span>(04)COMMENTS</span>
                </div>

                <h1 className='font-bold text-3xl mt-3'>Lavoratories used for scientic reseach take many froms.</h1>
                <p className='mt-5 text-gray-800 hover:text-rose-600 md:text-wrap'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, aperiam ipsquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p><br />
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, aperiam ipsquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

              </div>

              <div className='flex justify-between mt-10 gap-10'>
                <div>
                  <h1 className='text-3xl font-bold'>Our Approach</h1>
                  <p className='mt-3 text-md'>Must explain to you how all praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater</p>
                  <ul className='mt-10 list-inside'>
                    <li className='flex items-center '><FaCheck className='me-5 text-rose-600 text-xl' />Extramural Funding</li>
                    <li className='flex items-center'><FaCheck className='me-5 text-rose-600 text-xl' />Bacteria Markers</li>
                    <li className='flex items-center'><FaCheck className='me-5 text-rose-600 text-xl' />Nam nec mi euismod euismod</li>
                  </ul>
                </div>

                <div>
                  <img src={Blog2} alt="" className='rounded-lg' />
                </div>
              </div>


              <div className='mt-10'>
                <div>
                  <h1 className='font-bold text-3xl'>What Is A Business Technology Roadmap?</h1>
                  <p className='mt-5'>Unlike detailed blueprints that lay out all tasks, deadlines, bug reports, and more along the way, technology roadmaps are high-level visual summaries highlighting a company's vision or plans.</p><br />
                  <p>In an Agile approach, a technology roadmap feeds the sprint and grooming processes, providing insight into how the product will travel from start to finish. It makes it easier for development teams to:</p>
                </div>
                <div className='flex justify-between gap-5 mt-5'>
                  <div>
                    <img src={Blog5} alt="" className='rounded-lg' />
                  </div>
                  <div>
                    <img src={Blog4} alt="" className='rounded-lg' />
                  </div>
                </div>
                <hr className='mt-16' />
                <div className='flex justify-between mt-10'>
                  <div className='flex gap-3 items-center'>
                    <h1 className='font-bold text-2xl'>Tag</h1>
                    <button className='text-sm border ps-6 pe-6 pt-2 pb-2 text-gray-400 hover:bg-rose-600 hover:text-white font-bold'>FURNITURE</button>
                    <button className='text-sm border ps-6 pe-6 pt-2 pb-2 text-gray-400 hover:bg-rose-600 hover:text-white font-bold'>TABLE</button>
                    <button className='text-sm border ps-6 pe-6 pt-2 pb-2 text-gray-400 hover:bg-rose-600 hover:text-white font-bold'>FASHION</button>
                  </div>
                  <div className='flex gap-3 items-center font-bold'>
                    <h1 className='text-2xl'>Share</h1>
                    <button className='text-xl'><FaLinkedinIn className='hover:text-rose-600' /></button>
                    <button className='text-xl'><FaPinterestP className='hover:text-rose-600' /></button>
                    <button className='text-xl'><FaFacebookF className='hover:text-rose-600' /></button>
                    <button className='text-xl'><FaTwitter className='hover:text-rose-600' /></button>
                  </div>
                </div>
                <hr className='mt-10' />
                <div>
                  <div className='mt-10'>
                    <h1 className='text-2xl font-bold'>(04) Comment</h1>
                  </div>
                  <div className='flex mt-10'>
                    <img src={Comment1} alt="" className='h-[80px] w-[80px] rounded-full' />
                    <div className='block ps-5'>
                      <h1 className='font-semibold'>Kristin Watson</h1>
                      <h5 className='mt-3 text-sm text-[#777]'>MARCH 10, 2020</h5>
                      <p className='mt-3 text-md text-[#777]'>Patient Comments are a collection of comments submitted by viewers in response to a question posed by a MedicineNet doctor.</p>
                      <button className='ms-5 mt-5 text-rose-600 hover:bg-rose-600  hover:text-white pt-2 pb-2 ps-3 pe-3 rounded-md' onClick={scrollToTop}><FaReplyAll /></button>
                    </div>
                  </div>

                  <div className='flex mt-10 ms-28'>
                    <img src={Comment2} alt="" className='h-[80px] w-[80px] rounded-full' />
                    <div className='block ps-5'>
                      <h1 className='font-semibold'>Brooklyn Simmons</h1>
                      <h5 className='mt-3 text-sm text-[#777]'>MARCH 10, 2020</h5>
                      <p className='mt-3 text-md text-[#777]'>Include anecdotal examples of your experience, or things you took notice of that you <br />feel others would find useful.</p>
                      <button className='ms-5 mt-5 text-rose-600 hover:bg-rose-600  hover:text-white pt-2 pb-2 ps-3 pe-3 rounded-md' onClick={scrollToTop}><FaReplyAll /></button>
                    </div>
                  </div>

                  <hr className='mt-20' />

                  <div className='mt-20'>
                    <h1 className='text-xl font-bold'>Leave a Reply</h1>
                    <p className='mt-3 text-md text-[#777]'>Your email address will not be published. Required fields are marked *</p>

                    <form action="" className="mt-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" style={{boxshadow: "0 16px 24px rgba(189, 196, 205, .13)"}} placeholder="Enter Your Name" required className="border p-4 rounded-md" />
                        <input type="email" style={{boxshadow: "0 16px 24px rgba(189, 196, 205, .13)"}} placeholder="Enter Your Email" required className="border p-4 rounded-md" />
                        <input type="tel" style={{boxshadow: "0 16px 24px rgba(189, 196, 205, .13)"}} placeholder="Enter Your number" required className="border p-4 rounded-md" />
                        <input type="text" style={{boxshadow: "0 16px 24px rgba(189, 196, 205, .13)"}} placeholder="Enter Your Website" required className="border p-4 rounded-md" />
                      </div>
                      <textarea name="" id="" cols="30" rows="5" required placeholder="Type your comment" className="border p-4 rounded-md mt-6 w-full"></textarea>
                      <div className="mt-6">
                        <button className="post-comment bg-rose-600 pt-4 pb-4 ps-7 pe-7 text-sm  text-white font-semibold rounded-md">
                          Post Comment
                        </button>
                        
                      </div>
                    </form>
                  </div>


                </div>
              </div>


            </div>

            <div className='cols-span-2'>
              <div className='w-[350px] border-2 rounded-md pt-10 ps-5 pe-5 pb-5'>
                <span className='text-2xl font-bold'>Search</span>
                <div className='mt-5'>
                  <input type="text" placeholder='SEARCH POST' className='w-[300px] bg-stone-200 text-sm text-bold rounded-md ps-5 pe-5 pt-4 pb-4' /><i class="fa-solid fa-magnifying-glass relative bottom-10 left-64"></i>
                </div>
              </div>

              <div className='w-[350px] border-2 rounded-md pt-10 ps-5 pe-5 pb-5 mt-5'>
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

              <div className='w-[350px] border-2 rounded-md pt-10 ps-5 pe-5 pb-5 mt-5'>
                <span className='text-2xl font-bold'>Recent Post</span>

                <div className='mt-5'>
                  <div className='flex justify-between items-center font-semibold  text-sm w-[300px]'>
                    <div className='flex gap-5 items-center'>
                      <img src={Blog1} alt="" className='w-[100px] h-[100px]' />
                      <div className='block'>
                        <span className='text-gray-400 mb-3'>4 March. 2022</span><br />
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
                        <span className='text-gray-400 mb-3'>12 February. 2022</span><br />
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
                        <span className='text-gray-400 mb-3'>14 January. 2022</span><br />
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
                        <span className='text-gray-400 mb-3'>18 March. 2021</span><br />
                        <a href="#" className='hover:text-rose-600 text-base'>Research And Verify of a Quality Product</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-[350px] border-2 rounded-md pt-10 ps-5 pe-5 pb-5 mt-5'>
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
      </div>
    </div>
  )
}

export default Blog
