import React, { useState } from 'react';

const ExpenseList = () => {

    const [items, setItems] = useState([
        { id: 1, name: "Item A", amount: 100.0 },
        { id: 2, name: "Item B", amount: 200.0 },
        { id: 3, name: "Item C", amount: 300.0 }
    ]);

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
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        return (
                            <tr key={`item-row-${item.id}`}>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.amount}
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