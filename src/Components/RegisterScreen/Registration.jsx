import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import SignUpStyle from './SignUp.module.scss';
import { AuthContext } from '../../FireBaseControler/AuthenticationProvider';
import config from '../../FireBaseControler/firebaseConfig';
import {dataBase} from '../../FireBaseControler/firebaseConfig';
import { error } from 'jquery';

const Registration = ({ history }) => {

    const handleFormSubmit = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            sessionStorage.setItem('email', email.value);
            try {
                await config
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);

                const db = dataBase.collection("user").add({
                    "email": email.value,
                    "pass" : password.value,
                }).then(docRef => console.log(docRef.id))
                .catch(error => console.log(error))

                sessionStorage.setItem('email', email.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        // console.log(currentUser);
        return <Redirect to="/" />;
    }

    // const handleUnChange = event => {
    //     this.setState({
    //         userName: event.target.value
    //     });
    // }

    // const handlePassChange = event => {
    //     this.setState({
    //         password: event.target.value
    //     });
    // }
    return (
        <React.Fragment>
            <div className={`${SignUpStyle.loginBg} container-fluid h-100`}>
                <div className="row no-gutter h-100">
                    <div className={`${SignUpStyle.formContent} col-md-12 h-100`}>
                        <div className="login d-flex align-items-center">
                            <div className="container">
                                <h3 className="display-4 mb-4 mt-5 d-flex justify-content-center">
                                    <div>Sign Up!</div>
                                </h3>
                                {/* <p className="text-muted mb-4">Create a login split page using Bootstrap 4.</p> */}
                                <form onSubmit={handleFormSubmit}>
                                    <div className="form-group mb-3">
                                        <input
                                            id="inputEmail"
                                            type="email"
                                            name="email"
                                            placeholder="Email address"
                                            required=""
                                            autoFocus=""
                                            autoComplete="off"
                                            className={`${SignUpStyle.formGroupControl} form-control rounded-pill border-0 shadow-sm px-4`}
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input
                                            id="inputPassword"
                                            type="password"
                                            name="password"
                                            autoComplete="off"
                                            placeholder="Password"
                                            required=""
                                            className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Registration);