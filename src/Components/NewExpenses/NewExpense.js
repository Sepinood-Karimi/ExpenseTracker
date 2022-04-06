import React,{useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onAddNewExpenseData}) => {
    const [add,setAdd]=useState(false)
    const saveNewExpenseHandler = (newExpense) => {
      const expenseData={
          ...newExpense,
          id : Math.random().toString()
      };
        onAddNewExpenseData(expenseData);
        setAdd(false);
    }
    const addNewExpenseHandler = () => {
      setAdd(true);
    }
    const cancelFormSub = () => {
      setAdd(false);
    }
  return(
      <div className="new-expense">
          {!add && <button onClick={addNewExpenseHandler}> Add New Expense</button>}
          {add && <ExpenseForm onSaveNewExpense={saveNewExpenseHandler} onCancel={cancelFormSub}/>}
      </div>
  );
};
export default NewExpense;