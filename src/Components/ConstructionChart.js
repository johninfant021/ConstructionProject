import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./ConstructionChart.css";

const ConstructionChart = () => {
  const [selectedSquareFeet, setSelectedSquareFeet] = useState(0);
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartContainer.current.getContext("2d");

    const initialBudgetData = [5000, 7000, 6000, 3000, 4000, 2000];
    const expenditureData = [3000, 4000, 5000, 2000, 3000, 1000];
    const remainingBudgetData = initialBudgetData.map(
      (budget, index) => budget - expenditureData[index]
    );
    const labels = [
      "Labor",
      "Materials",
      "Equipment",
      "Permits",
      "Subcontractors",
      "Overhead",
    ];

    chartInstance.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Initial Budget",
            data: initialBudgetData,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
          {
            label: "Real-time Expenditure",
            data: expenditureData,
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
          {
            label: "Remaining Budget",
            data: remainingBudgetData,
            backgroundColor: "rgba(75, 192, 192, 0.5)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const handleSquareFeetChange = (event) => {
    setSelectedSquareFeet(parseInt(event.target.value));
  };

  useEffect(() => {
    if (chartInstance.current !== null) {
      const adjustedInitialBudgetData = [
        5000, 7000, 6000, 3000, 4000, 2000,
      ].map((budget) => budget * selectedSquareFeet);
      const adjustedExpenditureData = [3000, 4000, 5000, 2000, 3000, 1000].map(
        (expenditure) => expenditure * selectedSquareFeet
      );
      const adjustedRemainingBudgetData = adjustedInitialBudgetData.map(
        (budget, index) => budget - adjustedExpenditureData[index]
      );

      chartInstance.current.data.datasets[0].data = adjustedInitialBudgetData;
      chartInstance.current.data.datasets[1].data = adjustedExpenditureData;
      chartInstance.current.data.datasets[2].data = adjustedRemainingBudgetData;

      chartInstance.current.update();
    }
  }, [selectedSquareFeet]);

  return (
    <div>
      <div className="cons">
        <label htmlFor="squareFeet">Select Square Feet:</label>
        <select
          id="squareFeet"
          name="squareFeet"
          onChange={handleSquareFeetChange}
        >
          {[...Array(11).keys()].map((value) => (
            <option key={value} value={value}>
              {value} sq ft
            </option>
          ))}
        </select>
        <div className="chart-align">
          <div className="chart-container">
            <canvas
              ref={chartContainer}
              id="budgetChart"
              className="bar"
            ></canvas>
          </div>
          <CostComparisonChart />
          <CostBreakdownChart />
        </div>
        <div className="table-align">
          <BuildingConstructionAnalysis />
          <BudgetCostAnalysisTable />
        </div>
      </div>
    </div>
  );
};

const CostComparisonChart = () => {
  const chartContainer1 = useRef(null);
  const chartInstance1 = useRef(null);

  useEffect(() => {
    const ctx = chartContainer1.current.getContext("2d");

    const data = {
      labels: ["Labor", "Materials", "Equipment", "Miscellaneous"],
      datasets: [
        {
          label: "Category-wise Cost Comparison",
          data: [15000, 20000, 10000, 5000], // Example values, replace with your actual data
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1.5,
        },
      ],
    };

    if (chartInstance1.current) {
      chartInstance1.current.destroy();
    }

    chartInstance1.current = new Chart(ctx, {
      type: "pie",
      data: data,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="chart-container1">
      <canvas ref={chartContainer1} className="pie" />
    </div>
  );
};

const CostBreakdownChart = () => {
  const chartContainer2 = useRef(null);
  const chartInstance2 = useRef(null);

  useEffect(() => {
    const ctx = chartContainer2.current.getContext("2d");

    const data = {
      labels: [
        "Labor",
        "Materials",
        "Equipment",
        "Permits",
        "Subcontractors",
        "Overhead",
      ],
      datasets: [
        {
          label: "Cost Breakdown by Category",
          data: [15000, 20000, 10000, 5000, 12000, 8000], // Example values, replace with your actual data
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
            "rgba(255, 159, 64, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    if (chartInstance2.current) {
      chartInstance2.current.destroy();
    }

    chartInstance2.current = new Chart(ctx, {
      type: "doughnut",
      data: data,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div className="chart-container2">
      <canvas ref={chartContainer2} />
    </div>
  );
};
const BuildingConstructionAnalysis = () => {
  // Sample data representing budget and cost analysis
  const data = [
    { category: "Labor", budgetAllocation: 25000, actualExpenditure: 22000 },
    {
      category: "Materials",
      budgetAllocation: 30000,
      actualExpenditure: 28000,
    },
    {
      category: "Equipment",
      budgetAllocation: 20000,
      actualExpenditure: 18000,
    },
    // Add more categories as needed
  ];

  return (
    <div>
      <h2 className="table-head">
        Building Construction Budget and Cost Analysis
      </h2>
      <div className="table-container">
        <table border={1}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Budget Allocation ($)</th>
              <th>Actual Expenditure ($)</th>
              <th>Variance ($)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td>{item.budgetAllocation}</td>
                <td>{item.actualExpenditure}</td>
                <td>{item.budgetAllocation - item.actualExpenditure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const BudgetCostAnalysisTable = () => {
  // Example data, replace with your actual data
  const budgetData = {
    Labor: 25000,
    Materials: 30000,
    Equipment: 20000,
    Permits: 8000,
    Subcontractors: 15000,
    Overhead: 10000,
  };

  const costData = {
    Labor: 22000,
    Materials: 28000,
    Equipment: 18000,
    Permits: 7500,
    Subcontractors: 14000,
    Overhead: 9000,
  };

  return (
    <table border={1}>
      <thead>
        <tr>
          <th>Category</th>
          <th>Budget (USD)</th>
          <th>Cost (USD)</th>
          <th>Remaining Budget (USD)</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(budgetData).map((category) => (
          <tr key={category}>
            <td>{category}</td>
            <td>{budgetData[category]}</td>
            <td>{costData[category]}</td>
            <td>{budgetData[category] - costData[category]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ConstructionChart;
