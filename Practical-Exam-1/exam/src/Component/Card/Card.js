import React from 'react'
// import "../Card/Card.css"

function Card({ id, name, age, img, Img }) {
  return (
    <div>
      <div className="mt-5 bg-blue-200 border rounded-xl relative overflow-hidden">

        <div className="group">
          <div className="image-content ">
            <span className="overlay"></span>
            <div className="card-image group-hover:scale-110 transition-transform duration-300">
              <img src={img} alt="" class="card-img" className='h-[200px] w-[300px] m-auto block rounded-b-none rounded-s-none ' />
            </div>
            <div className='relative'>
              <img src={Img} alt="" className='h-[100px] w-[100px] absolute top-[-60px] left-[100px] rounded-full border-4 border-white' />
            </div>
          </div>
          <div className="mt-12 pb-5 text-start ps-5">
            <p className="mt-3 text-black  font-bold  text-sm ">{id}</p>
            <div className="uppercase  text-xl text-black  font-bold ">{name}</div>
            <p className="text-xl text-black">{age}</p>
            <button className='rounded-md ps-3 pe-3 pb-2 pt-1 text-sm bg-blue-800 text-white'>View More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
