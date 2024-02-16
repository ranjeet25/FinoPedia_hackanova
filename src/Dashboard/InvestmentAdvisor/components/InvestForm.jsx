import React from 'react'
import { useState, useEffect } from "react";

function InvestForm() {

  const [investingResult, setInvestingResult] = useState(false);

  const [formData, setFormData] = useState({
    age: '',
    sector: '',
    investingExperience: '',
    riskTolerance: '',
    locationType: '',
    expertise: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });

    console.log(formData);
};

const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/getvalues', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle success response from the server
        console.log(data);
    })
    .catch(error => {
        // Handle error
        console.error('There was a problem with your fetch operation:', error);
    }); 
};

  return (
    <div className='flex'>
        <div className=" shadow-md h-screen border ml-4 px-6  sm:py-4">
   
    <div className="mx-auto max-w-2xl text-center">

    </div>
    <form onSubmit={handleSubmit} className="mx-auto mt-2 max-w-xl sm:mt-2">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2 w-80">
                    <label htmlFor="age" className="block text-sm font-semibold leading-6 text-black">Age Bracket</label>
                    <div className="mt-2.5">
                        <select name="age" id="age" value={formData.age} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                            <option value="18-24">18-24</option>
                            <option value="25-30">25-30</option>
                            <option value="31-40">31-40</option>
                            <option value="40-50">40-50</option>
                            <option value="50+">50+</option>
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-2 w-80">
                    <label htmlFor="sector" className="block text-sm font-semibold leading-6 text-black">Professional Sector</label>
                    <div className="mt-2.5">
                        <select name="sector" id="sector" value={formData.sector} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                            <option value="Agriculture">Agriculture</option>
                            <option value="Service">Service</option>
                            <option value="Business">Business</option>
                            <option value="RealEstate">Real Estate</option>
                            <option value="Varied">Varied</option>
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-2 w-80">
                    <label htmlFor="investingExperience" className="block text-sm font-semibold leading-6 text-black">Have Investing Experience?</label>
                    <div className="mt-2.5">
                        <select name="investingExperience" id="investingExperience" value={formData.investingExperience} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-2 w-80">
                    <label htmlFor="riskTolerance" className="block text-sm font-semibold leading-6 text-black">Risk Tolerance</label>
                    <div className="mt-2.5">
                        <select name="riskTolerance" id="riskTolerance" value={formData.riskTolerance} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High (risky)</option>
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-2 w-80">
                    <label htmlFor="locationType" className="block text-sm font-semibold leading-6 text-black">Location Type</label>
                    <div className="mt-2.5">
                        <select name="locationType" id="locationType" value={formData.locationType} onChange={handleChange} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6">
                            <option value="Rural">Rural</option>
                            <option value="Urban">Urban</option>
                            <option value="Metropolitan">Metropolitan</option>
                            <option value="village">Village</option>  
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-2 w-80">
                    <label htmlFor="expertise" className="block text-sm font-semibold leading-6 text-black">Area of Expertise</label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="expertise"
                            id="expertise"
                            value={formData.expertise}
                            onChange={handleChange}
                            autoComplete="organization"
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-gray-500 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
            <div className="mt-10">
                {/* Add any additional elements here */}
                <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit Details</button>
            </div>
        </form>

    {/* <button  onClick={() =>{ setInvestingResult(true)}} className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Get Investment Plans
        </button> */}
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