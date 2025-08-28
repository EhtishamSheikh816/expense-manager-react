import "./App.css";
import { useState, useEffect } from "react";
import Income from "./components/Income";
import Expense from "./components/Expense";
import Lists from "./components/Lists";
import Edit from "./components/Edit";
import Swal from "sweetalert2";

function App() {
  const [expenseOpen, setExpenseOpen] = useState(false);
  const [incomeOpen, setIncomeOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const [incomeData, setIncomeData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [incExp, setIncExp] = useState([]);
  const [editData, setEditData] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const mergeData = [...incomeData, ...expenseData];

    setIncExp(
      mergeData.filter((item) =>
        item.category
          ? item.category.toLowerCase().includes(search.toLowerCase())
          : false
      )
    );
  }, [incomeData, expenseData, search]);

  const handleAddIncome = (data) => {
    setIncomeData([...incomeData, { ...data, id: Date.now(), type: "Income" }]);
  };

  const handleAddExpense = (data) => {
    setExpenseData([
      ...expenseData,
      { ...data, id: Date.now(), type: "Expense" },
    ]);
  };

  const handleDel = (id) => {
    setIncomeData((prev) => prev.filter((items) => items.id != id));
    setExpenseData((prev) => prev.filter((items) => items.id != id));
  };

  const handleEdit = (item) => {
    setEditData(item);
    setEditOpen(true);
  };

  const saveEditData = (updateditem) => {
    if (updateditem.type === "Income") {
      setIncomeData((prev) =>
        prev.map((i) => (i.id === updateditem.id ? updateditem : i))
      );
    } else {
      setExpenseData((prev) =>
        prev.map((i) => (i.id === updateditem.id ? updateditem : i))
      );
    }

    setEditOpen(false);
    setEditData(null);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${updateditem.amount} Save in ${updateditem.category} has been updated successfully.`,
      showConfirmButton: false,
      timer: 1500,
    });
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
      <Edit
        isOpen={editOpen}
        onClose={() => setEditOpen(false)}
        editItem={editData}
        onSave={saveEditData}
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
            <input
              type="text"
              className="inp"
              placeholder="Search by category..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <Lists sndData={incExp} onDelete={handleDel} onEdit={handleEdit} />
      </div>
    </>
  );
}

export default App;
