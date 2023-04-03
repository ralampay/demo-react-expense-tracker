import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const App = () => {

    const [items, setItems] = useState([
        { id: 1, name: "Item A", amount: 100.0 },
        { id: 2, name: "Item B", amount: 200.0 },
        { id: 3, name: "Item C", amount: 300.0 }
    ]);

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

    const addItem = (name, amount) => {
        // Copy current items
        let newItems = [...items];
        let newId = 4;
        let newItem = {
            id: newId,
            name: name,
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