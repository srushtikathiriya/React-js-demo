import React,{useState} from 'react';
import '../Second-part/Secpart.css';
import { Link } from 'react-router-dom';
import ProductData from '../Second-part/Data';
import {useDispatch} from "react-redux";
import {ADD} from "../../Redux/Action/Action"
import Productdetails from '../../Pages/Productdetails/Productdetails';

function Secpart() {
    const dispatch = useDispatch();
    const send = (e)=>{
        console.log(e,"eeeee");
        dispatch(ADD(e));
    }
    const [addedProducts, setAddedProducts] = useState([]);

  const handleClick = (product) => {
    if (addedProducts.includes(product)) {
      alert('This product is already added!');
    } else {
      // Add the product to the list of added products
      setAddedProducts([...addedProducts, product]);
      // Add your logic to handle adding the product here
    }
  };

    return (
        <div className="container2 bg-stone-50">
            <div className="flex flex-wrap justify-between">
                <div className="title-shape">
                    <h1 className="font-bold text-2xl">
                        Popular
                        <span className="font-normal text-2xl text-rose-600">Products</span>
                    </h1>
                </div>
                <div className="flex items-center">
                    <ul className="flex sm:flex-wrap gap-10">
                        <li className="text-rose-600 underline font-bold">
                            <a href="#">All</a>
                        </li>
                        <li className="font-bold">
                            <a href="#">Popular</a>
                        </li>
                        <li className="font-bold">
                            <a href="#">On Sale</a>
                        </li>
                        <li className="font-bold">
                            <a href="#">Best Rated</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white mt-5">
                {ProductData.map((product, index) => (
                    <div key={index} className="button">
                        <div className="burdges relative block">
                        <Link to={`/productdetails/${product.id}`} >
                                <img src={product.FirstImg} alt="Image-1" />
                                <img className="Burges" src={product.SecondeImg} alt="" />
                        </Link>
                            <div className="icon">
                                <a href="#">
                                    <button onClick={()=>send(Productdetails)}><i className="fa-solid fa-basket-shopping"></i></button>
                                </a>
                                <a href="#">
                                    <button><span className="material-symbols-outlined">sync_alt</span></button>
                                </a>
                                <a href="#">
                                   <button><span className="material-symbols-outlined">visibility</span></button> 
                                </a>
                                <a href="#">
                                    <button><span className="material-symbols-outlined">favorite</span></button>
                                </a>
                            </div>
                        <h6 className="pb-2 pt-2 text-slate-400 hover:text-rose-600 cursor-pointer">
                            {product.name}
                        </h6>
                        <h2 className="font-bold">{product.price}</h2>
                        <div className="btn mt-6 mb-6">
                            <div className="flex  items-center">
                                <div className='flex gap-[2px]'>
                                    <button className='rounded-full h-[10px] w-[10px] bg-sky-500'></button>
                                    <button className='rounded-full h-[10px] w-[10px] bg-rose-500'></button>
                                    <button className='rounded-full h-[10px] w-[10px] bg-orange-500'></button>
                                    <button className='rounded-full h-[10px] w-[10px] bg-indigo-500'></button>
                                </div>
                                <div className='flex items-center'>
                                    <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                    <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                    <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                    <button><i class="fa-solid fa-star text-xs text-rose-600"></i></button>
                                    <button><i class="fa-regular fa-star text-xs text-rose-600"></i></button>
                                    <span className='text-xs'>(81)</span>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Secpart;
