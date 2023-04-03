import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <Header/>
                <ExpenseForm/>
                <ExpenseList/>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default App;