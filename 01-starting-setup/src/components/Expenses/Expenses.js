import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
function Expenses(props) {
  const [selectedFilter, setSelectedFilter] = useState("2020");
  // const expenseItems = [];
  // for (var i = 0; i < props.expenses.length; i++) {
  //   expenseItems.push(
  //     <ExpenseItem
  //       title={props.expenses[i].title}
  //       amount={props.expenses[i].amount}
  //       date={props.expenses[i].date}
  //     />
  //   );
  // }
  const changeFilterHandler = (enteredFilter) => {
    setSelectedFilter(enteredFilter);
    console.log(selectedFilter);
  };

  
  const filteredExpenses = props.expenses.filter(expense=>expense.date.getFullYear().toString()===selectedFilter);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedFilter}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
        {/* {filteredExpenses.length===0 && <p>No Expenses Found</p>}
        {filteredExpenses.length>0 && filteredExpenses.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
        {/* {filteredExpenses.length===0?<p>No Expenses Found</p>:filteredExpenses.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
       
      </Card>
    </div>
  );
}

export default Expenses;
