import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";
import React from "react";

const ExpensesList = ({filteredExpenses})=>{
    if (filteredExpenses.length===0) return <h2 className="expenses-list__fallback"> Found No Expenses</h2>
    return(
        <ul className="expenses-list">
            {filteredExpenses.map(item=>
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />)}
        </ul>
    )
}
export default ExpensesList;