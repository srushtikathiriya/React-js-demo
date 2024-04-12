import React from 'react';
import Props from "../Props/Props.css";


export default function Cardprops(props) {
  return (<>
    <div className=" w-[320px] h-[440px] mt-10 bg-white rounded-xl shadow-2xl shadow-slate-500 ">
      <div>
        <div class="image-content">
          <span class="overlay"></span>
          <div class="card-image">
            <img src={props.img} alt="" class="card-img" />
          </div>
        </div>
        <div className="p-6 text-center">
          <div className="uppercase tracking-wide text-xl text-indigo-500 cursor-pointer hover:text-red-500 font-bold ">{props.name}</div>
          <p className="mt-1 text-black opacity-70 font-bold  text-xl cursor-pointer hover:underline">{props.course}</p>
          <p className="mt-1 text-slate-500">{props.descr}</p>
          <button className="border rounded-lg text-center ps-8 pt-2 pb-2 pe-8 bg-blue-600 text-white mt-3 hover:bg-blue-500">{props.button}</button>
        </div>
      </div>
    </div>
  </>
  )
}