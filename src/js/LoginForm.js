import React, { useState } from 'react';
import {
    login,
    createSession
} from './services/UsersService';

const LoginForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <React.Fragment>
            <div className="container bg-primary">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <center>
                                    <h1>
                                        Login Form
                                    </h1>
                                </center>
                                <div className="form-group">
                                    <label>
                                        Username
                                    </label>
                                    <input
                                        className="form-control"
                                        value={username}
                                        disabled={isSubmitting}
                                        onChange={(event) => {
                                            setUsername(event.target.value);
                                        }}
                                    />
                                </div>        
                                <div className="form-group mt-4">
                                    <label>
                                        Password
                                    </label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        disabled={isSubmitting}
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                    />
                                </div>        
                                <hr/>
                                {(() => {
                                    if (isSubmitting) {
                                        return (
                                            <center>
                                                <div className="lds-ripple"><div></div><div></div></div>
                                            </center>
                                        )
                                    }
                                })()}
                                <button
                                    className="btn btn-success w-100"
                                    disabled={isSubmitting}
                                    onClick={() => {
                                        setIsSubmitting(true);

                                        let payload = {
                                            username: username,
                                            password: password
                                        }

                                        console.log(payload);

                                        login(payload).then((response) => {
                                            console.log(response.data);
                                            createSession(response.data);
                                            window.location.reload();
                                        }).catch((response) => {
                                            alert("Invalid login");
                                            console.log(response);
                                        });
                                    }}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginForm;