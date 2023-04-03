import React, { useState } from 'react';

const ExpenseForm = () => {

    const [item, setItem] = useState("");
    const [amount, setAmount] = useState(0.00);

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
                                    onChange={(event) => {
                                        setItem(event.target.value);
                                    }}
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
                                    onChange={(event) => {
                                        setAmount(event.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <button className="btn btn-primary w-100">
                        Save
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ExpenseForm;