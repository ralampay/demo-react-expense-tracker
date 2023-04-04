import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { getAll } from './services/ExpensesService';

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
        let newItems = items.filter((item) => {
            if (item.id == id) {
                return false;
            } else {
                return true;
            }
        })

        setItems(newItems);
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