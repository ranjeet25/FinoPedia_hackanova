import { useState, useEffect } from "react";
import LineChart from "./LineChart";
import { UserData } from "./Data";


function RemainingBalance() {
  const [monthlyData, setMonthlyData] = useState([]);


  useEffect(() => {
    // Function to aggregate data by month and calculate accumulated amount
    const aggregateData = () => {
      const aggregatedData = [];
      UserData.forEach((monthData) => {
        const month = monthData.month;
        let accumulatedAmount = monthData.remaining_balance;
        aggregatedData.push({ month, accumulatedAmount });
      });
      setMonthlyData(aggregatedData);
    };

    aggregateData();
  }, []);


  // Array of colors for bars
  const barColors = [
    "rgba(255, 99, 132, 0.6)",
    "rgba(54, 162, 235, 0.6)",
    "rgba(255, 206, 86, 0.6)",
    "rgba(75, 192, 192, 0.6)",
    "rgba(153, 102, 255, 0.6)",
    "rgba(255, 159, 64, 0.6)",
    "rgba(255, 69, 0, 0.6)",
    "rgba(0, 255, 127, 0.6)",
    "rgba(0, 255, 255, 0.6)",
    "rgba(128, 0, 128, 0.6)",
    "rgba(255, 0, 255, 0.6)",
    "rgba(128, 128, 0, 0.6)"
    // Add more colors if needed
  ];


  return (
    <div className="RemainingBalance">
      
      <div style={{width: 500}}>
      <h1>LineChart</h1>
        <LineChart
          chartData={{
            labels: monthlyData.map((data) => data.month),
            datasets: [
              {
                label: "Accumulated Amount",
                data: monthlyData.map((data) => data.accumulatedAmount),
                backgroundColor: barColors,
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 2,
              },
            ],
          }}
        />
      </div>
      
    </div>
  );
}

export default RemainingBalance; 