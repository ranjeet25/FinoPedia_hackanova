import React, { useState, useEffect } from 'react'
import MonthlyChart from './components/MontlyChart'
import RemainingBalance from './components/RemainingBalance'
function SpendDash() {
  const [decemberBalance, setDecemberBalance] = useState(null);
  const [maxSpendingCategory, setMaxSpendingCategory] = useState(null);
  const [maxSpendingAmount, setMaxSpendingAmount] = useState(null);
  const [totalPositiveAmount, setTotalPositiveAmount] = useState(null);

  useEffect(() => {
    async function fetchDecemberBalance() {
      try {
        const response = await fetch("https://mocki.io/v1/a66ae47a-2f2d-4ca0-aab5-1cc64ff091a9");
        const data = await response.json();
        
        // Assuming the API response is an object with a 'bankdetails' property
        // containing an array of months with their transactions
        const monthsData = data.bankdetails;
        
        // Find the data for December
        const decemberData = monthsData.find(month => month.month === "December");
        
        // Extract the remaining_balance for December
        const decemberBalance = decemberData.remaining_balance;
        
        // Setting the remaining_balance for December in the state
        setDecemberBalance(decemberBalance);

        // Calculating accumulated spending by category for the year
        const accumulatedSpendingByCategory = {};
        monthsData.forEach(month => {
          month.transactions.forEach(transaction => {
            // Exclude "Income" category
            if (transaction.category !== "Income") {
              if (!accumulatedSpendingByCategory[transaction.category]) {
                accumulatedSpendingByCategory[transaction.category] = 0;
              }
              accumulatedSpendingByCategory[transaction.category] += transaction.amount;
            }
          });
        });

        // Finding the category with the highest accumulated spending
        let maxSpending = 0;
        let maxCategory = null;
        for (const category in accumulatedSpendingByCategory) {
          if (accumulatedSpendingByCategory[category] > maxSpending) {
            maxSpending = accumulatedSpendingByCategory[category];
            maxCategory = category;
          }
        }

        // Setting the category with the highest accumulated spending in the state
        setMaxSpendingCategory(maxCategory);
        setMaxSpendingAmount(maxSpending);

        // Calculating the total amount of positive transactions for the entire year
        let totalPositive = 0;
        monthsData.forEach(month => {
          month.transactions.forEach(transaction => {
            if (transaction.amount > 0) {
              totalPositive += transaction.amount;
            }
          });
        });

        // Setting the total amount of positive transactions for the year in the state
        setTotalPositiveAmount(totalPositive);
      } catch (error) {
        console.error("Error fetching December balance:", error);
      }
    }

    fetchDecemberBalance();
  }, []);


  return (
  
    <div className=' w-4/5'>
      
      <div className='flex mb-10'>
        <div className='bg-white shadow-md border h-48 w-1/3 m-6 mb-4 mt-4 flex flex-col  justify-center items-center font-bold text-gray-800'>Balance Income <br></br> <span className='mt-6 mb-4 text-violet-600 text-6xl font-bold'>{decemberBalance}</span></div>
        <div className='bg-white shadow-md border h-48 w-1/3 m-6 mb-4 mt-4 flex flex-col  justify-center items-center font-bold text-gray-800'>Maximum Spend Category is <span className='text-red-500'>{maxSpendingCategory}</span> <span className='mt-2 mb-4 text-yellow-500 text-6xl font-bold'>{maxSpendingAmount}</span> </div>
        <div className='bg-white shadow-md border h-48 w-1/3 m-6 mb-4 mt-4 flex flex-col  justify-center items-center font-bold text-gray-800'>Balance Income <br></br> <span className='mt-6 mb-4 text-green-600 text-6xl font-bold'>{totalPositiveAmount}</span> <button className='p-1 px-4 bg-gray-200'>Invest now </button></div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-white border shadow-md h-80 mr-4 p-3 rounded-md flex justify-center items-center'><RemainingBalance /></div>
        
        <div className='bg-white border shadow-md mr-1 h-80  p-3 rounded-md' ><MonthlyChart /></div>
        
      </div>
    </div>
  )
}

export default SpendDash