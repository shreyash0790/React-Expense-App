import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpenseList = (prop) => {
  const expenses = prop.items;

  if (expenses.length===0){
    return <h2 className="expenses-list__fallback">No Expense Found</h2>
  }
    return (
      <ul className="expenses-list">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
};

export default ExpenseList;
