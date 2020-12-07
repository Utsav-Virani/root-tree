import React, { Component, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { dataBase, db } from '../../FireBaseControler/firebaseConfig';
import Style from './Checkout.module.scss'
import firebase from 'firebase'

import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';


const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartdata: [],
            cartCost: 0,
            orderId: "",
            emailValid: false,
            selectedValue: '',
            errors: {
                fullName: '',
                email: '',
                password: '',
            }
        }
    }

    componentDidMount() {
        const cartRef = db.ref(`Cart/${sessionStorage.getItem(`userId`)}`);
        cartRef.on('value', (snap) => {
            let word = snap.val();
            let newState = [];
            for (let data in word) {
                newState.push({
                    name: word[data].name,
                    price: word[data].price,
                    url: word[data].url,
                    count: word[data].count,
                })
            }
            this.setState({ cartdata: newState });
        })
    }

    handleChange = (event) => {
        const validEmailRegex = RegExp(
            /^[0-9]+$/
        );
        const mn = event.target.value;
        // console.log(mn);
        // console.log(validEmailRegex.test(mn));
        let errors = this.state.errors;
        this.setState({ emailValid: validEmailRegex.test(mn) });
        // console.log(this.state.emailValid);
        errors.email = validEmailRegex.test(mn) ? '' : 'Mobile No. is not valid!';
    }

    handleChangeRadio = (event) => {
        this.setState({ selectedValue: event.target.value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();

        const { name, email, mobn, address } = event.target.elements;
        // console.log(name.value);
        // console.log(email.value);
        // console.log(mobn.value);
        // console.log(address.value);
        dataBase.collection("Order").add({
            uid: sessionStorage.getItem("userId"),
            name: name.value,
            email: email.value,
            mobno: mobn.value,
            address: address.value,
            paymode: this.state.selectedValue,
            products: this.state.cartdata,
            totelPay: parseFloat(this.state.cartCost).toFixed(2),
            delivered: false,
        }).then(function(docRef) {
            sessionStorage.setItem("orderId",docRef.id)
        });
        db.ref('Order').child(sessionStorage.getItem("orderId")).set({
            uid: sessionStorage.getItem("userId"),
            name: name.value,
            email: email.value,
            mobno: mobn.value,
            address: address.value,
            paymode: this.state.selectedValue,
            products: this.state.cartdata,
            totelPay: parseFloat(this.state.cartCost).toFixed(2),
            delivered: false,
        })
        this.props.history.push(`/checkout/exit`);
        // return <Redirect to="/checkout/exit" />
    }

    render() {
        if (!sessionStorage.getItem("email")) {
            return <Redirect to="/"/>;
        }
        const { errors } = this.state;
        return (
            <div className={`${Style.container}`}>
                <div className={`${Style.contBg}`}>
                    <div to="checkout" className={`${Style.cartContHeader}`}>
                        <span>Thanks For Shoping  :)</span>
                    </div>
                    <div className={`${Style.cartContainer}`}>
                        <div className={`${Style.cartCont}`}>
                            {
                                this.state.cartdata.map(data => {
                                    const cost = parseFloat(data.count) * parseFloat(data.price);
                                    // console.log(data.name ,"-> ",cost);
                                    return (
                                        <div className={`${Style.cartContInner}`}>
                                            <div data-letter={cost} onLoad={() => {
                                                this.setState((prevState, { cartCost }) => ({
                                                    cartCost: prevState.cartCost + cost
                                                }));
                                            }}>
                                                {/* <svg width="2rem" height="2rem" viewBox="0 0 17 16" class="bi bi-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M14.002 2h-12a1 1 0 0 0-1 1v9l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15.002 9.5V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg> */}
                                                <img src={data.url} height="80px" width="80px" alt="" />
                                            </div>
                                            {/* <img src="" height="2rem" width="2rem" alt=""/> */}
                                            <div width="70%" className={`${Style.name}`}>
                                                <div style={{ fontSize: "24px", textTransform: 'capitalize' }}>Name : {data.name}</div>
                                                <div>Items : {data.count}</div>
                                            </div>
                                            <h5 width="15%">($){data.price}</h5>
                                        </div>
                                    );
                                })
                            }
                            <div className={`${Style.cartContInner}`}>
                                <div>
                                    {/* <svg width="2rem" height="2rem" viewBox="0 0 17 16" class="bi bi-image" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M14.002 2h-12a1 1 0 0 0-1 1v9l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15.002 9.5V3a1 1 0 0 0-1-1zm-12-1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm4 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                        </svg> */}
                                    {/* <img src={data.url} height="80px" width="80px" alt="" /> */}
                                </div>
                                {/* <img src="" height="2rem" width="2rem" alt=""/> */}
                                <div width="70%" className={`${Style.name}`}>
                                    <div style={{ fontSize: "24px", fontFamily: "MontserratBold", textTransform: 'capitalize' }}>
                                        Totel Amount To Pay :
                                    </div>
                                    {/* <div>Items : {data.count}</div> */}
                                </div>
                                <div style={{ fontSize: "24px", fontFamily: "MontserratBold", textTransform: 'capitalize' }} width="15%">
                                    ($){parseFloat(this.state.cartCost).toFixed(2)}
                                </div>
                            </div>
                        </div>
                        <div className={`${Style.cartUserData}`}>
                            <div className={`${Style.userProfile}`}>
                                <svg width="6em" height="6em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="#656565" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                </svg>
                                <div></div>
                            </div>
                            <form onSubmit={this.handleFormSubmit} className={`${Style.userData}`}>
                                <div className={`${Style.formGroupControlContainer} form-group`}>
                                    {/* Name : */}
                                    <input
                                        id="inputName"
                                        type="name"
                                        value={sessionStorage.getItem("name")}
                                        name="name"
                                        placeholder="Name"
                                        required="true"
                                        autoFocus=""
                                        autoComplete="off"
                                        className={`${Style.formGroupControl} form-control col-sm-10`}
                                    />
                                </div>
                                <div className={`${Style.formGroupControlContainer} form-group`}>
                                    {/* E-Mail : */}
                                    <input
                                        id="inputEmail"
                                        type="email"
                                        value={sessionStorage.getItem("email")}
                                        name="email"
                                        placeholder="E-mail"
                                        required="true"
                                        autoFocus=""
                                        autoComplete="off"
                                        className={`${Style.formGroupControl} form-control`}
                                    />
                                </div>
                                <div className={`${Style.formGroupControlContainer} form-group`}>
                                    {/* Mobile No. : */}
                                    <input
                                        id="inputMn"
                                        type="phone"
                                        name="mobn"
                                        placeholder="Mobile No."
                                        required="true"
                                        minLength="10"
                                        maxLength="10"
                                        npValidate
                                        autoFocus=""
                                        autoComplete="off"
                                        onChange={this.handleChange}
                                        className={`${Style.formGroupControl} form-control`}
                                    />
                                    {!this.state.emailValid ? <span className={`${Style.error}`}>{errors.email}</span> : null}
                                </div>
                                <div className={`${Style.formGroupControlContainer} form-group`}>
                                    {/* Address : */}
                                    <textarea
                                        name="address"
                                        id="address"
                                        cols="30"
                                        rows="1"
                                        placeholder="Address"
                                        required="true"
                                        autoFocus=""
                                        autoComplete="off"
                                        className={`${Style.formGroupControl} form-control`}
                                    ></textarea>
                                </div>
                                <div className={`${Style.formGroupControlContainer} form-group`}>
                                    Payment Method :
                                   <div>
                                        <div>
                                            <GreenRadio
                                                checked={this.state.selectedValue === 'cod'}
                                                onChange={this.handleChangeRadio}
                                                value="cod"
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'COD' }}
                                            />COD
                                        </div>
                                        {/* <div>
                                            <GreenRadio
                                                checked={this.state.selectedValue === 'dbt'}
                                                onChange={this.handleChangeRadio}
                                                value="dbt"
                                                disabled
                                                name="radio-button-demo"
                                                inputProps={{ 'aria-label': 'Debit Card' }}
                                            />Debit Card
                                        </div> */}
                                    </div>
                                    {/* {this.state.selectedValue} */}
                                </div>
                                <button type="submit" className={`${Style.cartContFooter}`}>
                                    <span>
                                        Proceed TO Check-Out
                                        {/* <a href="/checkout/exit">Proceed TO Check-Out</a> */}
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className={`${Style.custom_shape}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                <path fill="#388E3C" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={`${Style.custom_fill}`}></path>
                                <path fill="#388E3C" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={`${Style.custom_fill}`}></path>
                                <path fill="#388E3C" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={`${Style.custom_fill}`}></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;