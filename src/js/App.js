import React, { useState, useEffect } from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseShow from './ExpenseShow';
import { 
    getAll, 
    remove as removeExpense, 
    create as createExpense,
    update as updateExpense
} from './services/ExpensesService';

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <Header/>
                <Routes>
                    <Route
                        path="/"
                        element={<ExpenseList/>}
                    />
                    <Route
                        path="/new"
                        element={<ExpenseForm/>}
                    />
                    <Route
                        path="/expenses/:id/edit"
                        element={<ExpenseForm/>}
                    />
                    <Route
                        path="/expenses/:id"
                        element={<ExpenseShow/>}
                    />
                </Routes>
                <Footer/>
            </div>
        </React.Fragment>
    )
}

export default App;