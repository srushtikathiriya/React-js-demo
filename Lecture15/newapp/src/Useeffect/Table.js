import React,{useState} from 'react'
import Data from "./TableData";

const Table = () => {
  const[data,setData]=useState(Data);
  console.log(data,"TableData");
  return (
    <div className="flex justify-center">
    <table className="table-auto w-[80%] border-separate rounded-lg border-2 border-blue-600">
      <caption className='font-bold text-3xl text-red-500 pb-5'>This Is Table Layout</caption>
      <thead className='bg-sky-200 text-blue-500 '>
        <tr className='text-3xl'>
          <th className="border-2 border-blue-600 px-4 pt-3 pb-3 py-2">Id</th>
          <th className="border-2 border-blue-600 px-4 py-2">Name</th>
          <th className="border-2 border-blue-600 px-4 py-2">Email</th>
          <th className="border-2 border-blue-600 px-4 py-2">City</th>
          <th className="border-2 border-blue-600 px-4 py-2">Phone</th>
        </tr>
      </thead>
      <tbody className='text-center font-semibold'>
        {data.map((cvalue,ind)=>{
          return(<>     
          <tr key={ind} className='bg-sky-300 hover:bg-slate-300'>
          <td className="border-2 border-blue-600 px-4 pt-6 pb-6 py-2">{cvalue.id}</td>
          <td className="border-2 border-blue-600 px-4 py-2">{cvalue.name}</td>
          <td className="border-2 border-blue-600 px-4 py-2">{cvalue.email}</td>
          <td className="border-2 border-blue-600 px-4 py-2">{cvalue.city}</td>
          <td className="border-2 border-blue-600 px-4 py-2">{cvalue.phone}</td>
        </tr>
          </>)
        })}
        {/* <tr className='bg-sky-400 hover:bg-slate-300'>
          <td className="border-2 border-blue-600 px-4 pt-6 pb-6 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
        </tr>
        <tr className='bg-sky-300 hover:bg-slate-300'>
          <td className="border-2 border-blue-600 px-4 pt-6 pb-6 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
        </tr>
        <tr className='bg-sky-400 hover:bg-slate-300'>
          <td className="border-2 border-blue-600 px-4 pt-6 pb-6 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
        </tr>
        <tr className='bg-sky-300 hover:bg-slate-300'>
          <td className="border-2 border-blue-600 px-4 pt-6 pb-6  py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
          <td className="border-2 border-blue-600 px-4 py-2"></td>
        </tr> */}
      </tbody>
    </table>
  </div>
  )
}
export default Table;