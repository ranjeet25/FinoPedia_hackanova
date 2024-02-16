import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ControlPanel from './ControlPanel'
import SpendDash from './spendAnalysis/SpendDash'
import GenAI from './GenAI/GenAI';
import Offers from './Offers/Offers';
import InvestForm from './InvestmentAdvisor/components/InvestForm';
import Taxation from './Taxation/Taxation';

function Dashboard() {

  const [spendAnalysis, setSpendAnalysis] = useState(true);
  const [GPTai, setGPTai] = useState(false);
  const [offers, setoffers] = useState(false);
  const [Investment, setInvestment] = useState(false);
  const [taxation, setTaxation] = useState(false);

  return (

    <div className='flex'>

<div className="w-1/5 bg-gray-700 h-screen p-2">
      <div className="text-gray-100 text-xl ">
        <div className="p-2.5 mt-1 flex items-center">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-green-600" />
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">
            Finopedia
          </h1>
        </div>
        <div className="my-2 bg-gray-400 h-[1px]" />
        <div className=" p-2 w-full h-26 bg-gray-100 rounded-md ">
          <span className="text-[15px] ml-1 text-gray-700 font-bold">Customer ID :</span>
          <span className=" font-bold text-xs text-green-500 text-[12px]  px-1 py-1 rounded-full ">
          {sessionStorage.getItem("validUserEmail")}
          </span>
         
        </div>
      </div>

      <div className="p-2.5 mt-8 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-gray-400 text-black">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Profile
        </span>
      </div>
      <button onClick={() =>{ setSpendAnalysis(true); setGPTai(false); setoffers(false);setInvestment(false);setTaxation(false)}} className=" w-full p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-green-600 text-black">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Spend Analysis
        </span>
      </button>
      
      <div onClick={() =>{ setSpendAnalysis(false); setGPTai(true);setoffers(false);setInvestment(false);setTaxation(false)}} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-green-500 text-black">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Talk with AI
        </span>
      </div>

      <div onClick={() =>{ setSpendAnalysis(false); setGPTai(false);setoffers(false);setInvestment(true);setTaxation(false)}} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-gray-400 text-black">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Investment advisory
        </span>
      </div>

      <div onClick={() =>{ setSpendAnalysis(false); setGPTai(false);setoffers(false);setInvestment(false);setTaxation(true)}} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-gray-400 text-black">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Taxation
        </span>
      </div>

      <div onClick={() =>{ setSpendAnalysis(false); setGPTai(false);setoffers(true);setInvestment(false);setTaxation(false)}} className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 hover:bg-gray-400 text-black">
        <span className="text-[15px] ml-4 text-gray-200 font-bold">
          Recommended offers
        </span>
      </div>

      <Link to="/">
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-500 hover:bg-gray-400 text-black">
          <i className="bi bi-box-arrow-in-right" />
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </Link>
    </div>
        {spendAnalysis && ( <SpendDash></SpendDash>)}
        {GPTai && <GenAI></GenAI>}
        {offers && <Offers></Offers>}
        {Investment && <InvestForm></InvestForm>}
        {taxation &&  <Taxation></Taxation>}
       
    </div>
    
  )
}

export default Dashboard