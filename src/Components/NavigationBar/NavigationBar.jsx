import React, { Component } from 'react';


import Logo from '../../Assets/images/logo/Logo.png';

import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import HomeScreenComponent from '../HomeScreen/HomeScreen';
import AboutScreenComponent from '../AboutScreen/AboutScreen';
import ShopScreenComponent from '../ShopScreen/ShopScree';
import offersComponent from '../Offers/offers';
import BlogScreenComponent from '../BlogScreen/BlogScreen';
import ContactScreenComponent from '../ContactScreen/ContactScreen';
import LoginScreenComponent from '../LoginScreen/LoginScreen';
import RegisterScreenComponent from '../RegisterScreen/Registration';

import './Navbar.scss';

import config from '../../FireBaseControler/firebaseConfig';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import UserShopScree from '../ShopScreen/userShop/UserShop';
import Footer from '../Footer/Footer';
import Checkout from '../CheckOut/Checkout';
import Exit from '../CheckOut/Exit/Exit';
import OrderList from '../ShopScreen/OrderList';
import AddOffers from '../Offers/AddOffers';

export default class NavigationBar extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            setIsOpen: false,
            svgColor: "#ecf0f1",
            pathname: "",
            isPerson: true,
        }
    }

    handleLogout = ({ history }) => {
        this.setState({
            isOpen: false,
            setIsOpen: false
        });
        sessionStorage.clear();
        config.auth().signOut();
        return <Redirect to="/" />
    }

    // componentDidUpdate() {
    //     this.setState({ isPerson: window.location.pathname != '/login' });
    //     this.setState({ isPerson: window.location.pathname != '/register' });
    // }



    render() {

        // sessionStorage.clear();
        // config.auth().signOut();
        let navFontColor = "#343A40";

        return (
            <Router>
                <div className="mainBody">
                    {window.location.pathname !== '/login' ? window.location.pathname !== '/register' ? window.location.pathname !== '/checkout/exit' ? <div className="navBody sticky-top">
                        <nav className="navbar container sticky-top horizontelNav navbar-expand">
                            <div className="brandDetails">
                                <center>
                                    <Link className="navbar-brand" to="/">
                                        <img src={Logo} alt="RT" height='70px' />
                                    </Link>
                                </center>
                            </div>
                            <div className="w-100 mt-3 container">
                                <ul className="navbar-nav nav w-100 verticalNavItems">

                                    <OverlayTrigger
                                        key="bottom"
                                        placement="bottom"
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                home
                                            </Tooltip>
                                        }
                                    >
                                        <li variant="secondary" className="nav-item navItem" onClick={() => window.location.reload(true)}>
                                            <Link
                                                className="nav-link"
                                                to="/"
                                                style={{ color: navFontColor }}
                                            >
                                                <div className="font">
                                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key="bottom"
                                        placement="bottom"
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                shop
                                            </Tooltip>
                                        }
                                    >
                                        <li variant="secondary" className="nav-item navItem" onClick={() => window.location.reload(true)}>
                                            <Link
                                                className="nav-link"
                                                to="shop"
                                                style={{ color: navFontColor }}
                                            >
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
                                    </OverlayTrigger>


                                    {/* <li className="nav-item navItem" onClick={() => window.location.reload(true)}>
                                        <Link className="nav-link" to="/offers" style={{ color: navFontColor }}>
                                            <div className="font">
                                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-file-earmark-break" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M9 1H4a2 2 0 0 0-2 2v6h1V3a1 1 0 0 1 1-1h5v2.5A1.5 1.5 0 0 0 10.5 6H13v3h1V6L9 1zm5 11h-1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1H2v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1zM0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                            </div>
                                        </Link>
                                    </li> */}
                                    <OverlayTrigger
                                        key="bottom"
                                        placement="bottom"
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                Offers
                                            </Tooltip>
                                        }
                                    >
                                        <li variant="secondary" className="nav-item navItem" onClick={() => window.location.reload(true)}>
                                            <Link className="nav-link" to="/offers" style={{ color: navFontColor }}>
                                                <div className="font">
                                                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-file-earmark-break" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M9 1H4a2 2 0 0 0-2 2v6h1V3a1 1 0 0 1 1-1h5v2.5A1.5 1.5 0 0 0 10.5 6H13v3h1V6L9 1zm5 11h-1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1H2v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1zM0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
                                                    </svg>
                                                </div>
                                            </Link>
                                        </li>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        key="bottom"
                                        placement="bottom"
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                about
                                            </Tooltip>
                                        }
                                    >
                                        <li variant="secondary" className="nav-item navItem" onClick={() => window.location.reload(true)}>
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
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        key="bottom"
                                        placement="bottom"
                                        overlay={
                                            <Tooltip id={`tooltip-bottom`}>
                                                contact
                                            </Tooltip>
                                        }
                                    >
                                        <li variant="secondary" className="nav-item navItem" onClick={() => window.location.reload(true)}>
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
                                    </OverlayTrigger>
                                    <li className="nav-item dropdown">
                                        <div
                                            className="nav-link font seatings dropdown-toggle"
                                        >
                                            <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            </svg>
                                        </div>
                                        <div className="dropdown-menu w-100">
                                            {!sessionStorage.getItem('email') ? <li className="nav-item w-100" onClick={() => window.location.reload(true)}>
                                                <Link className="nav-link dropdown-item" to='/login' onClick={this.handleModelShow} style={{ color: navFontColor }} >
                                                    <div className="font hotizontalNavSvg row">
                                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi col-5 bi-door-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M1 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM11.5 2H11V1h.5A1.5 1.5 0 0 1 13 2.5V15h-1V2.5a.5.5 0 0 0-.5-.5z" />
                                                            <path fillRule="evenodd" d="M10.828.122A.5.5 0 0 1 11 .5V15h-1V1.077l-6 .857V15H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117z" />
                                                            <path d="M8 9c0 .552.224 1 .5 1s.5-.448.5-1-.224-1-.5-1-.5.448-.5 1z" />
                                                        </svg>
                                                        <div className="col-7">Login</div>
                                                    </div>
                                                </Link>
                                            </li> : null}
                                            {!sessionStorage.getItem('email') ? <li className="nav-item w-100 " onClick={() => window.location.reload(true)}>
                                                <Link className="nav-link dropdown-item" to="/register" style={{ color: navFontColor }}>
                                                    <div className="font hotizontalNavSvg row">
                                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi col-5 bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                        </svg>
                                                        <div className="col-7">Register</div>
                                                    </div>
                                                </Link>
                                            </li>
                                                : null}
                                            {sessionStorage.getItem('email') ?
                                                <li className="nav-item ">
                                                    <Link className="nav-link dropdown-item" onClick={this.handleLogout} style={{ color: navFontColor }} >
                                                        <div className="font">Logout</div>
                                                    </Link>
                                                </li>
                                                : null}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                        : <></> : <></> : <></>}
                    <div className="page-content p-0 m-0" id="content">

                        <Route exact path='/' component={HomeScreenComponent} />
                        <Route exact path="/about" component={AboutScreenComponent} />
                        {sessionStorage.getItem("admin") === 'true' ? <Route exact path="/shop" component={ShopScreenComponent} /> : <Route exact path="/shop" component={UserShopScree} />}
                        <Route exact path="/offers" component={offersComponent} />
                        <Route exact path="/blog" component={BlogScreenComponent} />
                        <Route exact path="/contact" component={ContactScreenComponent} />
                        <Route exact path="/login" component={LoginScreenComponent} />
                        <Route exact path="/register" component={RegisterScreenComponent} />
                        <Route exact path="/checkout/exit" component={Exit} />
                        <Route exact path="/checkout" component={Checkout} />
                        {sessionStorage.getItem("admin") === 'true' ? <Route exact path="/offers/add" component={AddOffers} /> : null}
                        {sessionStorage.getItem("admin") === 'true' ? <Route exact path="/shop/orderList/:id" component={OrderList} /> : null}
                    </div>
                </div>
            </Router >
        );
    }
}