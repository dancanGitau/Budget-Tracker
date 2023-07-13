import React from "react";
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        {id:12, name: 'Shopping', cost: 40},
        {id:13, name: 'Holyday', cost: 50},
        {id:14, name: 'Car Service', cost: 60},

    ];

    return(
        <ul className="list-group">
            {expenses.map((expense) =>(
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
            ))}
        </ul>
    );
}

export default ExpenseList