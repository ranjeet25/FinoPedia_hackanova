import { useState, useEffect } from "react";
import BarChart from "./BarChart";
import { UserData } from "./Data";

function MonthlyChart() {
    const [monthlyExpenses, setMonthlyExpenses] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(null);

    useEffect(() => {
        // Function to aggregate data by month and category
        const aggregateData = () => {
            const aggregatedExpenses = {};
            UserData.forEach((monthData) => {
                const month = monthData.month;
                const monthTransactions = monthData.transactions;
                const expensesByCategory = {};
                monthTransactions.forEach((transaction) => {
                    const category = transaction.category;
                    if (!expensesByCategory[category]) {
                        expensesByCategory[category] = 0;
                    }
                    expensesByCategory[category] += Math.abs(transaction.amount); // Taking absolute value to handle both income and expenses
                });
                aggregatedExpenses[month] = expensesByCategory;
            });
            setMonthlyExpenses(aggregatedExpenses);
        };

        aggregateData();
    }, []);

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    return (
        <div className="Monthlyinvest">
            
            <select onChange={handleMonthChange}>
                <option value="">Select Month</option>
                {Object.keys(monthlyExpenses).map((month) => (
                    <option key={month} value={month}>
                        {month}
                    </option>
                ))}
            </select>
            {selectedMonth && (
                <div style={{ width: 500 }}>
                    
                    <BarChart
                        chartData={{
                            labels: Object.keys(monthlyExpenses[selectedMonth]),
                            datasets: [
                                {
                                    label: "Expenses",
                                    data: Object.values(monthlyExpenses[selectedMonth]),
                                    backgroundColor: [
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
                                    ],
                                    borderWidth: 1,
                                },
                            ],
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default MonthlyChart;
