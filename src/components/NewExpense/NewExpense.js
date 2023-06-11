import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.addExpense(expenseData)
    };

    const startEditingHandler = () => {
        setIsEditing(true)
    };;

    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        { isEditing && <ExpenseForm saveExpenseData={saveExpenseDataHandler}/>}
    </div>
};

export default NewExpense;