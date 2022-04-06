import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from "../Card/Card";
const Expenses = ({items})=>{
    return(
            <div>
                <Card className="expenses">
                    {items.map(item=><ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>)}
                </Card>
            </div>
    );
}
export default Expenses;