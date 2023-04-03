import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ExpenseForm from './ExpenseForm';

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <Header/>
                <ExpenseForm/>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default App;