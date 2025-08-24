import "./App.css";
import { useState, useEffect } from "react";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Lists from "./components/Lists";

function App() {
  const [expenseOpen, setExpenseOpen] = useState(false);
  const [incomeOpen, setIncomeOpen] = useState(false);

  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [incExp, setIncExp] = useState([]);

  useEffect(() => {
    setIncExp([...incomeData, ...expenseData]);
  }, [incomeData, expenseData]);

  const handleAddIncome = (data) => {
    setIncomeData([...incomeData, data]);
  };

  const handleAddExpense = (data) => {
    setExpenseData([...expenseData, data]);
  };

  return (
    <>
      <Income
        isOpen={incomeOpen}
        onClose={() => setIncomeOpen(false)}
        onAddIncome={handleAddIncome}
      />
      <Expense
        isOpen={expenseOpen}
        onClose={() => setExpenseOpen(false)}
        onAddExpense={handleAddExpense}
      />
      <div className="main">
        <h1>Expense Manager System</h1>
        <div className="field">
          <div className="action-sec">
            <button
              onClick={() => {
                setIncomeOpen(true);
              }}
            >
              Add Income
            </button>
            <button
              id="exp"
              onClick={() => {
                setExpenseOpen(true);
              }}
            >
              Expense
            </button>
          </div>
          <div className="search-sec">
            <input type="text" className="inp" placeholder="Search your..." />
          </div>
        </div>
        <Lists sndData={incExp} />
      </div>
    </>
  );
}

export default App;
