import React, { useState } from 'react';

const API_KEY = "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"; // secure -> environment variable


function GenAI() {
  {
    const [query, setQuery] = useState("");
    const [chatHistory, setChatHistory] = useState([]); // Store chat history as an array of objects
  
    const callOpenAIAPI = async () => {
      const financialData = [
                {
                  "month": "January",
                  "transactions": [
                    {"date": "2024-01-01", "amount": 5000.00, "description": "To transfer at UPI/id 12345678", "payment_mode": "Credit Card", "balance_left": 5000.00, "category": "Housing"},
                    {"date": "2024-01-05", "amount": -3000.00, "description": "To transfer at UPI/id 23456789", "payment_mode": "Debit Card", "balance_left": 2000.00, "category": "Groceries"},
                    {"date": "2024-01-10", "amount": -2000.00,   "description": "To transfer at UPI/id 34567890", "payment_mode": "UPI", "balance_left": 0.00, "category": "Utilities"},
                    {"date": "2024-01-15", "amount": 1500.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "Bank Transfer", "balance_left": 1500.00, "category": "Healthcare"},
                    {"date": "2024-01-20", "amount": -1000.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "Debit Card", "balance_left": 500.00, "category": "Transportation"},
                    {"date": "2024-01-25", "amount": -500.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "UPI", "balance_left": 0.00, "category": "Entertainment"},
                    {"date": "2024-01-28", "amount": 800.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Bank Transfer", "balance_left": 800.00, "category": "Income"},
                    {"date": "2024-01-30", "amount": 2000.00, "description": "To transfer at UPI/id 89012345", "payment_mode": "Bank Transfer", "balance_left": 2800.00, "category": "Income"},
                    {"date": "2024-01-31", "amount": -200.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "Cash", "balance_left": 2600.00, "category": "Miscellaneous"}
                    // Add more transactions for January as needed
                  ],
                  "remaining_balance": 2600.00
                },
                {
                  "month": "February",
                  "transactions": [
                    {"date": "2024-02-05", "amount": 7500.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "UPI", "balance_left": 10100.00, "category": "Dining Out"},
                    {"date": "2024-02-10", "amount": -2500.00, "description": "To transfer at UPI/id 12345678", "payment_mode": "Debit Card", "balance_left": 7600.00, "category": "Groceries"},
                    {"date": "2024-02-15", "amount": -3000.00, "description": "To transfer at UPI/id 23456789", "payment_mode": "UPI", "balance_left": 4600.00, "category": "Utilities"},
                    {"date": "2024-02-20", "amount": 1000.00, "description": "To transfer at UPI/id 34567890", "payment_mode": "Bank Transfer", "balance_left": 5600.00, "category": "Healthcare"},
                    {"date": "2024-02-25", "amount": -500.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "Cash", "balance_left": 5100.00, "category": "Personal Care"},
                    {"date": "2024-02-28", "amount": 3000.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "Bank Transfer", "balance_left": 8100.00, "category": "Income"},
                    {"date": "2024-02-29", "amount": -300.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "UPI", "balance_left": 7800.00, "category": "Miscellaneous"}
                    // Add more transactions for February as needed
                  ],
                  "remaining_balance": 7800.00
                },
                {
                  "month": "March",
                  "transactions": [
                    {"date": "2024-03-01", "amount": 6000.00, "description": "To transfer at UPI/id 34567890", "payment_mode": "Credit Card", "balance_left": 13800.00, "category": "Housing"},
                    {"date": "2024-03-05", "amount": -3500.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "Debit Card", "balance_left": 10300.00, "category": "Groceries"},
                    {"date": "2024-03-10", "amount": -1500.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "UPI", "balance_left": 8800.00, "category": "Utilities"},
                    {"date": "2024-03-15", "amount": -1000.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "Cash", "balance_left": 7800.00, "category": "Dining Out"},
                    {"date": "2024-03-20", "amount": -800.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Debit Card", "balance_left": 7000.00, "category": "Transportation"},
                    {"date": "2024-03-25", "amount": 500.00, "description": "To transfer at UPI/id 89012345", "payment_mode": "Bank Transfer", "balance_left": 7500.00, "category": "Entertainment"},
                    {"date": "2024-03-30", "amount": 800.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "Bank Transfer", "balance_left": 8300.00, "category": "Income"},
                    // Add more transactions for March as needed
                  ],
                  "remaining_balance": 8300.00
                },
                {
                  "month": "April",
                  "transactions": [
                    {"date": "2024-04-05", "amount": 4500.00, "description": "To transfer at UPI/id 23456789", "payment_mode": "UPI", "balance_left": 12800.00, "category": "Dining Out"},
                    {"date": "2024-04-10", "amount": -2200.00, "description": "To transfer at UPI/id 34567890", "payment_mode": "Debit Card", "balance_left": 10600.00, "category": "Groceries"},
                    {"date": "2024-04-15", "amount": -1800.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "UPI", "balance_left": 8800.00, "category": "Utilities"},
                    {"date": "2024-04-20", "amount": 1200.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "Bank Transfer", "balance_left": 10000.00, "category": "Healthcare"},
                    {"date": "2024-04-25", "amount": -700.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "Cash", "balance_left": 9300.00, "category": "Personal Care"},
                    {"date": "2024-04-30", "amount": 2000.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Bank Transfer", "balance_left": 11300.00, "category": "Income"},
                    // Add more transactions for April as needed
                  ],
                  "remaining_balance": 11300.00
                },
                {
                  "month": "May",
                  "transactions": [
                    {"date": "2024-05-05", "amount": 3500.00, "description": "To transfer at UPI/id 34567890", "payment_mode": "UPI", "balance_left": 14800.00, "category": "Dining Out"},
                    {"date": "2024-05-10", "amount": -1800.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "Debit Card", "balance_left": 13000.00, "category": "Groceries"},
                    {"date": "2024-05-15", "amount": -1200.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "UPI", "balance_left": 11800.00, "category": "Utilities"},
                    {"date": "2024-05-20", "amount": 900.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "Bank Transfer", "balance_left": 12700.00, "category": "Healthcare"},
                    {"date": "2024-05-25", "amount": -600.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Cash", "balance_left": 12100.00, "category": "Personal Care"},
                    {"date": "2024-05-30", "amount": 1500.00, "description": "To transfer at UPI/id 89012345", "payment_mode": "Bank Transfer", "balance_left": 13600.00, "category": "Income"},
                    {"date": "2024-05-31", "amount": -200.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "Cash", "balance_left": 13400.00, "category": "Miscellaneous"}
                    // Add more transactions for May as needed
                  ],
                  "remaining_balance": 13400.00
                },
                {
                  "month": "June",
                  "transactions": [
                    {"date": "2024-06-05", "amount": 6000.00, "description": "To transfer at UPI/id 45678901", "payment_mode": "UPI", "balance_left": 19400.00, "category": "Dining Out"},
                    {"date": "2024-06-10", "amount": -3500.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "Debit Card", "balance_left": 15900.00, "category": "Groceries"},
                    {"date": "2024-06-15", "amount": -2500.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "UPI", "balance_left": 13400.00, "category": "Utilities"},
                    {"date": "2024-06-20", "amount": 1800.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Bank Transfer", "balance_left": 15200.00, "category": "Healthcare"},
                    {"date": "2024-06-25", "amount": -1200.00, "description": "To transfer at UPI/id 89012345", "payment_mode": "Cash", "balance_left": 14000.00, "category": "Personal Care"},
                    {"date": "2024-06-30", "amount": 2500.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "Bank Transfer", "balance_left": 16500.00, "category": "Income"}
                    // Add more transactions for June as needed
                  ],
                  "remaining_balance": 16500.00
                },
                {
                  "month": "July",
                  "transactions": [
                    {"date": "2024-07-05", "amount": -3700.00, "description": "To transfer at UPI/id 56789012", "payment_mode": "UPI", "balance_left": 12800.00, "category": "Dining Out"},
                    {"date": "2024-07-10", "amount": -2500.00, "description": "To transfer at UPI/id 67890123", "payment_mode": "Debit Card", "balance_left": 10300.00, "category": "Groceries"},
                    {"date": "2024-07-15", "amount": 1200.00, "description": "To transfer at UPI/id 78901234", "payment_mode": "Bank Transfer", "balance_left": 11500.00, "category": "Utilities"},
                    {"date": "2024-07-20", "amount": 1800.00, "description": "To transfer at UPI/id 89012345", "payment_mode": "UPI", "balance_left": 13300.00, "category": "Healthcare"},
                    {"date": "2024-07-25", "amount": -900.00, "description": "To transfer at UPI/id 90123456", "payment_mode": "Cash", "balance_left": 12400.00, "category": "Personal Care"},
                    {"date": "2024-07-30", "amount": 3000.00, "description": "To transfer at UPI/id 12345678", "payment_mode": "Bank Transfer", "balance_left": 15400.00, "category": "Income"},
                    {"date": "2024-07-31", "amount": -200.00, "description": "To transfer at UPI/id 23456789", "payment_mode": "Cash", "balance_left": 15200.00, "category": "Miscellaneous"}
                    // Add more transactions for July as needed
                  ],
                  "remaining_balance": 15200.00
                }
              ];
  
      const APIBody = {
        "model": "gpt-3.5-turbo-instruct",
        "prompt": `Act as an Indian Financial Advisor analyze given data ${JSON.stringify(financialData)} and solve the given query ${query}`,
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
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    return (
      <div className='w-4/5'>
       
        <div className=" promptarea bg-gray-200 flex flex-row-reverse w-auto h-[100vh]">
          <div className=" py-6 sm:py-8 lg:py-12 0 w-3/4 h-screen p-6 ">
          <span className='px-2 py-1 rounded-md bg-gray-400 text-sm text-white font-bold'>gpt-3.5-turbo-instruct</span>
            <div>
              <textarea
                className="rounded-md w-full border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-gray-300 transition duration-100 focus:ring"
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                placeholder="Ask any question on your spend managment..."
                cols={50}
                rows={10}
              />
            </div>
  
            <button
              className="w-[100%] inline-block rounded-lg bg-violet-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-violet-300 transition duration-100 hover:bg-violet-600 focus-visible:ring active:bg-gray-700 md:text-base"
              onClick={callOpenAIAPI}
            >
              Get The Financial Response From Finopedia 
            </button>
          </div>
  
          <div className='chathistory bg-white h-screen  w-3/4 p-2 overflow-y-scroll h-screen '>
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
                  <p className="text-sm mt-2"> <span className='font-bold bg-violet-500 px-3 py-1 text-white'>FinoPedia AI</span> </p>
                  <p className='text-sm p-2 bg-violet-100 text-violet-900'>{` ${chat.answer}`}</p>
                  </div>
                  
                </div>
              ))}
            </div>
          )}
        </div>
  
          
  
  
        </div>
  
      </div>
    );
}
}

export default GenAI