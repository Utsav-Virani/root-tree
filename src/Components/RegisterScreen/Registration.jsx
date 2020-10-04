import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import SignUpStyle from './SignUp.module.scss';
import { AuthContext } from '../../FireBaseControler/AuthenticationProvider';
import config from '../../FireBaseControler/firebaseConfig';
import { dataBase } from '../../FireBaseControler/firebaseConfig';

const Registration = ({ history }) => {

    const handleFormSubmit = useCallback(
        async event => {
            event.preventDefault();
            const { email, password, fname, lname } = event.target.elements;
            try {
                await config
                    .auth()
                    .createUserWithEmailAndPassword(email.value, password.value);

                dataBase.collection("user").add({
                    "firstName": fname.value,
                    "lastName": lname.value,
                    "email": email.value,
                    "pass": password.value,
                    "admin": false,
                }).then(
                    doc => {
                        sessionStorage.setItem('userId', doc.id);
                    }).catch(error => console.log(error))


                sessionStorage.setItem('email', email.value);
                // if(email.value === "admin@gmail.com"){
                //     sessionStorage.setItem('admin', true );
                // }else{
                sessionStorage.setItem('admin', false);
                // }
                sessionStorage.setItem('name', fname.value);
                history.push('/');
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }
    return (
        <React.Fragment className="h-100 w-100">
            <div className={`${SignUpStyle.wrapper}`}>
                <div className={`${SignUpStyle.link_wrapper}`}>
                    <a href='\'>To Home!</a>
                    <div className={`${SignUpStyle.icon}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                            <path transform="rotate(180 134.4166259765625,134.41598510742188) " id="svg_1" d="m265.17,125.577l-80,-80c-4.88,-4.88 -12.796,-4.88 -17.677,0c-4.882,4.882 -4.882,12.796 0,17.678l58.66,58.66l-213.653,0c-6.903,0 -12.5,5.598 -12.5,12.5c0,6.903 5.597,12.5 12.5,12.5l213.654,0l-58.66,58.662c-4.88,4.882 -4.88,12.796 0,17.678c2.44,2.44 5.64,3.66 8.84,3.66s6.398,-1.22 8.84,-3.66l79.997,-80c4.883,-4.882 4.883,-12.796 0,-17.678l-0.001,0z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className={`${SignUpStyle.loginBg} container-fluid row`}>
                <div className={`${SignUpStyle.logincont} col-5`}>
                    <div className={`${SignUpStyle.loginTxt} my-3`}><span>S</span>ignup</div>
                    <div className={`${SignUpStyle.signupTxt}`}>Have account ?<span><a href="/login">SIGNIN</a></span></div>
                    <div className={`${SignUpStyle.line1}`}></div>
                    <div className={`${SignUpStyle.line2}`}></div>
                    <div className={`${SignUpStyle.line3}`}></div>
                </div>
                <form onSubmit={handleFormSubmit} className={`${SignUpStyle.frmContent} mt-5 col-7`}>
                    <div className={`form-group mb-3 w-100`}>
                        <div className={`${SignUpStyle.names} w-50`}>
                            <input
                                id="inputEmail"
                                type="text"
                                name="fname"
                                placeholder="First Name"
                                required=""
                                autoFocus=""
                                autoComplete="off"
                                className={`${SignUpStyle.formGroupControl} mr-2 form-control`}
                            />
                            <input
                                id="inputEmail"
                                type="text"
                                name="lname"
                                placeholder="Last Name"
                                required=""
                                autoFocus=""
                                autoComplete="off"
                                className={`${SignUpStyle.formGroupControl} form-control`}
                            />
                        </div>
                    </div>
                    <div className="form-group mb-3 w-100">
                        <input
                            id="inputEmail"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            required=""
                            autoFocus=""
                            autoComplete="off"
                            className={`${SignUpStyle.formGroupControl} form-control`}
                        />
                    </div>
                    <div className="form-group mb-3 w-100">
                        <input
                            id="inputPassword"
                            type="password"
                            name="password"
                            autoComplete="off"
                            placeholder="Password"
                            required=""
                            className={`${SignUpStyle.formGroupControl} form-control`}
                        />
                    </div>
                    <div className="form-group d-flex justify-content-center w-50 mt-2">
                        <button
                            type="submit"
                            className={`${SignUpStyle.submitBtn}`}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                {/* <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
               <path
                  fill="#43A047"
                  fill-opacity="1"
                  d="M0,96L30,106.7C60,117,120,139,180,128C240,117,300,75,360,90.7C420,107,480,181,540,192C600,203,660,149,720,133.3C780,117,840,139,900,165.3C960,192,1020,224,1080,218.7C1140,213,1200,171,1260,144C1320,117,1380,107,1410,101.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
               ></path>
            </svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2E7D32" fillOpacity="1" d="M0,64L30,74.7C60,85,120,107,180,133.3C240,160,300,192,360,208C420,224,480,224,540,218.7C600,213,660,203,720,186.7C780,171,840,149,900,160C960,171,1020,213,1080,208C1140,203,1200,149,1260,133.3C1320,117,1380,139,1410,149.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#43A047" fillOpacity="1" d="M0,224L30,213.3C60,203,120,181,180,186.7C240,192,300,224,360,224C420,224,480,192,540,181.3C600,171,660,181,720,202.7C780,224,840,256,900,266.7C960,277,1020,267,1080,272C1140,277,1200,299,1260,277.3C1320,256,1380,192,1410,160L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Registration);