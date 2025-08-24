import Income from "./Income";
import "./Lists.css";
import { FaEdit, FaTrash } from "react-icons/fa";

const Lists = ({ sndData }) => {
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
        {sndData.map((items, index) => {
          return (
            <div className="item-sec">
              <div className="lists-id items-div">
                <div className="on-mobile">S.No</div>
                {index + 1}
              </div>
              <div className="lists-type items-div">
                <div className="on-mobile">Type</div>
                {items.type}
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
                <button className="edit-btn">
                  <FaEdit />
                </button>
                <button className="delete-btn">
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lists;
