import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  const deleteExp=()=>{
   const card=document.querySelector(".expense-item")
   card.remove()
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={deleteExp} className="expense-item__price">Delete</button>
      </div>
     
    </Card>
  );
}

export default ExpenseItem;
