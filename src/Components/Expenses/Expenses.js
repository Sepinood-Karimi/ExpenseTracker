import React,{useState} from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
import ExpenseFilter from "./ExpenseFilter";
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
                    {filteredExpenses.map(item=><ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)}
                </Card>
            </div>
    );
}
export default Expenses;