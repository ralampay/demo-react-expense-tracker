import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAll } from './services/ExpensesService';

const ExpenseList = (props) => {
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        refresh()
    }, [])

    const refresh = () => {
        getAll(q).then((response) => {
            setItems(response.data);
        }).catch((response) => {
            alert("error!");
            console.log(response);
        })
    }

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-10">
                            <label>
                                Search
                            </label>
                            <input
                                value={q}
                                className="form-control"
                                onChange={(event) => {
                                    setQ(event.target.value);
                                }}
                            />
                        </div>
                        <div className="col-md-2">
                            <label>
                                Actions
                            </label>
                            <br/>
                            <button 
                                className="btn btn-success"
                                onClick={() => {
                                    refresh();
                                }}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table table-sm table-bordered mt-2">
                <thead>
                    <tr>
                        <th>
                            Item
                        </th>
                        <th>
                            Amount
                        </th>
                        <th>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr key={`item-row-${item.id}`}>
                                <td>
                                    {item.item}
                                </td>
                                <td>
                                    {item.amount}
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col">
                                            <button
                                                className="btn btn-primary w-100"
                                                onClick={() => {
                                                    navigate(`/expenses/${item.id}`);
                                                }}
                                            >
                                                Show
                                            </button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default ExpenseList;