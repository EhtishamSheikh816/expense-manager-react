import "./Expense.css";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";

const Expense = ({ isOpen, onClose, onAddExpense }) => {
  if (!isOpen) return null;

  const [amount, setAmount] = useState("");
  const [selector, setSelector] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setDate(today);
  }, []);

  const addExpense = (e) => {
    e.preventDefault();

    if (!amount || !selector || !date) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Fields",
        text: "Please fill in all fields before adding Expense.",
        confirmButtonColor: "#f44336",
      });
      return;
    }

    onAddExpense({ type: "Expense", amount, category: selector, date });

    Swal.fire({
      icon: "success",
      title: "Expense Added!",
      text: `You added Rs.${amount} in ${selector} category.`,
      confirmButtonColor: "#2196f3",
      timer: 2000,
      timerProgressBar: true,
    });

    setAmount("");
    setSelector("");
    setDate(new Date().toISOString().split("T")[0]);

    onClose();
  };

  return (
    <div className="expense-main">
      <div className="expense-sec">
        <div className="expense-tittle-sec">
          <h1>Add Expense</h1>
          <button onClick={onClose}>
            <RxCross2 />
          </button>
        </div>
        <form className="expense-form-sec" onSubmit={addExpense}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            required
          />

          <select
            id="expense-category"
            value={selector}
            onChange={(e) => setSelector(e.target.value)}
            required
          >
            <option value="" disabled>
              -- Select Category --
            </option>
            <option value="Food">Food</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Health">Health</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Bills">Bills</option>
            <option value="Rent">Rent</option>
            <option value="Education">Education</option>
            <option value="Travel">Travel</option>
            <option value="Others">Others</option>
          </select>

          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button type="submit">Add Expense</button>
        </form>
      </div>
    </div>
  );
};

export default Expense;
