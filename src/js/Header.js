import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <ul>
                <li>
                    <button
                        onClick={() => {
                            console.log("Going home");
                            navigate('/');
                        }}
                    >
                        Home
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            console.log("Going to Create New Record");
                            navigate('/new');
                        }}
                    >
                        Create new Record
                    </button>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Header;