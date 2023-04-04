import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import { 
    getAll, 
    remove as removeExpense, 
    create as createExpense,
    update as updateExpense
} from './services/ExpensesService';

const App = () => {

    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState({
        id: "",
        item: "",
        amount: 0.00,
        category_id: ""
    })

    const resetItem = () => {
        setCurrentItem({
            id: "",
            item: "",
            amount: 0.00,
            category_id: ""
        })
    }

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

    const save = (args) => {
        if (!currentItem.id) {
            // create
            createExpense(args).then((response) => {
                // Copy current items
                let newItems = [...items];
                newItems.push(response.data);
                setItems(newItems);
            }).catch((response) => {
                alert("Error: Not able to add expense item");
                console.log(response);
            });
        } else {
            // update
            updateExpense(currentItem.id, args).then((response) => {
                console.log(`Update successful`);
                console.log(response.data)
                let newItems = [...items];
                setItems(newItems.map((item) => {
                    console.log(`Comparing ${item.id} to ${currentItem.id}: ${item.id == currentItem.id}`)
                    if (item.id == currentItem.id) {
                        return response.data;
                    } else {
                        return item;
                    }
                }));
            }).catch((response) => {
                alert("Error in updating!");
                console.log(response);
            })
        }
    }

    return (
        <React.Fragment>
            <div className="container">
                <Header/>
                <ExpenseForm
                    save={save}
                    item={currentItem}
                    setCurrentItem={setCurrentItem}
                    resetItem={resetItem}
                />
                <ExpenseList
                    items={items}
                    deleteItem={deleteItem}
                    setCurrentItem={setCurrentItem}
                />
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default App;