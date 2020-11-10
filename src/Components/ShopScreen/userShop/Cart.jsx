import { reaction, values } from 'mobx';
import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { dataBase, db } from '../../../FireBaseControler/firebaseConfig';
import Style from './Cart.module.scss'


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartdata: [],
            cartCost: 0,
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

    render() {
        return (
            <React.Fragment>
                <div className={`${Style.contBg}`}>
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
                                            <h3>{data.name}</h3>
                                            <h5>{data.count}</h5>
                                        </div>
                                        <h5 width="15%">($){data.price}</h5>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <Link to="checkout" className={`${Style.cartContFooter}`}>
                        <span>Checkout -${this.state.cartCost}</span>
                        <div className={`${Style.arowAnimation}`}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </React.Fragment>
        );
    }
}

export default Cart;