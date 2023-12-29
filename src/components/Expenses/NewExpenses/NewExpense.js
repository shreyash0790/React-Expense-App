import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { v4 as uuidv4 } from 'uuid';

const NewExpense = (prop) => {
const expenseDataHandler=(expenseData)=>{
const updatedExpenseData={
    ...expenseData,
    id:uuidv4()
}
prop.onAddExpense(updatedExpenseData);
}



  return (
    <div className="new-expense">
      <ExpenseForm onSaveData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
