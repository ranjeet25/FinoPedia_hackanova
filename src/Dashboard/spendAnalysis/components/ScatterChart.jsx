import React, { useState, useEffect } from "react";

function ScatterChart() {
  const [decemberBalance, setDecemberBalance] = useState(null);

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
      } catch (error) {
        console.error("Error fetching December balance:", error);
      }
    }

    fetchDecemberBalance();
  }, []);

  return (
    <div style={{ width: 500 }}>
      <h2>Remaining Balance for December: {decemberBalance}</h2>
    </div>
  );
}

export default ScatterChart;
