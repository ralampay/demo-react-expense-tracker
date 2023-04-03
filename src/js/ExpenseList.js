import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const ExpenseList = (props) => {
    return (
        <React.Fragment>
            <Modal
                show={false}
            >
                <Modal.Header>
                    <Modal.Title>
                        Confirmation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Are you sure?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="btn btn-success"
                    >
                        Yes
                    </button>
                    <button
                        className="btn btn-danger"
                    >
                        No
                    </button>
                </Modal.Footer>
            </Modal>
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
                                            props.deleteItem(item.id);
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