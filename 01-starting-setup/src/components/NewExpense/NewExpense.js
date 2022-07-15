import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const[isEditing,setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing((prevState)=>!prevState); 
  };

  const toggleEditingHandler = () => {
    setIsEditing((prevState)=>!prevState); 
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick = {toggleEditingHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onToggleEditing={toggleEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
