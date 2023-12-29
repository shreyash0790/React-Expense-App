import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card'

function Expenses(prop){
    const expenses = prop.items

      return (
         
        <Card className='expenses'>
        {expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>

        
      )



}

export default Expenses