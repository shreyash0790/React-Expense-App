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
      return (
         
        <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenses.map((expense) => 
          <ExpenseItem
          key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
      </Card>

        
      )



}

export default Expenses