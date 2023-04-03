import React, { useState } from 'react';

const ExpenseForm = (props) => {

    const [item, setItem] = useState("");
    const [amount, setAmount] = useState(0.00);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleItemOnChange = (event) => {
        setItem(event.target.value)
    }

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-8">
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
                        <div className="col-md-4">
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
                    </div>
                    <hr/>
                    <button 
                        className="btn btn-primary w-100"
                        disabled={isSubmitting}
                        onClick={() => {
                            setIsSubmitting(true);

                            const payload = {
                                name: item,
                                amount: amount
                            }

                            props.addItem(payload.name, payload.amount);

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