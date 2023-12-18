import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 21 2023</div>
      <div className="expense-item__description">
        <h2>Car insurance</h2>
        <div className="expense-item__price">$23</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
