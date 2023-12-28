import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [amount, setAmount] = useState(props.amount);

  const ChangeAmount = () => {
    setAmount(100);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={ChangeAmount} className="expense-item__price">
          Change Amount{" "}
        </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
