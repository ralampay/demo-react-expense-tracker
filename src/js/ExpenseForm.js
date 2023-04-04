import React, { useState, useEffect } from 'react';
import { getAll } from './services/CategoriesService';

const ExpenseForm = (props) => {

    const [item, setItem] = useState("");
    const [amount, setAmount] = useState(0.00);
    const [categoryId, setCategoryId] = useState(-1);
    const [categories, setCategories] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        getAll().then((response) => {
            setCategories(response.data);
        }).catch((response) => {
            alert("Error in fetching categories");
            console.log(response);
        })
    }, [])

    const handleItemOnChange = (event) => {
        setItem(event.target.value)
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
                                    value={item}
                                    onChange={handleItemOnChange}
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
                                    value={amount}
                                    disabled={isSubmitting}
                                    onChange={(event) => {
                                        setAmount(event.target.value);
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
                                    value={categoryId}
                                    onChange={(event) => {
                                        setCategoryId(event.target.value);
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

                            const payload = {
                                item: item,
                                amount: amount,
                                category_id: categoryId
                            }

                            props.addItem(payload);

                            setIsSubmitting(false);
                            setItem("");
                            setAmount(0.00);
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