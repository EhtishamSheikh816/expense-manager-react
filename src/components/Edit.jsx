import "./Edit.css";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const Edit = ({ isOpen, onClose, editItem, onSave }) => {
  if (!isOpen) return null;

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editItem) {
      setAmount(editItem.amount);
      setCategory(editItem.category);
      setDate(editItem.date);
    }
  }, [editItem]);

  const setEdit = (e) => {
    e.preventDefault();

    onSave({ ...editItem, amount, category, date });
  };

  return (
    <div className="edit-main">
      <div className="edit-sec">
        <div className="edit-tittle-sec">
          <h2>Edit {editItem?.type}</h2>
          <button onClick={onClose}>
            <RxCross2 />
          </button>
        </div>
        <form className="edit-form-sec" onSubmit={setEdit}>
          <input
            type="number"
            placeholder="Amount"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <div className="edit-btn-sec">
            <button className="save-btn" type="submit">
              Save
            </button>
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
