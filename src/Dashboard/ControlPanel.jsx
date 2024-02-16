import React from 'react'
import { Link } from 'react-router-dom';
// ******** Depricated *********
function ControlPanel() {
  return (
    <div className="w-1/5 bg-gray-700 h-screen p-2">
      <div className="text-gray-100 text-xl ">
        <div className="p-2.5 mt-1 flex items-center">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-green-600" />
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">
            Finopedia
          </h1>
        </div>
        <div className="my-2 bg-gray-400 h-[1px]" />
        <div className=" grid grid-cols-2 gap-1 p-4 w-full h-26 bg-gray-100 rounded-md ">
          <span className="text-[15px] ml-4 text-gray-700 font-bold">Customer ID</span>
          <span className=" font-bold ml-1 text-[12px] bg-gray-500 px-4 py-1 rounded-full text-slate-100">
            1020125463
          </span>
         
        </div>
      </div>

      <div className="p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-red-400 text-black">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Profile
        </span>
      </div>
      <button className=" w-full p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-green-600 text-black">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Spend Analysis
        </span>
      </button>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-red-400 text-black">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Investment advisory
        </span>
      </div>
      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-green-500 text-black">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Talk with AI
        </span>
      </div>

      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-green-500 text-black">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Taxation
        </span>
      </div>

      <Link to="/">
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-500 hover:bg-red-400 text-black">
          <i className="bi bi-box-arrow-in-right" />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </Link>
    </div>
  );
} 

export default ControlPanel