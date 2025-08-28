import "./Lists.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Lists = ({ sndData, onDelete, onEdit }) => {
  return (
    <div className="lists">
      <div className="lists-top">
        <div className="lists-id">S.No</div>
        <div className="lists-type">Type</div>
        <div className="lists-amount">Amount</div>
        <div className="lists-date">Date</div>
        <div className="lists-category">Category</div>
        <div className="lists-action">Action</div>
      </div>
      {/* ----- */}
      <div className="item-box">
        {sndData.length === 0 ? (
          <div className="no-data">
            <img src="./images/no-data.svg" alt="No Data" />
            <h2>No Data Available</h2>
            <p>Please add some transactions to see them here.</p>
          </div>
        ) : (
          sndData.map((items, index) => {
            return (
              <div className="item-sec" key={items.id}>
                <div className="lists-id items-div">
                  <div className="on-mobile">S.No</div>
                  {index + 1}
                </div>
                <div className="lists-type items-div">
                  <div className="on-mobile">Type</div>
                  <span
                    className={
                      items.type === "Income" ? "badge-income" : "badge-expense"
                    }
                  >
                    {items.type}
                  </span>
                </div>
                <div className="lists-amount items-div ">
                  <div className="on-mobile">Amount</div>
                  {items.amount}
                </div>
                <div className="lists-date items-div">
                  <div className="on-mobile">Date</div>
                  {items.date}
                </div>
                <div className="lists-category items-div">
                  <div className="on-mobile">Category</div>
                  {items.category}
                </div>
                <div className="lists-action items-action">
                  <button className="edit-btn" onClick={() => onEdit(items)}>
                    <FaEdit />
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => onDelete(items.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Lists;
