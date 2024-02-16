import React, { useState } from 'react';
import './Taxation.css'; // Import CSS file for styling
const API_KEY = "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"; // secure -> environment variable

function Taxation() {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [legalResponse, setLegalResponse] = useState("");

  const callOpenAIAPI = async () => {
    const financialData = [
              {
                "month": "January",
                "transactions": [
                  { "date": "2024-01-01", "amount": 5000.00, "description": "To transfer at UPI/id 12345678", "payment_mode": "Credit Card", "balance_left": 5000.00, "category": "Housing" },
                  { "date": "2024-01-05", "amount": -3000.00, "description": "To transfer at UPI/id 23456789", "payment_mode": "Debit Card", "balance_left": 2000.00, "category": "Groceries" },
                  { "date": "2024-01-10", "amount": -2000.00, "description": "To transfer at UPI/id 34567890", "payment_mode": "UPI", "balance_left": 0.00, "category": "Utilities" },
                  { "date": "2024-01-15", "amount": 1500.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "Bank Transfer", "balance_left": 1500.00, "category": "Healthcare" },
                  { "date": "2024-01-20", "amount": -1000.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "Debit Card", "balance_left": 500.00, "category": "Transportation" },
                  { "date": "2024-01-25", "amount": -500.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "UPI", "balance_left": 0.00, "category": "Entertainment" },
                  { "date": "2024-01-28", "amount": 800.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Bank Transfer", "balance_left": 800.00, "category": "Income" },
                  { "date": "2024-01-30", "amount": 2000.00, "description": "To transfer at UPI/id 89012345", "payment_mode": "Bank Transfer", "balance_left": 2800.00, "category": "Income" },
                  { "date": "2024-01-31", "amount": -200.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "Cash", "balance_left": 2600.00, "category": "Miscellaneous" }
                  // Add more transactions for January as needed
                ],
                "remaining_balance": 2600.00
              },
              {
                "month": "February",
                "transactions": [
                  { "date": "2024-02-05", "amount": 7500.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "UPI", "balance_left": 10100.00, "category": "Dining Out" },
                  { "date": "2024-02-10", "amount": -2500.00, "description": "To transfer at UPI/id 12345678", "payment_mode": "Debit Card", "balance_left": 7600.00, "category": "Groceries" },
                  { "date": "2024-02-15", "amount": -3000.00, "description": "To transfer at UPI/id 23456789", "payment_mode": "UPI", "balance_left": 4600.00, "category": "Utilities" },
                  { "date": "2024-02-20", "amount": 1000.00, "description": "To transfer at UPI/id 34567890", "payment_mode": "Bank Transfer", "balance_left": 5600.00, "category": "Healthcare" },
                  { "date": "2024-02-25", "amount": -500.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "Cash", "balance_left": 5100.00, "category": "Personal Care" },
                  { "date": "2024-02-28", "amount": 3000.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "Bank Transfer", "balance_left": 8100.00, "category": "Income" },
                  { "date": "2024-02-29", "amount": -300.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "UPI", "balance_left": 7800.00, "category": "Miscellaneous" }
                  // Add more transactions for February as needed
                ],
                "remaining_balance": 7800.00
              },
              {
                "month": "March",
                "transactions": [
                  { "date": "2024-03-01", "amount": 6000.00, "description": "To transfer at UPI/id 34567890", "payment_mode": "Credit Card", "balance_left": 13800.00, "category": "Housing" },
                  { "date": "2024-03-05", "amount": -3500.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "Debit Card", "balance_left": 10300.00, "category": "Groceries" },
                  { "date": "2024-03-10", "amount": -1500.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "UPI", "balance_left": 8800.00, "category": "Utilities" },
                  { "date": "2024-03-15", "amount": -1000.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "Cash", "balance_left": 7800.00, "category": "Dining Out" },
                  { "date": "2024-03-20", "amount": -800.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Debit Card", "balance_left": 7000.00, "category": "Transportation" },
                  { "date": "2024-03-25", "amount": 500.00, "description": "To transfer at UPI/id 89012345", "payment_mode": "Bank Transfer", "balance_left": 7500.00, "category": "Entertainment" },
                  { "date": "2024-03-30", "amount": 800.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "Bank Transfer", "balance_left": 8300.00, "category": "Income" },
                  // Add more transactions for March as needed
                ],
                "remaining_balance": 8300.00
              },
              {
                "month": "April",
                "transactions": [
                  { "date": "2024-04-05", "amount": 4500.00, "description": "To transfer at UPI/id 23456789", "payment_mode": "UPI", "balance_left": 12800.00, "category": "Dining Out" },
                  { "date": "2024-04-10", "amount": -2200.00, "description": "To transfer at UPI/id 34567890", "payment_mode": "Debit Card", "balance_left": 10600.00, "category": "Groceries" },
                  { "date": "2024-04-15", "amount": -1800.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "UPI", "balance_left": 8800.00, "category": "Utilities" },
                  { "date": "2024-04-20", "amount": 1200.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "Bank Transfer", "balance_left": 10000.00, "category": "Healthcare" },
                  { "date": "2024-04-25", "amount": -700.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "Cash", "balance_left": 9300.00, "category": "Personal Care" },
                  { "date": "2024-04-30", "amount": 2000.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Bank Transfer", "balance_left": 11300.00, "category": "Income" },
                  // Add more transactions for April as needed
                ],
                "remaining_balance": 11300.00
              },
              {
                "month": "May",
                "transactions": [
                  { "date": "2024-05-05", "amount": 3500.00, "description": "To transfer at UPI/id 34567890", "payment_mode": "UPI", "balance_left": 14800.00, "category": "Dining Out" },
                  { "date": "2024-05-10", "amount": -1800.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "Debit Card", "balance_left": 13000.00, "category": "Groceries" },
                  { "date": "2024-05-15", "amount": -1200.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "UPI", "balance_left": 11800.00, "category": "Utilities" },
                  { "date": "2024-05-20", "amount": 900.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "Bank Transfer", "balance_left": 12700.00, "category": "Healthcare" },
                  { "date": "2024-05-25", "amount": -600.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Cash", "balance_left": 12100.00, "category": "Personal Care" },
                  { "date": "2024-05-30", "amount": 1500.00, "description": "To transfer at UPI/id 89012345", "payment_mode": "Bank Transfer", "balance_left": 13600.00, "category": "Income" },
                  { "date": "2024-05-31", "amount": -200.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "Cash", "balance_left": 13400.00, "category": "Miscellaneous" }
                  // Add more transactions for May as needed
                ],
                "remaining_balance": 13400.00
              },
              {
                "month": "June",
                "transactions": [
                  { "date": "2024-06-05", "amount": 6000.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "UPI", "balance_left": 19400.00, "category": "Dining Out" },
                  { "date": "2024-06-10", "amount": -3500.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "Debit Card", "balance_left": 15900.00, "category": "Groceries" },
                  { "date": "2024-06-15", "amount": -2500.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "UPI", "balance_left": 13400.00, "category": "Utilities" },
                  { "date": "2024-06-20", "amount": 1800.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Bank Transfer", "balance_left": 15200.00, "category": "Healthcare" },
                  { "date": "2024-06-25", "amount": -1200.00, "description": "To transfer at UPI/id 89012345", "payment_mode": "Cash", "balance_left": 14000.00, "category": "Personal Care" },
                  { "date": "2024-06-30", "amount": 2500.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "Bank Transfer", "balance_left": 16500.00, "category": "Income" }
                  // Add more transactions for June as needed
                ],
                "remaining_balance": 16500.00
              },
              {
                "month": "July",
                "transactions": [
                  { "date": "2024-07-05", "amount": -3700.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "UPI", "balance_left": 12800.00, "category": "Dining Out" },
                  { "date": "2024-07-10", "amount": -2500.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "Debit Card", "balance_left": 10300.00, "category": "Groceries" },
                  { "date": "2024-07-15", "amount": 1200.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Bank Transfer", "balance_left": 11500.00, "category": "Utilities" },
                  { "date": "2024-07-20", "amount": 1800.00, "description": "To transfer at UPI/id 89012345", "payment_mode": "UPI", "balance_left": 13300.00, "category": "Healthcare" },
                  { "date": "2024-07-25", "amount": -900.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "Cash", "balance_left": 12400.00, "category": "Personal Care" },
                  { "date": "2024-07-30", "amount": 3000.00, "description": "To transfer at UPI/id 12345678", "payment_mode": "Bank Transfer", "balance_left": 15400.00, "category": "Income" },
                  { "date": "2024-07-31", "amount": -200.00, "description": "To transfer at UPI/id 23456789", "payment_mode": "Cash", "balance_left": 15200.00, "category": "Miscellaneous" }
                  // Add more transactions for July as needed
                ],
                "remaining_balance": 15200.00
              }
            ];
      
            let dataaa = `
            Deductions/Allowances allowed to a salaried employee:
      
            Taxability of Allowances:
            Fully Taxable Allowances:
            - Dearness Allowance
            - Overtime Allowance
            - City Compensatory Allowance
            - Medical Allowance, Tiffin Allowance, and Servant Allowance
      
            Partially Taxable Allowances:
            - House Rent Allowance: Exempt up to the minimum of: HRA Actually Received, Actual house rent paid minus 10% of salary, 50% of salary (if in Delhi, Mumbai, Kolkata, or Chennai), otherwise 40% of salary
            - Children Education Allowance: Up to Rs. 100 per month per child for a maximum of 2 children
            - Hostel Allowance: Up to Rs. 300 per month per child for a maximum of 2 children
            - Office Duty Allowances: Exempt to the extent of minimum of actual allowance received or actual amount spent for the purpose of duties of employment.
      
            Deductions from Salary:
            - Standard Deduction: Rs. 50,000
            - Entertainment Allowance: Lower of: Actual amount of entertainment allowance received during the previous year, 20% of salary exclusive of any allowance, benefit, or other perquisites, Rs. 5,000
            - Professional tax: Actual amount paid during the year
            - Section 80C: Up to Rs. 1,50,000 (Aggregate limit for various investments and expenditures)
            - Section 80CCC: Up to Rs. 1,50,000
            - Section 80CCD: Up to Rs. 1,50,000 (Additional Rs. 50,000 for NPS)
            - Section 80D: Up to Rs. 50,000 (For health insurance premium of parents, if senior citizens)
            - Section 80DD: Up to Rs. 75,000 (Rs. 1,25,000 for severe disability)
            - Section 80DDB: Up to Rs. 40,000 (Rs. 1,00,000 for senior citizens)
            - Section 80E: Amount of interest paid on loan for higher education during the initial year and 7 immediately succeeding assessment years
            - Section 80EE: Up to Rs. 50,000 towards interest on loan for residential house property
            - Section 80EEA: Up to Rs. 1,50,000 towards interest on loan for residential house property
            - Section 80EEB: Up to Rs. 1,50,000 towards interest on loan for electric vehicle
            - Section 80G: 50% to 100% of donation made
            - Section 80GG: Minimum of: Rent paid in excess of 10% of total income, 25% of the Total Income, Rs. 5,000 per month
            - Section 80GGA: 100% of the donation made
            - Section 80GGC: 100% of the donation made
            - Section 80TTA: Up to Rs. 10,000 (Interest on deposits in saving account)
            - Section 80TTB: Up to Rs. 50,000 (Interest on deposits with specified institutions)
            - Section 80U: Up to Rs. 75,000 (Rs. 1,25,000 for severe disability)
            `;
    const APIBody = {
      "model": "gpt-3.5-turbo-instruct",
      "prompt": `Act as an Indian Financial Advisor analyze given data ${JSON.stringify(financialData)} and ${dataaa} give me info about in which section i lies according to my half annual income and don't give extra content and tell me where should i invest so that my tax should low in point wise`,
      "temperature": 0,
      "max_tokens": 250,
      "top_p": 1.0,
      "frequency_penalty": 0.0,
      "presence_penalty": 0.0
    };

    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(APIBody)
      });

      const data = await response.json();
      const responseText = data.choices[0].text.trim();

      // Update chat history
      setChatHistory([...chatHistory, { question: query, answer: responseText }]);

      // Update current question and answer
      setQuery("");
      setLegalResponse(responseText);

      // Set button clicked to true
      setButtonClicked(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className='w-4/5 ' >
      
        <div className='chathistory bg-white h-screen w-4/4 p-2 overflow-y-scroll h-screen'>
          {!buttonClicked && (
            <div className="flex justify-center items-center h-screen">
            <button
              className="w-[40%] inline-block rounded-lg bg-violet-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-violet-300 transition duration-100 hover:bg-violet-600 focus-visible:ring active:bg-gray-700 md:text-base"
              onClick={callOpenAIAPI}
            >
              Get The Taxation Response From Finopedia
            </button>
            </div>
          )}
          {chatHistory.length > 0 && (
            <div className=" rounded-md ">
              {/* Render chat history */}
              {chatHistory.map((chat, index) => (
                <div key={index} className=" ">
                  <div>
                    <p className="text-sm mt-2"> <span className='font-bold bg-gray-500 px-3 py-1 text-white'>Your Query</span> </p>
                    <p className='text-sm p-2 bg-gray-100 text-gray-900'>{` ${chat.question}`}</p>
                  </div>
                  <div>
                    <p className="text-sm mt-2"> <span className='font-bold bg-violet-500 px-3 py-1 text-white'>FinoPedia Taxations Based on New Taxation Rules(2024-2025)</span> </p>
                    <p className='text-sm p-2 bg-violet-100 text-violet-900'>{` ${chat.answer}`}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      
    </div>
  );
}

export default Taxation;