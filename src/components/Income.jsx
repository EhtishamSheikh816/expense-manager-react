import "./Income.css";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";

const Income = ({ isOpen, onClose, onAddIncome }) => {
  if (!isOpen) return null;

  const [amount, setAmount] = useState("");
  const [selector, setSelector] = useState("");
  const [isDate, setIsDate] = useState("");

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    setIsDate(currentDate);
  }, []);

  const addIncome = (e) => {
    e.preventDefault();

    if (!amount || !selector || !isDate) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Fields",
        text: "Please fill in all fields before adding income.",
        confirmButtonColor: "#f44336",
      });
      return;
    }

    onAddIncome({ type: "Income", amount, category: selector, date: isDate });

    Swal.fire({
      icon: "success",
      title: "Income Added!",
      text: `You added Rs.${amount} in ${selector} category.`,
      confirmButtonColor: "#4caf50",
      timer: 2000,
      timerProgressBar: true,
    });

    setAmount("");
    setSelector("");
    setIsDate(new Date().toISOString().split("T")[0]);

    onClose();
  };

  return (
    <div className="income-main">
      <div className="income-sec">
        <div className="income-tittle-sec">
          <h1>Add Income</h1>
          <button onClick={onClose}>
            <RxCross2 />
          </button>
        </div>
        <form className="income-form-sec" onSubmit={addIncome}>
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <select
            id="income-category"
            value={selector}
            onChange={(e) => setSelector(e.target.value)}
            required
          >
            <option value="" disabled>
              -- Select Category --
            </option>
            <option value="Business">Business</option>
            <option value="Investments">Investments</option>
            <option value="Extra Income">Extra Income</option>
            <option value="Deposits">Deposits</option>
            <option value="Lottery">Lottery</option>
            <option value="Gift">Gift</option>
            <option value="Salary">Salary</option>
            <option value="Saving">Saving</option>
            <option value="Rental Income">Rental Income</option>
            <option value="Others">Others</option>
          </select>

          <input
            type="date"
            value={isDate}
            onChange={(e) => setIsDate(e.target.value)}
            required
          />

          <button type="submit">Add Income</button>
        </form>
      </div>
    </div>
  );
};

export default Income;
