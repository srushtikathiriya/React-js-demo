// import React from 'react'
// import "../Contact/Contact.css"

// function Contact() {
//   return (
//     <div>
//       <div className='container-5'>
//         <div className='grid lg:grid md:grid-cols-1'>
//           <div className='flex gap-10'>
//             <div className='lg:w-[40%] sm:w-[100%]'>
//               <div className='border ps-10 pt-10 pb-10 pe-16 rounded-md '>
//                 <h1 className='text-2xl font-bold'>Get In Touch</h1>
//                 <div>
//                   <address className='text-stone-500 mt-5'><i class="fa-solid fa-location-dot pe-2"></i> <span className='hover:text-rose-600 text-stone-500'>24/26 Strait Bargate, Boston, <span className='ps-5 '>PE21, United Kingdom</span></span>  <br />
//                   </address>
//                 </div>
//                 <div className='text-stone-500 mt-3'>
//                   <i class="fa-solid fa-phone-flip"></i>
//                   <a href="tel:+098 (905) 786 897 8" className='ps-2'>+098 (905) 786 897 8</a><br />
//                   <a href="tel:6 - 146 - 389 - 5748" className='ps-6'>6 - 146 - 389 - 5748</a>
//                 </div>
//                 <div className='text-stone-500 flex mt-3'>
//                   <i class="fa-regular fa-clock pt-1"></i>
//                   <h1 className='ps-3'>Store Hours:<br />
//                     10 am - 10 pm EST, 7 days a week</h1>
//                 </div>
//               </div>
//               <button className='border ps-16 pt-5 pb-5 pe-16 rounded-md mt-10  hover:bg-rose-600 hover:text-white font-bold w-full lg:w-full'>
//                 Get Support On Call<i class="fa-solid fa-headphones ps-3 hover:text-white"></i>
//               </button>
//               <button className='border ps-16 pt-5 pb-5 pe-16 rounded-md mt-10 w-full lg:w-full  hover:bg-rose-600 hover:text-white font-bold'>
//                 Get Direction<i class="fa-solid fa-location-dot pe-2 hover:text-white ps-3"></i>
//               </button>
//             </div>

//             <div className=''>
//               <div>
//                 <h1 className='font-bold text-2xl'>Make Custom Request</h1>
//                 <h6 className='text-sm mt-2 text-stone-500'>Must-have pieces selected every month want style Ideas and Treats?</h6>

//                 <form action="" className='mt-16'>
//                   <div className='gap-10 flex md:flex-wrap'>
//                     <input type="text" placeholder='Full name' required className='border w-[350px] ps-5 pt-5 pb-5 rounded-md  lg:w-[50%] md:w-[100%]' />
//                     <input type="email" placeholder='Email address' required className='border w-[350px] ps-5 pt-5 pb-5 rounded-md lg:w-[50%] md:w-[100%]' />
//                   </div>

//                   <div className='gap-10 flex flex-wrap mt-5'>
//                     <input type="number" placeholder='Phone number' required className='border w-[350px] ps-5 pt-5 pb-5 rounded-md md:w-[100%]' />
//                     <input type="text" placeholder='Subject' required className='border w-[350px] ps-5 pt-5 pb-5 rounded-md md:w-[100%]' />
//                   </div>

//                   <div className='mt-5'>
//                     <textarea name="" id="" cols="30" rows="10" required placeholder='Enter message' className='border w-[740px]'></textarea>
//                   </div>

//                   <div className='mt-10 '>
//                     <button className='bg-rose-600 ps-6 pe-6 pt-3 pb-3 text-white font-semibold rounded-md'>Get A Quote <i class="fa-solid fa-arrow-right ps-2"></i></button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//             <div className='mt-10 md:w-[100%]'>
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30768381.89440162!2d60.90089334437959!3d19.716626063286764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1714448031098!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//             </div>
//       </div>
//     </div>
//   )
// }

// export default Contact


import React from 'react';
import '../Contact/Contact.css';

function Contact() {
  return (
    <div className="container-5">
      <div className="lg:grid lg:grid-cols-3 gap-10">
        <div>
        <div className="border p-8 rounded-md">
          <h1 className="text-2xl font-bold">Get In Touch</h1>
          <address className="text-stone-500 mt-5">
            <i className="fa-solid fa-location-dot pe-2"></i>
            <span className="hover:text-rose-600">
              24/26 Strait Bargate, Boston, <br/><span className="ps-5">PE21, United Kingdom</span>
            </span>
            <br />
          </address>
          <div className="text-stone-500 mt-3">
            <i className="fa-solid fa-phone-flip"></i>
            <a href="tel:+098 (905) 786 897 8" className="ps-2">+098 (905) 786 897 8</a><br />
            <a href="tel:6 - 146 - 389 - 5748" className="ps-6">6 - 146 - 389 - 5748</a>
          </div>
          <div className="text-stone-500 flex mt-3">
            <i className="fa-regular fa-clock pt-1"></i>
            <h1 className="ps-3">Store Hours:<br />
              10 am - 10 pm EST, 7 days a week</h1>
          </div>
        </div>
          <button className="border p-4 rounded-md mt-8 w-full hover:bg-rose-600 hover:text-white font-bold">
            Get Support On Call<i className="fa-solid fa-headphones ps-3 hover:text-white"></i>
          </button>
          <button className="border p-4 rounded-md mt-4 w-full hover:bg-rose-600 hover:text-white font-bold">
            Get Direction<i className="fa-solid fa-location-dot pe-2 hover:text-white ps-3"></i>
          </button>
          </div>
        <div className='col-span-2'>
          <h1 className="font-bold text-2xl">Make Custom Request</h1>
          <h6 className="text-sm mt-2 text-stone-500">Must-have pieces selected every month want style Ideas and Treats?</h6>
          <form action="" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full name" required className="border p-4 rounded-md" />
              <input type="email" placeholder="Email address" required className="border p-4 rounded-md" />
              <input type="tel" placeholder="Phone number" required className="border p-4 rounded-md" />
              <input type="text" placeholder="Subject" required className="border p-4 rounded-md" />
            </div>
            <textarea name="" id="" cols="30" rows="5" required placeholder="Enter message" className="border p-4 rounded-md mt-6 w-full"></textarea>
            <div className="mt-6">
              <button className="bg-rose-600 p-4  text-white font-semibold rounded-md w-40">
                Get A Quote <i className="fa-solid fa-arrow-right ps-2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-10">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30768381.89440162!2d60.90089334437959!3d19.716626063286764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1714448031098!5m2!1sen!2sin" width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
}

export default Contact;

