import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onAddNewExpenseData}) => {
    const saveNewExpenseHandler = (newExpense) => {
      const expenseData={
          ...newExpense,
          id : Math.random().toString()
      };
        onAddNewExpenseData(expenseData);
    }
  return(
      <div className="new-expense">
          <ExpenseForm onSaveNewExpense={saveNewExpenseHandler}/>
      </div>
  );
};
export default NewExpense;