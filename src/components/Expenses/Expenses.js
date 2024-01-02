import ExpenseItem from './ExpenseItem';
import React, { useState } from "react";
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter';

function Expenses(prop){
    const expenses = prop.items
    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

const filteredExpenses=expenses.filter((expense)=>{
  return expense.date.getFullYear().toString()===filteredYear
})

let expensesContent=<p>No Expenses Found!</p>

if(filteredExpenses.length>0){
  expensesContent= filteredExpenses.map((expense)=>
    <ExpenseItem
    key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  )
}

      return (
         
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
       {expensesContent}
      </Card>

        
      )



}

export default Expenses