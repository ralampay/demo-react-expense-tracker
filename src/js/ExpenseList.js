import React, { useState } from 'react';

const ExpenseList = (props) => {
    return (
        <React.Fragment>
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
                    {props.items.map((item) => {
                        return (
                            <tr key={`item-row-${item.id}`}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.amount}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger w-100"
                                        onClick={() => {
                                            props.foo();
                                        }}
                                    >
                                        Delete
                                    </button>
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