import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getCurrentUser,
    destroySession
} from './services/UsersService';

const Header = () => {
    const navigate = useNavigate();

    console.log(getCurrentUser())

    return (
        <React.Fragment>
            <ul>
                <li>
                    Hello {getCurrentUser().username}
                </li>
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
                <li>
                    <button
                        onClick={() => {
                            destroySession();
                            window.location.reload();
                        }}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Header;