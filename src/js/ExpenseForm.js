import React, { useState, useEffect } from 'react';
import { getAll } from './services/CategoriesService';

const ExpenseForm = (props) => {
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
                                    value={props.item.item}
                                    onChange={(event) => {
                                        let item = {...props.item}
                                        item.item = event.target.value;
                                        props.setCurrentItem(item);
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
                                    value={props.item.amount}
                                    disabled={isSubmitting}
                                    onChange={(event) => {
                                        let item = {...props.item}
                                        item.amount = event.target.value;
                                        props.setCurrentItem(item);
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
                                    value={props.item.category_id}
                                    onChange={(event) => {
                                        let item = {...props.item}
                                        item.category_id = event.target.value;
                                        props.setCurrentItem(item);
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
                                item: props.item.item,
                                amount: props.item.amount,
                                category_id: props.item.category_id
                            }
                            
                            props.save(payload);
                            props.resetItem();

                            setIsSubmitting(false);
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