import React from 'react'
import { useState, useEffect } from "react";

function InvestForm() {

    const [investingResult, setInvestingResult] = useState(false);

  return (
    <div className='flex'>
        <div className=" shadow-md h-screen border ml-4 px-6  sm:py-4">
   
    <div className="mx-auto max-w-2xl text-center">

    </div>
    <form action="#" method="POST" className="mx-auto mt-2 max-w-xl sm:mt-2">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
       
        
        <div className="sm:col-span-2 w-80">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Age Bracket
          </label>
          <div className="mt-2.5">
            <select name="age" id="age" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                <option value="18-24">18-24</option>
                <option value="25-30">25-30</option>
                <option value="31-40">31-40</option>
                <option value="40-50">40-50</option>
                <option value="50+">50+</option>
            </select>
          </div>
        </div>


        <div className="sm:col-span-2 w-80">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Proffesional Sector
          </label>
          <div className="mt-2.5">
            <select name="age" id="age" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                <option value="18-24">Agriculture</option>
                <option value="25-30">Service</option>
                <option value="31-40">Business</option>
                <option value="40-50">Real State</option>
                <option value="50+">Others</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-2 w-80">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Have Investing Experience ?
          </label>
          <div className="mt-2.5">
            <select name="age" id="age" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                <option value="tier_1">Yes</option>
                <option value="tier_2">No</option>
              
            </select>
          </div>
        </div>

        <div className="sm:col-span-2 w-80">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Risk Tolerance
          </label>
          <div className="mt-2.5">
            <select name="age" id="age" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                <option value="tier_1">Low</option>
                <option value="tier_2">Medium</option>
                <option value="tier_2">High(risky)</option>
              
            </select>
          </div>
        </div>

        <div className="sm:col-span-2 w-80">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-black"
          >
            location type
          </label>
          <div className="mt-2.5">
            <select name="age" id="age" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                <option value="tier_1">Tier 1 city</option>
                <option value="tier_2">Tier 2 city</option>
                <option value="town">Town</option>
                <option value="village">Village</option>
            </select>
          </div>
        </div>

        <div className="sm:col-span-2 w-80">
          <label
            htmlFor="company"
            className="block text-sm font-semibold leading-6 text-black"
          >
            Area of Expertise
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="Expertise"
              id="Expertise"
              autoComplete="organization"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        
 
       
       
        <div className="flex gap-x-4 sm:col-span-2">
          
        </div>
      </div>
      <div className="mt-10">

      </div>
    </form>

    <button  onClick={() =>{ setInvestingResult(true)}} className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Get Investment Plans
        </button>
  </div>

  {investingResult && (
    
  <div className='p-5 shadow-md h-48 m-5'>

    <h2 className='font-bold'>Result Based on you Inputs</h2>
    <p>1. Mutual Fund SIP</p>
    <p>2. Gold Investemnt</p>
    <p>3. Rent Income</p>

  </div>


  )}


  </div>
  )
}

export default InvestForm