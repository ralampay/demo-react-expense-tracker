import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAll } from './services/CategoriesService';
import {
    fetchOne,
    create as createExpense,
    update as updateExpense
} from './services/ExpensesService';

const ExpenseForm = (props) => {
    const [categories, setCategories] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [expense, setExpense] = useState({
        id: "",
        item: "",
        amount: "",
        category_id: ""
    })

    const navigate = useNavigate();

    let { id } = useParams();

    useEffect(() => {
        getAll().then((response) => {
            setCategories(response.data);
        }).catch((response) => {
            alert("Error in fetching categories");
            console.log(response);
        })

        if (id) {
            fetchOne(id).then((response) => {
                setExpense(response.data);
            }).catch((response) => {
                console.log(response);
                alert(`Error in fetchOne(${id})`);
            })
        }
    }, [])

    const save = () => {
        if (!expense.id) {
            // create
            createExpense(expense).then((response) => {
                navigate(`/expenses/${response.data.id}`);
            }).catch((response) => {
                alert("Error: Not able to add expense item");
                console.log(response);
            });
        } else {
            // update
            updateExpense(expense.id, expense).then((response) => {
                navigate(`/expenses/${response.data.id}`);
            }).catch((response) => {
                alert("Error in updating!");
                console.log(response);
            })
        }
    }

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>
                                    Item
                                </label>
                                <input 
                                    className="form-control"
                                    value={expense.item}
                                    onChange={(event) => {
                                        let obj = {...expense}
                                        obj.item = event.target.value;

                                        setExpense(obj);
                                    }}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>
                                    Amount
                                </label>
                                <input 
                                    className="form-control" 
                                    type="number"
                                    value={expense.amount}
                                    disabled={isSubmitting}
                                    onChange={(event) => {
                                        let obj = {...expense}
                                        obj.amount = event.target.value;
                                        setExpense(obj);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label>
                                    Category
                                </label>
                                <select 
                                    className="form-control" 
                                    value={expense.category_id}
                                    onChange={(event) => {
                                        let obj = {...expense};
                                        obj.category_id = event.target.value;

                                        setExpense(obj);
                                    }}
                                >
                                    <option value="">
                                        -- SELECT --
                                    </option>
                                    {categories.map((category) => {
                                        return (
                                            <option key={`category-option-${category.id}`} value={category.id}>
                                                {category.name}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <button 
                        className="btn btn-primary w-100"
                        disabled={isSubmitting}
                        onClick={() => {
                            setIsSubmitting(true);
                            save();
                        }}
                    >
                        Save
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ExpenseForm;