import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function TableOne() {
  const [data, setData] = useState([]);

  const loadUsers = async() =>{
       axios.get("http://localhost:3001/users")
      .then((response) =>{
        setData(response.data)
        console.log("response: " , response.data);
      })
      .catch((err) => console.log("error: " , err))
  }
  useEffect(() =>{
    loadUsers();
  })
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new employee
            </button>
          </div>
        </div>
        <div className="mt-6 flex   flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm text-center font-normal text-gray-700"
                      >
                        Id
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm text-center font-normal text-gray-700"
                      >
                        FirstName
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm text-center font-normal text-gray-700"
                      >
                        LastName
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm text-center font-normal text-gray-700"
                      >
                        Age
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span>Edit</span>
                      </th>
                      <th scope="col" className="relative px-4 py-3.5">
                        <span>Delete</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.map((person, index) => (
                      <tr key={person.id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex  items-center">
                            <div className="ml-4">
                              <div className="text-sm text-center font-medium text-gray-900">{index + 1}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex text-center items-center">
                            <div className="ml-4">
                              <div className="text-sm text-center font-medium text-gray-900">{person.fname}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-center text-gray-700">{person.lname}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                        <div className="text-sm text-center text-gray-700">{person.age}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          <button>Edit</button>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                          <button>
                            Delete
                          </button>
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
  )
}
