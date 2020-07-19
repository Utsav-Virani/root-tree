import React, { Component } from 'react';
import Logo from '../../images/Logo/logo.png';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HomeScreenComponent from '../HomeScreen/HomeScreen';
import AboutScreenComponent from '../AboutScreen/AboutScreen';
import ShopScreenComponent from '../ShopScreen/ShopScree';
import PageScreenComponent from '../PageScreen/PageScreen';
import BlogScreenComponent from '../BlogScreen/BlogScreen';
import ContactScreenComponent from '../ContactScreen/ContactScreen';
import LoginScreenComponent from '../LoginScreen/LoginScreen';
import RegisterScreenComponent from '../RegisterScreen/Registration';

import './Navbar.scss';

import config from '../../FireBaseControler/firebaseConfig';

// import ProfilePhoto from '../../images/User Profile/icons8-male-user-100.png';

export default class NavigationBar extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            setIsOpen: false,
            svgColor: "#ecf0f1"
        }
    }

    handleModelShow = () => {
        this.setState({
            isOpen: true,
            setIsOpen: true
        });
    }

    handleModelHide = () => {
        this.setState({
            isOpen: false,
            setIsOpen: false
        });
    }

    handleLogout = ({ history }) => {
        this.setState({
            isOpen: false,
            setIsOpen: false
        });
        sessionStorage.removeItem('email');
        config.auth().signOut();
    }

    render() {

        let navFontColor = "#343A40";


        // window.location.reload(true);

        return (
            // <AuthenticationProvider>
            <Router>
                <div className="mainBody">
                    <nav className="navbar horizontelNav navbar-expand sticky-top">
                        <div className="brandDetails">
                            <center>
                                <Link className="navbar-brand" to="/">
                                    <img src={Logo} alt="RT" height='70px' />
                                </Link>
                            </center>
                        </div>
                        <div className="row w-100">
                            <div className="row row_one col-12 w-100">
                                {/* <form className="navbar-form">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit">
                                                <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                                                    <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </form> */}
                                <ul className="navbar-nav horizontelNavItems">
                                    {!sessionStorage.getItem('email') ? <li className="nav-item pr-5">
                                        <Link className="nav-link" to='/login' onClick={this.handleModelShow} style={{ color: navFontColor }} >
                                            <div className="font hotizontalNavSvg">
                                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-door-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z" />
                                                    <path fillRule="evenodd" d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z" />
                                                    <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z" />
                                                </svg>
                                        Login</div>
                                        </Link>
                                    </li> : null}
                                    {!sessionStorage.getItem('email') ? <li className="nav-item pr-3">
                                        <Link className="nav-link" to="/register" style={{ color: navFontColor }}>
                                            <div className="font hotizontalNavSvg">
                                                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                </svg>
                                        Register</div>
                                        </Link>
                                    </li>
                                        : null}
                                    {sessionStorage.getItem('email') ?
                                        <li className="nav-item pr-5">
                                            <Link className="nav-link" onClick={this.handleLogout} style={{ color: navFontColor }} >
                                                <div className="font">Logout</div>
                                            </Link>
                                        </li>
                                        : null}
                                </ul>
                            </div>
                            <div className="row w-100 col-12 mt-3">
                                <ul className="navbar-nav nav w-100 verticalNavItems">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" style={{ color: navFontColor }}>
                                            <div className="font">
                                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="about" style={{ color: navFontColor }}>
                                            <div className="font">
                                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-info-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
                                                    <circle cx="8" cy="4.5" r="1" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="shop" style={{ color: navFontColor }}>
                                            <div className="font">
                                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-shop-window" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M3.12 1.175A.5.5 0 0 1 3.5 1h9a.5.5 0 0 1 .38.175l2.759 3.219A1.5 1.5 0 0 1 16 5.37v.13h-1v-.13a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.13H0v-.13a1.5 1.5 0 0 1 .361-.976l2.76-3.22z" />
                                                    <path d="M2.375 6.875c.76 0 1.375-.616 1.375-1.375h1a1.375 1.375 0 0 0 2.75 0h1a1.375 1.375 0 0 0 2.75 0h1a1.375 1.375 0 1 0 2.75 0h1a2.375 2.375 0 0 1-4.25 1.458 2.371 2.371 0 0 1-1.875.917A2.37 2.37 0 0 1 8 6.958a2.37 2.37 0 0 1-1.875.917 2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.5h1c0 .76.616 1.375 1.375 1.375z" />
                                                    <path d="M4.75 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm3.75 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm3.75 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM2 8.854V15h12V8.854a3.354 3.354 0 0 0 1-.27V15h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V8.583c.311.14.647.232 1 .271zm0-1.008V7H1v.437c.291.207.632.35 1 .409zm13-.409c-.291.207-.632.35-1 .409V7h1v.437z" />
                                                    <path d="M4 13V9H3v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9h-1v4H4z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/page" style={{ color: navFontColor }}>
                                            <div className="font">
                                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-file-earmark-break" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M9 1H4a2 2 0 0 0-2 2v6h1V3a1 1 0 0 1 1-1h5v2.5A1.5 1.5 0 0 0 10.5 6H13v3h1V6L9 1zm5 11h-1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1H2v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1zM0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact" style={{ color: navFontColor }}>
                                            <div className="font">
                                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-headset" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M8 1a5 5 0 0 0-5 5v4.5H2V6a6 6 0 1 1 12 0v4.5h-1V6a5 5 0 0 0-5-5z" />
                                                    <path d="M11 8a1 1 0 0 1 1-1h2v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8zM5 8a1 1 0 0 0-1-1H2v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8z" />
                                                    <path fillRule="evenodd" d="M13.5 8.5a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 1-2.5 2.5H8a.5.5 0 0 1 0-1h3.5A1.5 1.5 0 0 0 13 12V9a.5.5 0 0 1 .5-.5z" />
                                                    <path d="M6.5 14a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* <div className="vertical-nav"> */}

                    {/* <div className="font seatings">
                            <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z" />
                                <path fillRule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z" />
                            </svg>
                        </div> */}
                    {/* </div> */}
                    <div className="page-content p-0" id="content">

                        <Route exact path='/' component={HomeScreenComponent} />
                        <Route exact path="/about" component={AboutScreenComponent} />
                        <Route exact path="/shop" component={ShopScreenComponent} />
                        <Route exact path="/page" component={PageScreenComponent} />
                        <Route exact path="/blog" component={BlogScreenComponent} />
                        <Route exact path="/contact" component={ContactScreenComponent} />
                        {/* <Route exact path="/logout" component={Logout} /> */}
                        <Route exact path="/login" component={LoginScreenComponent} />
                        <Route exact path="/register" component={RegisterScreenComponent} />
                    </div>
                </div>
                {/* <Modal

                    show={this.state.isOpen}
                    // show={true}
                    size="lg"
                    onHide={this.handleModelHide}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    backdrop="static"
                >
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <LoginScreenComponent />
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-outline-danger" onClick={this.handleModelHide}>Close</button>
                    </Modal.Footer>
                </Modal> */}
            </Router >
            // </AuthenticationProvider>
        );
    }
}

//  () => (
//     <Router>
//         <Route component={NavigationBar} />
//         <Route exact path="" component={HomeScreenComponent} />
//         <Route exact path="about" component={AboutScreenComponent} />
//         <Route exact path="shop" component={ShopScreenComponent} />
//         <Route exact path="page" component={PageScreenComponent} />
//         <Route exact path="blog" component={BlogScreenComponent} />
//         <Route exact path="contact" component={ContactScreenComponent} />
//         <Route exact path="login" component={LoginScreenComponent} />
//         <Route exact path="register" component={RegisterScreenComponent} />
//     </Router>
// );