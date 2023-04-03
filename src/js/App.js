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

    return (
        <React.Fragment>
            <div className="container">
                <Header/>
                <ExpenseForm/>
                <ExpenseList
                    items={items}
                />
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default App;