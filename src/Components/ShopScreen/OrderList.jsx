import { reaction, values } from 'mobx';
import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import Style from './OrderList.scss'
import { dataBase, db } from '../../FireBaseControler/firebaseConfig';

import logo from '../../Assets/images/logo/Logo.png';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const PurpleSwitch = withStyles({
    switchBase: {
        color: purple[300],
        '&$checked': {
            color: purple[500],
        },
        '&$checked + $track': {
            backgroundColor: purple[500],
        },
    },
    checked: {},
    track: {},
})(Switch);



class OrderList extends Component {
    constructor(props) {
        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + (today.getDate() + 1);
        super(props);
        this.state = {
            cartdata: [],
            product: [],
            id: null,
            dTime: date,
            deliver: false,
            cartCost: 0,
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({ id: id });
        const cartRef = db.ref(`Order/${id}`);
        cartRef.on('value', (snap) => {
            let word = snap.val();
            this.setState({ deliver: word['delivered'] });
            // let newState = [];
            // newState.push({
            //     uid: word['uid'],
            //     name: word['name'],
            //     email: word['email'],
            //     mobno: word['mobn'],
            //     address: word['address'],
            //     paymode: word['paymode'],
            //     products: word['products'],
            //     totelPay: word['totelPay'],
            //     delivered: word['delivered'],
            // })
            this.setState({ cartdata: word });
        })
        const prodRef = db.ref(`Order/${id}/products`);
        prodRef.on('value', (snap) => {
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
    }

    handleChange = () => {
        this.setState({ deliver: !this.state.deliver });
        console.log(this.state.deliver);
        db.ref(`Order/${this.state.id}`).update({ delivered: !this.state.deliver })
    };

    render() {
        const product = this.state.product;
        return (
            <React.Fragment>
                <div className="ordlistBg">
                    <div style={{ overflow: "hidden", overflowY: "visible", width: "100vw", height: "100vh" }}>
                        <div className="invoice-box">
                            <table cellpadding="0" cellspacing="0">
                                <tr className="top">
                                    <td colspan="2">
                                        <table>
                                            <tr>
                                                <td className="title">
                                                    <img src={logo} style={{ width: "20%" }} />
                                                </td>
                                                <td>
                                                    Invoice #: {this.state.id}<br />
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr className="information">
                                    <td colspan="2">
                                        <table>
                                            <tr>
                                                <td>
                                                    RootTree, Inc.<br />
                                                12345 Sunny Road<br />
                                                Sunnyville, CA 12345
                                            </td>
                                                <td>
                                                    {this.state.cartdata['name']}<br />
                                                    {this.state.cartdata['email']}<br />
                                                    {this.state.cartdata['address']}
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <tr className="heading">
                                    <td>Payment Method </td>

                                    <td>Arriving Time(YY-MM-DD)</td>
                                </tr>
                                <tr className="details">
                                    <td>{this.state.cartdata['paymode']}</td>
                                    <td>{this.state.dTime}</td>
                                </tr>

                                <tr className="heading">
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
                                            <tr className="item">
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

                                <tr className="total">
                                    <td>
                                    </td>

                                    <td>
                                        Total: ${this.state.cartdata['totelPay']}
                                    </td>
                                </tr>
                                <tr className="item">
                                    <td>
                                        Delivery Status :
                                    </td>
                                    <td>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<PurpleSwitch checked={this.state.deliver} onChange={this.handleChange} name="checkedA" />}
                                            />
                                        </FormGroup>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default OrderList;