import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { getAll, remove, remove as removeExpense } from './services/ExpensesService';

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

    const addItem = (item, amount) => {
        // Copy current items
        let newItems = [...items];
        let newId = 4;
        let newItem = {
            id: newId,
            item: item,
            amount: amount
        }

        newItems.push(newItem);
        setItems(newItems);
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