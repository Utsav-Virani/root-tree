import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import LoginStyle from './LoginScreen.module.scss';
import { AuthContext } from '../../FireBaseControler/AuthenticationProvider';
import config from '../../FireBaseControler/firebaseConfig';
// import GoogleLogo from '../../Assets/images/logo/googleLogo2.png';
// import firebase from 'firebase';

const LoginScreen = ({ history }) => {



    const handleFormSubmit = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            sessionStorage.setItem('email', email.value);
            try {
                await config
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push('/');

            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    // const handleGoogleSignIn = () => {
    //     var provider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth().signInWithPopup(provider).then(function (result) {
    //         // var token = result.credential.accessToken;
    //         var user = result.user;
    //         console.log(user);
    //         sessionStorage.setItem('email', user.email);
    //     }).catch(function (error) {
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         var email = error.email;
    //         var credential = error.credential;
    //         alert(errorCode + "\n" + errorMessage + "\n" + email + "\n" + credential);
    //     });
    // }

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
            {/* <div className="display-3">Login</div>
            <div className={`${LoginStyle.formContent}`}>
                <form onSubmit={handleFormSubmit} className={`${LoginStyle.loginForm}`} >
                    <div className={`${LoginStyle.formGrp}`}>
                        <div className={`form-group`}>
                            <input type="email" name="email" id="email"
                                placeholder="Email"
                                autoComplete="off"
                                className={`${LoginStyle.inputFormControl} form-control`}
                            />
                        </div>
                        <div className={`form-group`}>
                            <input type="password" name="password" id="password"
                                placeholder="Password"
                                autoComplete="off"
                                className={`${LoginStyle.inputFormControl} form-control`}
                            />
                        </div>
                    </div>
                    <div className={`${LoginStyle.formGrp} form-group`}>
                        <button type="submit" className={`${LoginStyle.submitBtn} form-control btn btn-outline-success`}>Submit</button>
                    </div>
                </form>
            </div> */}

            <div className={`${LoginStyle.loginBg} container-fluid h-100`}>
                <div className="row no-gutter h-100">
                    <div className={`${LoginStyle.bg_primary} col-md-6 d-none d-md-flex h-100 d-flex justify-content-center align-items-center`}>
                        {/* <img src={Logo} height="300px" alt=""/> */}
                    </div>
                    <div className={`${LoginStyle.formContent} col-md-6 h-100`}>
                        <div className="login d-flex align-items-start">
                            <div className="container">
                                <h3 className="display-4 mb-4 d-flex justify-content-center">
                                    <div>Sign In!</div>
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
                                            className={`${LoginStyle.formGroupControl} form-control rounded-pill border-0 shadow-sm px-4`}
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
                                    <button type="submit" className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
                                </form>
                                {/* <div className="d-flex justify-content-between mt-4">
                                    <div
                                        className={`${LoginStyle.googleLogo}`}
                                        onClick={handleGoogleSignIn}
                                    >
                                        <img src={GoogleLogo} height="50px" alt="" />
                                    </div>
                                </div> */}
                                <div className="text-center d-flex justify-content-between mt-4">
                                    <p>
                                        <a href=" " className={`${LoginStyle.needHelpColor} font-italic`}>
                                            <u>Need Help?</u>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(LoginScreen);