import React, { Component } from 'react';

import Styles from './Exit.module.scss'
import './Exit.css'
import logo from '../../../Assets/images/logo/Logo.png'
import { dataBase, db } from '../../../FireBaseControler/firebaseConfig';

class Exit extends Component {
    constructor(props) {
        var today = new Date(),

            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
        super(props);
        this.state = {
            orderid: this.props.orderid,
            orderData: [],
            product: [],
            dTime: date,
        }
    }

    componentDidMount() {
        dataBase.collection("Order").doc(sessionStorage.getItem("orderId")).get().then((data) => {
            this.setState({ orderData: data.data() });
        });
        const cartRef = db.ref(`Order/${sessionStorage.getItem(`orderId`)}/products`);
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
            this.setState({ product: newState });
        });
        // setInterval(() => {
        //     this.setState({
        //         curTime: new Date().toLocaleString()
        //     })
        // }, 1000)
    }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    render() {
        const data = this.state.orderData;
        const product = this.state.product;
        let totel = 0;
        // console.log(product);
        product.map(details => {
            // console.log(details);
            totel = (parseFloat(totel) + (parseFloat(details.price) * parseFloat(details.count))).toFixed(3)
            // console.log("this.state.totel");
            // product = temp;
        })
        return (
            <div style={{ overflow: "hidden", overflowY: "visible", width: "100vw", height: "100vh" }}>
                <div class="invoice-box">
                    <table cellpadding="0" cellspacing="0">
                        <tr class="top">
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td class="title">
                                            <img src={logo} style={{ width: "20%" }} />
                                        </td>
                                        <td>
                                            Invoice #: {sessionStorage.getItem("orderId")}<br />
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr class="information">
                            <td colspan="2">
                                <table>
                                    <tr>
                                        <td>
                                            RootTree, Inc.<br />
                                                12345 Sunny Road<br />
                                                Sunnyville, CA 12345
                                            </td>
                                        <td>
                                            {data.name}<br />
                                            {data.email}<br />
                                            {data.address}
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>

                        <tr class="heading">
                            <td>Payment Method </td>

                            <td>Arriving Time(YY-MM-DD)</td>
                        </tr>
                        <tr class="details">
                            <td>{data.paymode}</td>
                            <td>{this.state.dTime}</td>
                        </tr>

                        <tr class="heading">
                            <td>
                                Item
                                </td>
                            {/* <td>
                                    quantity
                                </td> */}
                            <td>
                                Price ($)
                                </td>
                        </tr>
                        {
                            // console.log(product)
                            product.map(details => {
                                return (
                                    <tr class="item">
                                        <td>
                                            {details.name}
                                        </td>
                                        {/* <td>
                                                ${details.count}
                                            </td> */}
                                        <td>
                                            ${(parseFloat(details.price) * parseFloat(details.count)).toFixed(3)}
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        <tr class="total">
                            <td>
                            </td>

                            <td>
                                Total: ${totel}
                            </td>
                        </tr>
                    </table>
                </div>
                <div style={{ transform: "scale(.5)" }}>
                    <div class="container-fluid" onClick={() => { window.print() }}>
                        <div class="row">
                            <div id="ms-container">
                                <label for="ms-download">
                                    <div class="ms-content">
                                        <div class="ms-content-inside">
                                            <input type="checkbox" id="ms-download" />
                                            <div class="ms-line-down-container">
                                                <div class="ms-line-down"></div>
                                            </div>
                                            <div class="ms-line-point"></div>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Exit;