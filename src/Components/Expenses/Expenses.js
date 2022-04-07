import React,{useState} from "react";
import './Expenses.css';
import Card from "../Card/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = ({items})=>{
    const [filteredYear,setFilteredYear]=useState('2022');

    const filterHandler = (year) => {
      setFilteredYear(year);
    }
    const filteredExpenses = items.filter(expense=>expense.date.getFullYear().toString()===filteredYear);
    return(
            <div>
                <Card className="expenses">
                    <ExpenseFilter filteredYear={filteredYear} onFilter={filterHandler}/>
                    <ExpensesChart expenses={filteredExpenses}/>
                    <ExpensesList filteredExpenses={filteredExpenses}/>
                </Card>
            </div>
    );
}
export default Expenses;