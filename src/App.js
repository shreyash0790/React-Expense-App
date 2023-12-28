import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";

function App() {
  

  return (
    <div>
      <h2>Let's get started!</h2>
      <div>
      <NewExpense />
      <Expenses/>
      </div>
    </div>
  );
}

export default App;
