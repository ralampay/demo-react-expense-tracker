import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { getAll } from './services/ExpensesService';

const ExpenseList = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentId, setCurrentId] = useState(-1);
    const [items, setItems] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAll().then((response) => {
            setItems(response.data);
        }).catch((response) => {
            alert("error!");
            console.log(response);
        })
    }, [])

    return (
        <React.Fragment>
            <Modal
                show={isModalOpen}
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
                        onClick={() => {
                            props.deleteItem(currentId);
                            setIsModalOpen(false);
                        }}
                    >
                        Yes
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            setIsModalOpen(false);
                        }}
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