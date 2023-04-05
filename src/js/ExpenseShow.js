import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchOne, remove as deleteItem } from './services/ExpensesService';
import { Modal } from 'react-bootstrap';

const Show = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expense, setExpense] = useState({
        id: "",
        item: "",
        amount: "",
        category_id: ""
    })

    const navigate = useNavigate();

    let { id } = useParams();

    useEffect(() => {
        fetchOne(id).then((response) => {
            setExpense(response.data);
        }).catch((response) => {
            alert("error")
            console.log(response)
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
                            deleteItem(id);
                            navigate('/');
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
            <h1>
                {expense.item}
            </h1>
            <h2 className="text-muted">
                {expense.amount}
            </h2>
            <hr/>
            <button
                className="btn btn-info w-100"
                onClick={() => {
                    navigate(`/expenses/${expense.id}/edit`);
                }}
            >
                Edit
            </button>
            <button
                className="btn btn-danger w-100"
                onClick={() => {
                    setIsModalOpen(true);
                }}
            >
                Delete
            </button>
            <button 
                className="btn btn-info w-100 mt-4"
                onClick={() => {
                    navigate('/');
                }}
            >
                Back
            </button>
        </React.Fragment>
    )
}

export default Show;