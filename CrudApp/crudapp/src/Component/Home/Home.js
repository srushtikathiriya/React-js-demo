import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);

  // Pagination
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  // searchbar
  const [searchTerm, setSearchTerm] = useState('');


  // Pagination handlers
  const handlePrevious = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleItemsPerPageChange = (e) => {
    const value = parseInt(e.target.value);
    setItemsPerPage(value);
    setPage(1);
  };

  // Search
  const filterData = data.filter(users =>
    users.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    users.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    users.age.toString().includes(searchTerm)
  );

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filterData.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = filterData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Load users
  const loadUser = async () => {
    const res = await axios.get('http://localhost:3001/users');
    console.log(res.data, "res");
    setData(res.data);
  };

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
            <div className="flex justify-end pe-3">
              <input
                className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 "
                type="text"
                placeholder="Serach"
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
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
                    {currentData.map((value, index) => (
                      <tr key={value.id} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex justify-center items-center">
                            <div>
                              <div className="text-sm text-gray-900">{indexOfFirstItem + index + 1}</div>
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

          {/* Pagination */}
          <div className="flex my-4 mx-4">
            <button onClick={handlePrevious} disabled={page === 1} className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 mr-2">Previous</button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button key={index + 1} onClick={() => handlePageClick(index + 1)} className={`inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 mr-2 ${page === index + 1 ? 'active-link' : ''}`}>{index + 1}</button>
            ))}
            <button onClick={handleNext} className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">Next</button>
            <select className='border border-gray-300 rounded-lg mx-2 text-center' onChange={handleItemsPerPageChange} value={itemsPerPage}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
}
