import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";

function App() {
 const [newExpense,setExpense]=useState([])

  const addExpense=(newExpense)=>{
   setExpense((prevExpense)=>[...prevExpense,newExpense])
  }

  return (
    <div>
      <h2>Expense App</h2>
      <div>
      <NewExpense onAddExpense={addExpense}/>
      <Expenses items={newExpense}/>
      </div>
    </div>
  );
}

export default App;
