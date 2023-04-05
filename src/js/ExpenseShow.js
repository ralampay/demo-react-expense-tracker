import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Show = () => {

    const navigate = useNavigate();

    let { id } = useParams(); 

    return (
        <React.Fragment>
            <h1>
                Show Page {id}
            </h1>
            <hr/>
            <button 
                className="btn btn-info w-100"
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