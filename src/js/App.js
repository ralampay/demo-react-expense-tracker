import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { 
    getAll, 
    remove as removeExpense, 
    create as createExpense 
} from './services/ExpensesService';

const App = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        getAll().then((response) => {
            setItems(response.data);
        }).catch((response) => {
            alert("error!");
            console.log(response);
        })
    }, [])

    const deleteItem = (id) => {
        removeExpense(id).then((response) => {
            setItems(items.filter((item) => {
                return item.id != id;
            }))
        }).catch((response) => {
            alert(`Error in deleting item ${id}`);
            console.log(response);
        })
    }

    const addItem = (args) => {
        createExpense(args).then((response) => {
            // Copy current items
            let newItems = [...items];
            newItems.push(response.data);
            setItems(newItems);
        }).catch((response) => {
            alert("Error: Not able to add expense item");
            console.log(response);
        });
    }

    return (
        <React.Fragment>
            <div className="container">
                <Header/>
                <ExpenseForm
                    addItem={addItem}
                />
                <ExpenseList
                    items={items}
                    deleteItem={deleteItem}
                />
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default App;