import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);


  // first way

  const loadUser = async() =>{
      const res = await axios.get('http://localhost:3001/users')
      console.log(res.data,"res");
      setData(res.data);
  }


  // second way

  // const loadUser = () => {
  //   axios.get('http://localhost:3001/users')
  //     .then((response) => {
  //       setData(response.data,"Response");
  //     })
  //     .catch((err) => {
  //       console.log(err,'eeeeeeeeeee');
  //     });
  // };

  useEffect(() => {
    loadUser();
  }, []);

  const onDelete = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`)
      .then((res) => {
        loadUser();
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  };

  return (
    <>
      <section className="w-full">
        <div className="mt-6 flex flex-col">
          <div className="overflow-x-auto">
            <div className='px-8'>
              <button
                type="button"
                className="rounded-md float-end bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <Link to="/create">        
                  Add new Student
                </Link>
              </button>
            </div>
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr className="divide-x divide-gray-200">
                      <th scope="col" className="text-sm">Id</th>
                      <th scope="col" className="text-sm"><span>First Name</span></th>
                      <th scope="col" className="text-sm">Last Name</th>
                      <th scope="col" className="text-sm">Age</th>
                      <th scope="col" className="text-sm">City</th>
                      <th scope="col" className="text-sm"><span>Edit</span></th>
                      <th scope="col" className="text-sm py-3.5"><span>Delete</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((value,index) => (
                      <tr key={value.id} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="text-sm text-gray-900">{index + 1}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex justify-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{value.firstname}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900">{value.lastname}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">{value.age}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-gray-900">{value.city}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-900">
                          <Link to={`/edit/${value.id}`}>
                            <button className='border ps-5 pe-5 pt-1 pb-1 rounded-md bg-green-600 font-semibold'>Edit</button>
                          </Link>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-900">
                          <button className='border ps-3 pe-3 pt-1 pb-1 rounded-md bg-red-600 font-semibold' onClick={() => onDelete(value.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
